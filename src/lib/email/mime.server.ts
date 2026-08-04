/**
 * Minimal RFC 2822 MIME builder used to send Gmail messages with real file
 * attachments through the Lovable connector gateway.
 * Server-only — never import from browser code.
 */

export type Attachment = {
  filename: string;
  mimeType: string;
  content: Uint8Array;
};

const ALLOWED_EXT = new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "jpg",
  "jpeg",
  "png",
  "webp",
]);

const RECEIPT_EXT = new Set(["pdf", "jpg", "jpeg", "png", "webp"]);

const MIME_BY_EXT: Record<string, string> = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
};

export function extensionOf(name: string): string {
  const idx = name.lastIndexOf(".");
  return idx === -1 ? "" : name.slice(idx + 1).toLowerCase();
}

export function isAllowedFile(name: string, kind: "receipt" | "documents"): boolean {
  const ext = extensionOf(name);
  return kind === "receipt" ? RECEIPT_EXT.has(ext) : ALLOWED_EXT.has(ext);
}

export function mimeForFile(name: string): string {
  return MIME_BY_EXT[extensionOf(name)] ?? "application/octet-stream";
}

/** Strip paths and dangerous characters from a client-supplied filename. */
export function sanitizeFilename(name: string): string {
  const base = name.split(/[\\/]/).pop() ?? "file";
  const cleaned = base.replace(/[^\w.\- ]+/g, "_").replace(/\s+/g, " ").trim();
  return (cleaned || "file").slice(0, 120);
}

function encodeHeaderValue(value: string): string {
  // RFC 2047 encoded-word for any non-ASCII header content.
  // eslint-disable-next-line no-control-regex
  if (/^[\x20-\x7E]*$/.test(value)) return value;
  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

function chunk76(b64: string): string {
  return b64.replace(/(.{76})/g, "$1\r\n");
}

export function buildMimeMessage(opts: {
  to: string;
  cc?: string;
  replyTo?: string;
  subject: string;
  text: string;
  attachments?: Attachment[];
}): string {
  const boundary = `asman_${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
  const headers = [
    `To: ${opts.to}`,
    opts.cc ? `Cc: ${opts.cc}` : null,
    opts.replyTo ? `Reply-To: ${opts.replyTo}` : null,
    `Subject: ${encodeHeaderValue(opts.subject)}`,
    "MIME-Version: 1.0",
  ].filter(Boolean) as string[];

  const attachments = opts.attachments ?? [];
  if (attachments.length === 0) {
    return [
      ...headers,
      'Content-Type: text/plain; charset="UTF-8"',
      "Content-Transfer-Encoding: base64",
      "",
      chunk76(Buffer.from(opts.text, "utf8").toString("base64")),
    ].join("\r\n");
  }

  const parts: string[] = [
    ...headers,
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    chunk76(Buffer.from(opts.text, "utf8").toString("base64")),
  ];

  for (const a of attachments) {
    parts.push(
      `--${boundary}`,
      `Content-Type: ${a.mimeType}; name="${a.filename}"`,
      "Content-Transfer-Encoding: base64",
      `Content-Disposition: attachment; filename="${a.filename}"`,
      "",
      chunk76(Buffer.from(a.content).toString("base64")),
    );
  }
  parts.push(`--${boundary}--`, "");
  return parts.join("\r\n");
}

export function toBase64Url(raw: string): string {
  return Buffer.from(raw, "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}
