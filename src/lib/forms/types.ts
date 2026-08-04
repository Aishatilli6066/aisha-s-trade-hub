export type FieldType =
  | "text"
  | "email"
  | "tel"
  | "url"
  | "date"
  | "textarea"
  | "select"
  | "checkboxes"
  | "files";

export type FieldSpec = {
  id: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  help?: string;
  /** For "checkboxes": append a free-text "Other" input. */
  other?: boolean;
  /** For "files": file kind determines accept + limits. */
  fileKind?: "receipt" | "documents";
};

export type StepSpec = {
  title: string;
  description?: string;
  /** Rendered above the fields, e.g. accepted document examples. */
  examples?: string[];
  fields: FieldSpec[];
  kind?: "payment" | "consent";
};

export type FormSpec = {
  id: string;
  /** Human title shown in the page header. */
  title: string;
  eyebrow: string;
  intro: string;
  flow: string[];
  /** Live Flutterwave link, or null when no dedicated link exists yet. */
  paymentLink: string | null;
  paymentLabel: string;
  paymentNote: string;
  submitLabel: string;
  /** Builds the email subject from collected values. */
  subject: (v: Record<string, string | string[]>) => string;
  confirmation: string;
  steps: StepSpec[];
};

export const CONSENTS = [
  "I confirm that the information provided is accurate.",
  "I understand that payment will be verified manually before work begins.",
  "I understand that the consultation or discovery fee does not guarantee a transaction, supplier, buyer, funding or financial outcome.",
  "I consent to the use of my information and uploaded documents solely for assessing and delivering the requested service.",
];

export const RECEIPT_ACCEPT = ".pdf,.jpg,.jpeg,.png,.webp";
export const DOCS_ACCEPT =
  ".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.webp";
export const MAX_FILE_BYTES = 10 * 1024 * 1024;
export const MAX_DOCS = 10;

export const SECURITY_WARNING =
  "Never upload passwords, full bank card details, or confidential login credentials. Share only documents relevant to this request.";

/** Standard payment-verification fields reused by every form. */
export function paymentFields(): FieldSpec[] {
  return [
    { id: "pay_email", label: "Email used for the Flutterwave payment", type: "email", required: true },
    { id: "pay_date", label: "Payment date", type: "date", required: true },
    {
      id: "pay_ref",
      label: "Flutterwave transaction / reference number",
      type: "text",
      required: true,
      placeholder: "e.g. FLW-XXXXXXXXXX",
    },
    {
      id: "pay_receipt",
      label: "Payment receipt upload",
      type: "files",
      required: true,
      fileKind: "receipt",
      help: "PDF, JPG, JPEG, PNG or WebP. Maximum 10 MB.",
    },
  ];
}
