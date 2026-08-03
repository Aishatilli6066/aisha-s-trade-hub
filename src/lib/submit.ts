import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "./discovery";

export type SubmissionEnvelope = {
  subject: string;
  body: string;
  files: File[];
};

export function fileList(files: File[]) {
  if (!files.length) return "— none attached —";
  return files.map((f) => `• ${f.name} (${Math.round(f.size / 1024)} KB)`).join("\n");
}

/**
 * Hands the completed submission to the configured email address.
 * Payment reference and receipt are included so the payment can be
 * verified MANUALLY — nothing here approves or schedules automatically.
 */
export function mailtoUrl({ subject, body }: Omit<SubmissionEnvelope, "files">) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export function whatsappUrl(body: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
}

export function sendSubmission(envelope: SubmissionEnvelope) {
  if (typeof window === "undefined") return;
  window.location.href = mailtoUrl(envelope);
}
