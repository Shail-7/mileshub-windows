// Shared, framework-agnostic lead validation used by both the contact form
// (client) and the /api/contact route handler (server), so the rules can never
// drift apart.

export interface Lead {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  service: string;
  message: string;
}

export type LeadErrors = Partial<Record<keyof Lead, string>>;

export const EMPTY_LEAD: Lead = {
  name: "",
  email: "",
  phone: "",
  postcode: "",
  service: "",
  message: "",
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function validateLead(lead: Lead): LeadErrors {
  const errors: LeadErrors = {};
  if (!lead.name.trim()) errors.name = "Please enter your name";
  if (!lead.phone.trim() || lead.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Enter a valid phone number";
  }
  if (!EMAIL_RE.test(lead.email.trim())) errors.email = "Enter a valid email";
  if (!lead.service) errors.service = "Please choose a service";
  return errors;
}

/** Coerce arbitrary request input into a trimmed, length-capped Lead. */
export function normalizeLead(input: Partial<Record<keyof Lead, unknown>>): Lead {
  const str = (v: unknown, max: number): string =>
    (typeof v === "string" ? v : "").trim().slice(0, max);
  return {
    name: str(input.name, 120),
    email: str(input.email, 200),
    phone: str(input.phone, 40),
    postcode: str(input.postcode, 20),
    service: str(input.service, 120),
    message: str(input.message, 4000),
  };
}
