import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import {
  buildMimeMessage,
  isAllowedFile,
  mimeForFile,
  sanitizeFilename,
  toBase64Url,
  type Attachment,
} from "@/lib/email/mime.server";

const OWNER_EMAIL = "aishau6066@gmail.com";
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const MAX_DOCS = 10;
/** Combined raw size guard — base64 inflates ~33%, Gmail caps around 35 MB. */
const MAX_TOTAL_BYTES = 18 * 1024 * 1024;

const payloadSchema = z.object({
  formId: z.string().min(1).max(60),
  title: z.string().min(1).max(200),
  subject: z.string().min(1).max(300),
  clientName: z.string().max(200).optional().default(""),
  clientEmail: z.string().email().max(200),
  whatsapp: z.string().max(60).optional().default(""),
  company: z.string().max(200).optional().default(""),
  payEmail: z.string().max(200).optional().default(""),
  payDate: z.string().max(60).optional().default(""),
  payRef: z.string().max(120).optional().default(""),
  clientMessage: z.string().max(2000),
  sections: z
    .array(
      z.object({
        title: z.string().max(200),
        items: z.array(z.object({ label: z.string().max(300), value: z.string().max(5000) })),
      }),
    )
    .max(30),
  consents: z.array(z.string().max(400)).max(10),
});

function jsonError(status: number, message: string) {
  return new Response(JSON.stringify({ ok: false, error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

async function sendGmail(opts: {
  gatewayKey: string;
  connectionKey: string;
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  attachments?: Attachment[];
}) {
  const raw = toBase64Url(
    buildMimeMessage({
      to: opts.to,
      replyTo: opts.replyTo,
      subject: opts.subject,
      text: opts.text,
      attachments: opts.attachments,
    }),
  );
  const res = await fetch(
    "https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${opts.gatewayKey}`,
        "X-Connection-Api-Key": opts.connectionKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw }),
    },
  );
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Gmail send failed [${res.status}]: ${body.slice(0, 500)}`);
  }
  return res.json();
}

export const Route = createFileRoute("/api/public/submit-request")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const gatewayKey = process.env["LOVABLE_API_KEY"];
        const connectionKey = process.env["GOOGLE_MAIL_API_KEY"];
        if (!gatewayKey || !connectionKey) {
          console.error("submit-request: email credentials are not configured");
          return jsonError(500, "Email service is not configured. Please contact us on WhatsApp.");
        }

        let form: FormData;
        try {
          form = await request.formData();
        } catch {
          return jsonError(400, "Invalid submission payload.");
        }

        const parsed = payloadSchema.safeParse(
          JSON.parse(String(form.get("payload") ?? "{}") || "{}"),
        );
        if (!parsed.success) {
          return jsonError(400, "Some answers were rejected by the server. Please review the form.");
        }
        const data = parsed.data;

        // ---- Files -------------------------------------------------------
        const attachments: Attachment[] = [];
        let total = 0;
        const receipts = form.getAll("receipt").filter((f): f is File => f instanceof File);
        const docs = form.getAll("documents").filter((f): f is File => f instanceof File);
        if (docs.length > MAX_DOCS) return jsonError(400, `Attach at most ${MAX_DOCS} supporting documents.`);

        for (const [kind, list] of [
          ["receipt", receipts],
          ["documents", docs],
        ] as const) {
          for (const file of list) {
            if (file.size > MAX_FILE_BYTES) return jsonError(400, `${file.name} is larger than 10 MB.`);
            const filename = sanitizeFilename(file.name);
            if (!isAllowedFile(filename, kind)) return jsonError(400, `${file.name} is not an accepted file type.`);
            total += file.size;
            if (total > MAX_TOTAL_BYTES)
              return jsonError(
                400,
                "Your files exceed the 18 MB total limit for one submission. Please upload smaller or fewer files.",
              );
            attachments.push({
              filename,
              mimeType: mimeForFile(filename),
              content: new Uint8Array(await file.arrayBuffer()),
            });
          }
        }

        // ---- Owner notification -----------------------------------------
        const submittedAt = new Date().toUTCString();
        const lines: string[] = [
          data.title.toUpperCase(),
          "Submitted from aishausman.com — manual payment verification requested.",
          "",
          "--- SUBMISSION SUMMARY ---",
          `Service: ${data.title}`,
          `Client name: ${data.clientName || "—"}`,
          `Client email: ${data.clientEmail}`,
          `WhatsApp: ${data.whatsapp || "—"}`,
          `Company / business: ${data.company || "—"}`,
          `Flutterwave payment email: ${data.payEmail || "—"}`,
          `Payment date: ${data.payDate || "—"}`,
          `Flutterwave reference: ${data.payRef || "—"}`,
          `Submitted: ${submittedAt}`,
          `Attachments: ${attachments.length ? attachments.map((a) => a.filename).join(", ") : "none"}`,
          "",
        ];
        for (const s of data.sections) {
          lines.push(`--- ${s.title.toUpperCase()} ---`);
          for (const item of s.items) lines.push(`${item.label}: ${item.value}`);
          lines.push("");
        }
        if (data.consents.length) {
          lines.push("--- CONSENT ---");
          for (const c of data.consents) lines.push(`[x] ${c}`);
        }

        try {
          await sendGmail({
            gatewayKey,
            connectionKey,
            to: OWNER_EMAIL,
            replyTo: data.clientEmail,
            subject: data.subject,
            text: lines.join("\n"),
            attachments,
          });
        } catch (err) {
          console.error("submit-request: owner notification failed", (err as Error).message);
          return jsonError(
            502,
            "We could not deliver your submission right now. Your answers are safe — please press Retry.",
          );
        }

        // ---- Client confirmation (non-fatal) -----------------------------
        let clientEmailSent = true;
        try {
          await sendGmail({
            gatewayKey,
            connectionKey,
            to: data.clientEmail,
            replyTo: OWNER_EMAIL,
            subject: `Received: ${data.title} — Aisha Usman`,
            text: [
              `Hello ${data.clientName || "there"},`,
              "",
              `Thank you — your ${data.title} submission has been received.`,
              "",
              data.clientMessage,
              "",
              "Summary of what we received:",
              `• Flutterwave reference: ${data.payRef || "—"}`,
              `• Payment date: ${data.payDate || "—"}`,
              `• Files received: ${attachments.length ? attachments.map((a) => a.filename).join(", ") : "none"}`,
              `• Submitted: ${submittedAt}`,
              "",
              "If anything is missing, reply to this email or message +234 704 232 2970 on WhatsApp.",
              "",
              "Aisha Usman",
              "International Trade & Sourcing Consultant",
            ].join("\n"),
          });
        } catch (err) {
          clientEmailSent = false;
          console.error("submit-request: client confirmation failed", (err as Error).message);
        }

        return new Response(JSON.stringify({ ok: true, clientEmailSent }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
