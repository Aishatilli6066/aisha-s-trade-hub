import {
  CONSULTATION_PAYMENT_LINK,
  DISCOVERY_PAYMENT_LINKS,
  BUSINESS_PLAN_PAYMENT_LINK,
} from "@/lib/discovery";
import { buildConfirmation, paymentFields, type FormSpec } from "./types";

const INCOTERMS = ["EXW", "FCA", "FOB", "CFR", "CIF", "DAP", "DDP", "Not sure"];
const YES_NO = ["Yes", "No"];

const consultation: FormSpec = {
  id: "consultation",
  eyebrow: "Advisory — $250 USD",
  title: "International Trade Strategy Advisory",
  intro:
    "Pay the $250 fee, complete this advisory questionnaire, then enter your Flutterwave reference and attach your receipt. Payment is verified manually — once verified, your submission and documents are reviewed and your written strategic assessment is delivered by email or WhatsApp.",
  flow: [
    "Pay $250",
    "Complete Questionnaire",
    "Reference & Receipt",
    "Manual Verification",
    "Advisory Review",
    "Strategy Delivered",
  ],
  paymentLink: CONSULTATION_PAYMENT_LINK,
  paymentLabel: "Pay $250 Securely",
  paymentNote:
    "Payment is verified manually. Your advisory is not confirmed until verification is completed.",
  submitLabel: "Submit Advisory Questionnaire for Verification",
  subject: (v) =>
    `Paid Advisory Questionnaire — ${v["full_name"] || "Client"} — ${v["pay_ref"] || "No reference"}`,
  confirmation: buildConfirmation({
    submitted: "advisory questionnaire",
    review:
      "nothing is auto-approved, and your advisory is confirmed only once verification is complete.",
    next: "After verification your submission and documents are reviewed, and your written strategic assessment, recommendations, risk observations and next-step action plan are delivered by email or WhatsApp — with voice-note explanations where useful. You then have three business days of limited clarification support.",
  }),
  steps: [
    {
      title: "Client Information",
      fields: [
        { id: "full_name", label: "Full name", type: "text", required: true },
        { id: "email", label: "Email address", type: "email", required: true },
        {
          id: "whatsapp",
          label: "WhatsApp number (with country code)",
          type: "tel",
          required: true,
          placeholder: "+234 708 444 3626",
        },
        { id: "country", label: "Country of residence", type: "text", required: true },
        { id: "company", label: "Company or business name", type: "text" },
        { id: "role", label: "Job title or role", type: "text" },
        { id: "website", label: "Website", type: "url" },
        { id: "social", label: "LinkedIn or business social-media link", type: "url" },
        { id: "industry", label: "Industry or business type", type: "text" },
        {
          id: "stage",
          label: "Business stage",
          type: "select",
          options: [
            "Idea / Planning",
            "Startup",
            "Operating Business",
            "Established Company",
            "Investor / Buyer",
            "Other",
          ],
        },
      ],
    },
    {
      title: "Advisory Focus",
      description: "What would you like the advisory to address? Select all that apply.",
      fields: [
        {
          id: "focus",
          label: "Advisory focus",
          type: "checkboxes",
          required: true,
          other: true,
          options: [
            "Importation strategy",
            "Export strategy",
            "Global product sourcing",
            "Supplier identification and verification",
            "OEM or ODM manufacturing",
            "Private-label product development",
            "Agricultural commodity sourcing",
            "Agricultural commodity export",
            "Buyer representation",
            "Export pricing and costing",
            "Landed-cost analysis",
            "Shipping and logistics",
            "International payment terms",
            "Letter of Credit or trade finance",
            "Trade documentation and compliance",
            "Market entry and expansion",
            "Risk assessment",
          ],
        },
      ],
    },
    {
      title: "Objectives and Current Situation",
      fields: [
        {
          id: "objective",
          label: "What do you want to achieve from this advisory?",
          type: "textarea",
          required: true,
        },
        {
          id: "decisions",
          label: "What specific decisions do you need help making?",
          type: "textarea",
          required: true,
        },
        {
          id: "value",
          label: "What result would make this advisory valuable to you?",
          type: "textarea",
          required: true,
        },
        {
          id: "situation",
          label: "Describe your current situation and the stage you have reached.",
          type: "textarea",
          required: true,
        },
        {
          id: "challenges",
          label: "What challenges or risks are preventing you from moving forward?",
          type: "textarea",
          required: true,
        },
        { id: "tried", label: "What have you already tried?", type: "textarea" },
        {
          id: "deadline",
          label: "Is there an urgent deadline? If yes, provide the date and reason.",
          type: "textarea",
        },
      ],
    },
    {
      title: "Product, Market and Transaction Details",
      fields: [
        { id: "product", label: "Product, service or commodity name", type: "text" },
        { id: "product_category", label: "Product category", type: "text" },
        { id: "origin", label: "Origin or sourcing country", type: "text" },
        { id: "destination", label: "Target or destination country", type: "text" },
        { id: "port", label: "Destination port (if known)", type: "text" },
        { id: "quantity", label: "Quantity or expected volume", type: "text" },
        { id: "budget", label: "Target price or available budget", type: "text" },
        { id: "packaging", label: "Packaging requirements", type: "textarea" },
        { id: "specs", label: "Quality or technical specifications", type: "textarea" },
        {
          id: "certs",
          label: "Certification, inspection or testing requirements",
          type: "textarea",
        },
        { id: "incoterm", label: "Preferred Incoterm", type: "select", options: INCOTERMS },
        {
          id: "payment_method",
          label: "Preferred payment method",
          type: "select",
          options: ["LC", "TT", "CAD", "Documentary Collection", "Escrow", "Not sure"],
        },
        { id: "timeline", label: "Expected timeline", type: "text" },
        {
          id: "contacted",
          label: "Have you contacted any supplier, buyer, freight company or agent?",
          type: "select",
          options: YES_NO,
        },
        { id: "contacted_detail", label: "If yes, explain.", type: "textarea" },
        {
          id: "docs_received",
          label:
            "Have you received a quotation, PI, PO, contract, LC draft or shipping quotation?",
          type: "select",
          options: YES_NO,
        },
        {
          id: "paid_signed",
          label: "Have you made any payment or signed any agreement?",
          type: "select",
          options: YES_NO,
        },
        { id: "paid_signed_detail", label: "If yes, explain.", type: "textarea" },
      ],
    },
    {
      title: "Questions for the Advisory",
      fields: [
        {
          id: "q1",
          label: "Question 1 — the most important question you need answered",
          type: "textarea",
          required: true,
        },
        { id: "q2", label: "Question 2", type: "textarea" },
        { id: "q3", label: "Question 3", type: "textarea" },
        {
          id: "immediate_decisions",
          label: "Are there any specific decisions you want to make once you receive the advisory?",
          type: "textarea",
        },
        {
          id: "sensitive",
          label: "Is there any sensitive or confidential context Aisha should know beforehand?",
          type: "textarea",
        },
      ],
    },
    {
      title: "Supporting Documents",
      examples: [
        "Supplier quotation",
        "Proforma invoice",
        "Product images",
        "Product specifications",
        "Purchase order",
        "Contract",
        "LC draft",
        "Shipping quotation",
        "Certificate of analysis",
        "Packaging design",
        "Costing sheet",
      ],
      fields: [
        { id: "documents", label: "Select supporting documents", type: "files", fileKind: "documents" },
        { id: "link_supplier", label: "Supplier website or marketplace link", type: "url" },
        { id: "link_drive", label: "Google Drive / Dropbox link", type: "url" },
        { id: "link_other", label: "Other relevant URL", type: "url" },
      ],
    },
    { title: "Payment Verification", kind: "payment", fields: paymentFields() },
    { title: "Consent and Submit", kind: "consent", fields: [] },
  ],
};

const sourcing: FormSpec = {
  id: "sourcing",
  eyebrow: "Done-For-You — $100 Project Discovery Fee",
  title: "Global Sourcing & Procurement",
  intro:
    "Complete your sourcing requirements, pay the $100 Project Discovery Fee, then enter your Flutterwave reference and attach your receipt. Payment is verified manually before project review begins.",
  flow: [
    "Complete Requirements",
    "Pay $100 Discovery Fee",
    "Reference & Receipt",
    "Submit Securely",
    "Manual Verification",
    "Project Review",
    "Written Proposal",
  ],
  paymentLink: DISCOVERY_PAYMENT_LINKS.sourcing,
  paymentLabel: "Pay $100 Discovery Fee Securely",
  paymentNote:
    "The $100 Project Discovery Fee is non-refundable and is credited toward your final professional service fee if you proceed.",
  submitLabel: "Submit Global Sourcing Request for Verification",
  subject: (v) =>
    `Global Sourcing Discovery Request — ${v["full_name"] || "Client"} — ${v["pay_ref"] || "No reference"}`,
  confirmation: buildConfirmation({
    submitted: "global sourcing requirements",
    review:
      "scope review begins only once your $100 Project Discovery Fee is verified.",
    next: "After verification you will receive a written sourcing proposal covering scope, supplier-verification approach, timeline and the final professional fee, with the discovery fee credited if you proceed.",
  }),
  steps: [
    {
      title: "Client and Company Information",
      fields: [
        { id: "full_name", label: "Full name", type: "text", required: true },
        { id: "email", label: "Email address", type: "email", required: true },
        {
          id: "whatsapp",
          label: "WhatsApp number (with country code)",
          type: "tel",
          required: true,
        },
        { id: "country", label: "Country", type: "text", required: true },
        { id: "company", label: "Company name", type: "text" },
        { id: "role", label: "Job title", type: "text" },
        { id: "website", label: "Company website", type: "url" },
        { id: "reg_no", label: "Company registration number", type: "text" },
        { id: "industry", label: "Industry", type: "text" },
        {
          id: "requester_type",
          label: "Is this request for…",
          type: "select",
          options: [
            "Personal purchase",
            "Startup",
            "SME",
            "Established company",
            "Distributor",
            "Retailer",
            "Manufacturer",
            "Other",
          ],
        },
      ],
    },
    {
      title: "Product Information",
      fields: [
        { id: "product", label: "Product name", type: "text", required: true },
        {
          id: "product_desc",
          label: "Detailed product description",
          type: "textarea",
          required: true,
        },
        { id: "quantity", label: "Required quantity", type: "text", required: true },
        { id: "destination", label: "Destination country", type: "text", required: true },
        { id: "product_category", label: "Product category", type: "text" },
        {
          id: "reference_link",
          label: "Alibaba, 1688, Amazon, manufacturer or reference-product link",
          type: "url",
        },
        {
          id: "existing_quote",
          label: "Existing supplier quotation or PI (describe, and attach in Step 8)",
          type: "textarea",
        },
        {
          id: "product_type",
          label: "Is the product standard, customised, OEM, ODM or private label?",
          type: "select",
          options: ["Standard", "Customised", "OEM", "ODM", "Private label", "Not sure"],
        },
        { id: "preferred_country", label: "Preferred manufacturing country", type: "text" },
        { id: "alt_countries", label: "Alternative sourcing countries accepted", type: "text" },
      ],
    },
    {
      title: "Technical and Quality Requirements",
      fields: [
        {
          id: "tech_specs",
          label:
            "Exact specifications, dimensions, materials, capacity, model or performance requirements",
          type: "textarea",
        },
        { id: "quality_level", label: "Required quality level", type: "text" },
        {
          id: "certifications",
          label: "Required certifications or standards",
          type: "checkboxes",
          other: true,
          options: ["CE", "FDA", "ISO", "SONCAP", "RoHS", "FCC"],
        },
        {
          id: "inspection",
          label: "Inspection or laboratory-testing requirements",
          type: "textarea",
        },
        {
          id: "sample_required",
          label: "Sample required before bulk order?",
          type: "select",
          options: YES_NO,
        },
        { id: "warranty", label: "Warranty or after-sales requirements", type: "textarea" },
        {
          id: "non_negotiable",
          label: "Acceptable alternatives or non-negotiable requirements",
          type: "textarea",
        },
      ],
    },
    {
      title: "Branding and Packaging",
      fields: [
        {
          id: "branding",
          label: "Do you require logo printing or custom branding?",
          type: "select",
          options: YES_NO,
        },
        { id: "brand_name", label: "Brand name", type: "text" },
        { id: "packaging_type", label: "Packaging type", type: "text" },
        {
          id: "packaging_extras",
          label: "Custom box, label, manual, barcode or insert requirements",
          type: "textarea",
        },
        { id: "artwork", label: "Artwork available?", type: "select", options: YES_NO },
        { id: "colours", label: "Preferred colours", type: "text" },
        { id: "pack_language", label: "Packaging language", type: "text" },
        {
          id: "retail_ready",
          label: "Retail-ready or shipping-only packaging",
          type: "select",
          options: ["Retail-ready", "Shipping-only", "Not sure"],
        },
      ],
    },
    {
      title: "Commercial Requirements",
      fields: [
        {
          id: "total_budget",
          label: "Estimated total procurement budget",
          type: "text",
          required: true,
        },
        { id: "target_price", label: "Target unit price (if known)", type: "text" },
        { id: "order_qty", label: "Expected order quantity", type: "text", required: true },
        {
          id: "delivery_timeline",
          label: "Required delivery timeline",
          type: "text",
          required: true,
        },
        { id: "moq_flex", label: "MOQ flexibility", type: "text" },
        { id: "payment_method", label: "Preferred payment method", type: "text" },
        { id: "landed_cost_target", label: "Existing target landed cost", type: "text" },
        {
          id: "order_frequency",
          label: "Will this be a one-time purchase or recurring order?",
          type: "select",
          options: ["One-time purchase", "Recurring order", "Not sure"],
        },
        { id: "repeat_frequency", label: "Expected repeat-order frequency", type: "text" },
      ],
    },
    {
      title: "Shipping and Destination",
      fields: [
        { id: "delivery_city", label: "Final delivery city and country", type: "text" },
        { id: "port", label: "Destination port or airport", type: "text" },
        {
          id: "ship_method",
          label: "Preferred shipping method",
          type: "select",
          options: ["Sea", "Air", "Rail", "Courier", "Not sure"],
        },
        {
          id: "incoterm",
          label: "Preferred Incoterm",
          type: "select",
          options: ["EXW", "FOB", "CFR", "CIF", "DDP", "Not sure"],
        },
        {
          id: "forwarder",
          label: "Do you already have a freight forwarder?",
          type: "select",
          options: YES_NO,
        },
        {
          id: "landed_cost",
          label: "Do you need landed-cost analysis?",
          type: "select",
          options: YES_NO,
        },
        {
          id: "customs_known",
          label: "Customs, certification or import restrictions already known",
          type: "textarea",
        },
      ],
    },
    {
      title: "Current Status and Risks",
      fields: [
        {
          id: "contacted_suppliers",
          label: "Have you already contacted suppliers?",
          type: "select",
          options: YES_NO,
        },
        {
          id: "received_quotes",
          label: "Have you received quotations or samples?",
          type: "select",
          options: YES_NO,
        },
        { id: "made_payment", label: "Have you made any payment?", type: "select", options: YES_NO },
        {
          id: "problems",
          label: "What problems have you experienced so far?",
          type: "textarea",
        },
        {
          id: "concerns",
          label: "What are your main concerns?",
          type: "checkboxes",
          other: true,
          options: [
            "Fraud",
            "Quality",
            "Price",
            "Communication",
            "MOQ",
            "Shipping",
            "Compliance",
            "Delay",
          ],
        },
        {
          id: "expected_outcome",
          label: "What outcome do you expect from ASMAN Prime Hub?",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      title: "Supporting Documents",
      examples: [
        "Product photos",
        "Drawings",
        "Specifications",
        "Quotations",
        "Sample details",
        "Packaging design",
        "Certificates",
      ],
      fields: [
        { id: "documents", label: "Select supporting documents", type: "files", fileKind: "documents" },
        { id: "link_product", label: "Product or supplier link", type: "url" },
        { id: "link_drive", label: "Google Drive / Dropbox link", type: "url" },
        { id: "link_other", label: "Other relevant URL", type: "url" },
      ],
    },
    { title: "Discovery Fee Payment", kind: "payment", fields: paymentFields() },
    { title: "Consent and Submit", kind: "consent", fields: [] },
  ],
};

const commodity: FormSpec = {
  id: "commodity",
  eyebrow: "Done-For-You — $150 Project Discovery Fee",
  title: "Agricultural Commodity Buyer Representation",
  intro:
    "Complete your commodity requirements, pay the $150 Project Discovery Fee, then enter your Flutterwave reference and attach your receipt. Payment is verified manually before feasibility review begins.",
  flow: [
    "Complete Commodity Requirements",
    "Pay $150 Discovery Fee",
    "Reference & Receipt",
    "Submit Securely",
    "Manual Verification",
    "Feasibility Review",
    "Proposal",
  ],
  paymentLink: DISCOVERY_PAYMENT_LINKS.commodity,
  paymentLabel: "Pay $150 Discovery Fee Securely",
  paymentNote:
    "The $150 Project Discovery Fee is non-refundable and credited toward your final professional service fee if you proceed.",
  submitLabel: "Submit Commodity Buyer Request for Verification",
  subject: (v) =>
    `Commodity Buyer Discovery Request — ${v["company"] || v["full_name"] || "Buyer"} — ${
      v["commodity"] || "Commodity"
    } — ${v["pay_ref"] || "No reference"}`,
  confirmation: buildConfirmation({
    submitted: "commodity buyer requirements",
    review:
      "feasibility and scope review begins only once your $150 Project Discovery Fee is verified.",
    next: "After verification you will receive a written buyer-representation proposal covering scope, sourcing and inspection approach, timeline and the final professional fee — or a short request for clarification where a specification is unclear.",
  }),
  steps: [
    {
      title: "Buyer and Company Information",
      fields: [
        { id: "full_name", label: "Full name", type: "text", required: true },
        { id: "email", label: "Business email", type: "email", required: true },
        { id: "whatsapp", label: "WhatsApp number (with country code)", type: "tel", required: true },
        { id: "company", label: "Company name", type: "text", required: true },
        { id: "country", label: "Country", type: "text", required: true },
        { id: "role", label: "Job title", type: "text" },
        { id: "website", label: "Company website", type: "url" },
        { id: "reg_no", label: "Company registration number", type: "text" },
        {
          id: "business_type",
          label: "Business type",
          type: "select",
          options: [
            "Importer",
            "Distributor",
            "Processor",
            "Manufacturer",
            "Wholesaler",
            "Retailer",
            "Agent",
            "Other",
          ],
        },
        { id: "years", label: "Years in business", type: "text" },
      ],
    },
    {
      title: "Commodity Requirement",
      fields: [
        { id: "commodity", label: "Commodity name", type: "text", required: true },
        { id: "grade", label: "Required grade or variety", type: "text", required: true },
        { id: "quantity", label: "Total quantity", type: "text", required: true },
        { id: "destination", label: "Destination country", type: "text", required: true },
        { id: "dest_port", label: "Destination port", type: "text", required: true },
        { id: "botanical", label: "Botanical / scientific name", type: "text" },
        { id: "end_use", label: "Intended end use", type: "text" },
        { id: "origin_pref", label: "Country of origin preference", type: "text" },
        { id: "trial_qty", label: "Trial order quantity", type: "text" },
        { id: "annual_req", label: "Long-term annual requirement", type: "text" },
      ],
    },
    {
      title: "Quality Specifications",
      fields: [
        { id: "purity", label: "Purity percentage", type: "text" },
        { id: "moisture", label: "Moisture limit", type: "text" },
        { id: "foreign_matter", label: "Foreign matter limit", type: "text" },
        {
          id: "other_specs",
          label: "Oil content, aflatoxin, count, size, colour or other relevant specification",
          type: "textarea",
        },
        { id: "grade_standard", label: "Required grade standard", type: "text" },
        {
          id: "production_status",
          label: "Organic, conventional, non-GMO or other status",
          type: "select",
          options: ["Organic", "Conventional", "Non-GMO", "Other"],
        },
        { id: "coa", label: "Required certificate of analysis", type: "textarea" },
        { id: "lab_testing", label: "Laboratory-testing requirements", type: "textarea" },
        {
          id: "inspection_co",
          label: "Inspection company",
          type: "select",
          options: [
            "SGS",
            "Cotecna",
            "Bureau Veritas",
            "Intertek",
            "Buyer-appointed",
            "Not required",
          ],
        },
        { id: "sample_required", label: "Sample required?", type: "select", options: YES_NO },
        {
          id: "pre_shipment",
          label: "Pre-shipment inspection required?",
          type: "select",
          options: YES_NO,
        },
      ],
    },
    {
      title: "Packaging and Labelling",
      fields: [
        { id: "packaging_type", label: "Packaging type", type: "text" },
        { id: "pack_size", label: "Bag / carton / drum size", type: "text" },
        { id: "inner_liner", label: "Inner liner requirement", type: "text" },
        { id: "vacuum", label: "Vacuum packing requirement", type: "select", options: YES_NO },
        { id: "private_label", label: "Private label or buyer branding", type: "textarea" },
        { id: "marking", label: "Marking and labelling instructions", type: "textarea" },
        { id: "palletisation", label: "Palletisation requirement", type: "select", options: YES_NO },
        {
          id: "container",
          label: "Container preference",
          type: "select",
          options: ["20ft", "40ft", "40ft HC", "Breakbulk", "Not sure"],
        },
      ],
    },
    {
      title: "Shipment and Delivery",
      fields: [
        { id: "schedule", label: "Required shipment schedule", type: "text", required: true },
        {
          id: "incoterm",
          label: "Preferred Incoterm",
          type: "select",
          required: true,
          options: ["FOB", "CFR", "CIF"],
        },
        { id: "load_port", label: "Preferred Nigerian loading port", type: "text" },
        { id: "partial", label: "Partial shipment allowed?", type: "select", options: YES_NO },
        { id: "transship", label: "Transshipment allowed?", type: "select", options: YES_NO },
        { id: "deadline", label: "Delivery deadline", type: "text" },
        { id: "batch_qty", label: "Monthly or batch shipment quantity", type: "text" },
        { id: "insurance", label: "Insurance requirement", type: "textarea" },
      ],
    },
    {
      title: "Commercial Terms",
      fields: [
        { id: "target_price", label: "Target price or budget range", type: "text", required: true },
        {
          id: "payment_method",
          label: "Preferred payment method",
          type: "select",
          required: true,
          options: [
            "Irrevocable LC at sight",
            "Confirmed LC at sight",
            "TT deposit and balance",
            "CAD",
            "Documentary collection",
            "Other",
          ],
        },
        {
          id: "ucp600",
          label: "Is the LC subject to UCP 600?",
          type: "select",
          options: ["Yes", "No", "Not sure"],
        },
        { id: "bank", label: "Buyer bank name and country (optional)", type: "text" },
        {
          id: "currency",
          label: "Currency",
          type: "select",
          options: ["USD", "EUR", "GBP", "Other"],
        },
        { id: "negotiable", label: "Is price negotiable?", type: "select", options: YES_NO },
        {
          id: "authorised",
          label: "Are you authorised to purchase on behalf of the company?",
          type: "select",
          options: YES_NO,
        },
      ],
    },
    {
      title: "Documentation and Compliance",
      fields: [
        {
          id: "required_docs",
          label: "Select required documents",
          type: "checkboxes",
          other: true,
          options: [
            "Commercial invoice",
            "Packing list",
            "Certificate of origin",
            "Phytosanitary certificate",
            "Fumigation certificate",
            "Certificate of analysis",
            "SGS / inspection certificate",
            "Bill of lading",
            "Insurance certificate",
            "Health certificate",
            "Organic certificate",
          ],
        },
        {
          id: "import_permit",
          label: "Any destination-country import permit or special regulatory requirement?",
          type: "textarea",
        },
        { id: "doc_format", label: "Any buyer-specific document format?", type: "textarea" },
      ],
    },
    {
      title: "Buyer Readiness and Existing Documents",
      examples: ["Purchase order", "LOI", "ICPO", "Specifications", "Company profile", "Import permit"],
      fields: [
        { id: "has_po", label: "Do you have an official purchase order?", type: "select", options: YES_NO },
        { id: "has_loi", label: "Do you have an LOI or ICPO?", type: "select", options: YES_NO },
        {
          id: "has_reg_docs",
          label: "Can you provide company registration documents?",
          type: "select",
          options: YES_NO,
        },
        {
          id: "imported_before",
          label: "Have you imported this commodity before?",
          type: "select",
          options: YES_NO,
        },
        {
          id: "other_agent",
          label: "Have you appointed another agent or supplier?",
          type: "select",
          options: YES_NO,
        },
        {
          id: "stage",
          label: "What stage is the transaction currently at?",
          type: "textarea",
          required: true,
        },
        {
          id: "concerns",
          label: "What are your main concerns or previous problems?",
          type: "textarea",
        },
        { id: "documents", label: "Select supporting documents", type: "files", fileKind: "documents" },
      ],
    },
    { title: "Discovery Fee Payment", kind: "payment", fields: paymentFields() },
    { title: "Consent and Submit", kind: "consent", fields: [] },
  ],
};

const businessPlan: FormSpec = {
  id: "businessplan",
  eyebrow: "Done-For-You — $100 Project Discovery Fee",
  title: "Import & Export Business Plan Development",
  intro:
    "Complete your business plan requirements, pay the $100 Project Discovery Fee, then enter your Flutterwave reference and attach your receipt. Payment is verified manually before scope review begins.",
  flow: [
    "Complete Questionnaire",
    "Pay $100 Discovery Fee",
    "Reference & Receipt",
    "Submit Securely",
    "Manual Verification",
    "Scope Review",
    "Written Proposal",
    "Pay Balance",
    "Business Plan Development",
  ],
  paymentLink: BUSINESS_PLAN_PAYMENT_LINK || null,
  paymentLabel: "Pay $100 Discovery Fee Securely",
  paymentNote:
    "The $100 Project Discovery Fee is non-refundable and credited toward your final professional service fee if you proceed.",
  submitLabel: "Submit Business Plan Request for Verification",
  subject: (v) =>
    `Import & Export Business Plan Request — ${v["full_name"] || "Client"} — ${
      v["pay_ref"] || "No reference"
    }`,
  confirmation: buildConfirmation({
    submitted: "business plan requirements",
    review:
      "scope review begins only once your $100 Project Discovery Fee is verified.",
    next: "After verification you will receive a written proposal covering the plan structure, deliverables, timeline, final fee and the balance payable, with the discovery fee credited if you proceed.",
  }),
  steps: [
    {
      title: "Client and Business Information",
      fields: [
        { id: "full_name", label: "Full name", type: "text", required: true },
        { id: "email", label: "Email", type: "email", required: true },
        { id: "whatsapp", label: "WhatsApp number (with country code)", type: "tel", required: true },
        { id: "country", label: "Country", type: "text", required: true },
        {
          id: "business_name",
          label: "Registered or proposed business name",
          type: "text",
          required: true,
          help: "If the business is not registered yet, give the name you intend to use.",
        },

        { id: "reg_no", label: "Company registration number", type: "text" },
        { id: "website", label: "Website", type: "url" },
        { id: "industry", label: "Industry", type: "text" },
        { id: "role", label: "Current role", type: "text" },
      ],
    },
    {
      title: "Business Type and Stage",
      fields: [
        {
          id: "trade_focus",
          label: "Is the business focused on Import, Export or Both?",
          type: "select",
          required: true,
          options: ["Import", "Export", "Both"],
        },
        {
          id: "stage",
          label: "Business stage",
          type: "select",
          required: true,
          options: ["Idea", "Planning", "Startup", "Operating", "Expanding", "Seeking Funding"],
        },
        {
          id: "new_or_existing",
          label: "Is this a new business or an existing business?",
          type: "select",
          required: true,
          options: ["New business", "Existing business"],
        },
        { id: "concept", label: "Briefly describe the business concept.", type: "textarea", required: true },
        {
          id: "products_services",
          label: "What products or services will the business trade?",
          type: "textarea",
          required: true,
        },
        { id: "problem", label: "What problem does the business solve?", type: "textarea" },
        {
          id: "differentiator",
          label: "What makes the business different from competitors?",
          type: "textarea",
        },
      ],
    },
    {
      title: "Purpose of the Business Plan",
      fields: [
        {
          id: "purpose",
          label: "Purpose (select one or more)",
          type: "checkboxes",
          required: true,
          other: true,
          options: [
            "Internal planning",
            "Investor presentation",
            "Bank loan",
            "Government grant",
            "Partnership proposal",
            "Visa or immigration application",
            "Licensing or regulatory application",
            "School / academic use",
          ],
        },
        { id: "audience", label: "Who will read the business plan?", type: "text" },
        {
          id: "format",
          label: "Is there a required format, page count or template?",
          type: "textarea",
        },
        { id: "deadline", label: "What is the submission deadline?", type: "text" },
        { id: "funding_amount", label: "What funding amount are you seeking, if applicable?", type: "text" },
      ],
    },
    {
      title: "Products, Sourcing and Markets",
      fields: [
        { id: "products", label: "Products to import or export", type: "textarea", required: true },
        { id: "categories", label: "Product categories", type: "text" },
        { id: "sourcing_countries", label: "Sourcing countries", type: "text" },
        { id: "export_countries", label: "Export destination countries", type: "text" },
        { id: "target_customers", label: "Target customers", type: "textarea" },
        {
          id: "channels",
          label: "Sales channels",
          type: "checkboxes",
          other: true,
          options: ["Wholesale", "Retail", "E-commerce", "B2B", "Distributor", "Institutional"],
        },
        { id: "contacts", label: "Existing supplier or buyer contacts", type: "textarea" },
        { id: "volume", label: "Expected order quantity or sales volume", type: "text" },
        { id: "branding_plan", label: "Packaging and branding plan", type: "textarea" },
        {
          id: "licences",
          label: "Any licences, permits or certifications already obtained",
          type: "textarea",
        },
      ],
    },
    {
      title: "Market and Competition",
      fields: [
        { id: "customers", label: "Who are your target customers?", type: "textarea", required: true },
        { id: "geography", label: "What geographic market will you serve?", type: "text", required: true },
        { id: "competitors", label: "Name known competitors.", type: "textarea" },
        { id: "price_range", label: "What price range will you sell at?", type: "text" },
        { id: "demand_evidence", label: "What evidence of demand do you have?", type: "textarea" },
        {
          id: "research_done",
          label: "Have you conducted market research?",
          type: "select",
          options: YES_NO,
        },
        {
          id: "research_files",
          label:
            "Upload existing market research, survey, customer feedback or competitor analysis",
          type: "files",
          fileKind: "documents",
        },
      ],
    },
    {
      title: "Operations and Logistics",
      fields: [
        { id: "location", label: "Where will the business operate from?", type: "text" },
        { id: "sourcing_owner", label: "Who will source products?", type: "text" },
        {
          id: "logistics",
          label: "How will products be transported, cleared, stored and delivered?",
          type: "textarea",
        },
        {
          id: "partners",
          label: "Do you have a freight forwarder, customs agent, warehouse or distributor?",
          type: "textarea",
        },
        { id: "staff", label: "What staff or partners are involved?", type: "textarea" },
        {
          id: "equipment",
          label: "What technology, equipment or machinery is required?",
          type: "textarea",
        },
        { id: "launch_date", label: "Expected launch date", type: "text" },
      ],
    },
    {
      title: "Financial Information",
      fields: [
        { id: "capital", label: "Available startup capital", type: "text", required: true },
        {
          id: "funding_source",
          label: "Funding source",
          type: "select",
          required: true,
          options: ["Personal savings", "Investor", "Loan", "Grant", "Partner", "Other"],
        },
        { id: "selling_price", label: "Expected selling price", type: "text", required: true },
        { id: "product_cost", label: "Estimated product cost", type: "text", required: true },
        {
          id: "logistics_cost",
          label: "Estimated shipping / logistics cost",
          type: "text",
          required: true,
        },
        { id: "opex", label: "Monthly operating expenses", type: "text" },
        { id: "monthly_sales", label: "Expected monthly sales volume", type: "text" },
        { id: "revenue", label: "Existing revenue, if operating", type: "text" },
        { id: "debts", label: "Existing debts or financial commitments", type: "textarea" },
        {
          id: "projection_period",
          label: "Preferred financial-projection period",
          type: "select",
          options: ["1 year", "3 years", "5 years"],
        },
        { id: "projection_currency", label: "Currency for projections", type: "text" },
      ],
    },
    {
      title: "Goals, Risks and Deliverables",
      description:
        "A pitch deck is separately quoted unless it is explicitly included in your written proposal.",
      fields: [
        { id: "goals_12m", label: "What are your 12-month goals?", type: "textarea", required: true },
        { id: "goals_3y", label: "What are your 3-year goals?", type: "textarea" },
        { id: "risks", label: "What are the biggest risks or uncertainties?", type: "textarea" },
        {
          id: "decisions",
          label: "What specific decisions should the business plan support?",
          type: "textarea",
        },
        { id: "want_word", label: "Do you require an editable Word version?", type: "select", options: YES_NO },
        { id: "want_pdf", label: "Do you require a PDF version?", type: "select", options: YES_NO },
        {
          id: "want_deck",
          label: "Do you require a pitch deck separately? (separately quoted)",
          type: "select",
          options: YES_NO,
        },
      ],
    },
    {
      title: "Supporting Documents",
      examples: [
        "Business registration documents",
        "Logos",
        "Quotations",
        "Licences",
        "Research",
        "Financial records",
        "Product photos",
        "Supplier agreements",
        "Existing drafts",
      ],
      fields: [
        { id: "documents", label: "Select supporting documents", type: "files", fileKind: "documents" },
        { id: "link_drive", label: "Google Drive / Dropbox link", type: "url" },
      ],
    },
    { title: "Discovery Fee Payment", kind: "payment", fields: paymentFields() },
    { title: "Consent and Submit", kind: "consent", fields: [] },
  ],
};

export const FORM_SPECS = {
  consultation,
  sourcing,
  commodity,
  businessplan: businessPlan,
} satisfies Record<string, FormSpec>;

export type FormKey = keyof typeof FORM_SPECS;
