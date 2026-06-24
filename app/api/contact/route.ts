import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { validateLead, normalizeLead, type Lead } from "@/lib/validation";

// Nodemailer needs the Node.js runtime (not Edge), and the handler must never
// be statically optimised.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DEFAULT_TO = "Sales@Mhwindows.co.uk";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderText(lead: Lead): string {
  return [
    "New quote request from the Mileshub Windows website",
    "",
    `Name:     ${lead.name}`,
    `Phone:    ${lead.phone}`,
    `Email:    ${lead.email}`,
    `Postcode: ${lead.postcode || "—"}`,
    `Service:  ${lead.service}`,
    "",
    "Project details:",
    lead.message || "—",
  ].join("\n");
}

function renderHtml(lead: Lead): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 14px 6px 0;color:#6a6e75;font:600 13px sans-serif;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;color:#26292e;font:400 14px sans-serif">${escapeHtml(value) || "—"}</td></tr>`;
  return `<div style="font-family:sans-serif;color:#26292e">
    <h2 style="margin:0 0 4px">New quote request</h2>
    <p style="margin:0 0 16px;color:#6a6e75;font-size:13px">From the Mileshub Windows website</p>
    <table style="border-collapse:collapse">
      ${row("Name", lead.name)}
      ${row("Phone", lead.phone)}
      ${row("Email", lead.email)}
      ${row("Postcode", lead.postcode)}
      ${row("Service", lead.service)}
    </table>
    <h3 style="margin:18px 0 6px;font-size:14px">Project details</h3>
    <p style="margin:0;white-space:pre-wrap;font-size:14px;line-height:1.5">${escapeHtml(lead.message) || "—"}</p>
  </div>`;
}

export async function POST(request: Request): Promise<NextResponse> {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const lead = normalizeLead(payload);
  const errors = validateLead(lead);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, CONTACT_FROM, CONTACT_TO } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    // Surfaced clearly so local testing without creds fails loudly rather than silently.
    return NextResponse.json(
      { ok: false, error: "Email delivery is not configured on the server yet." },
      { status: 500 },
    );
  }

  const port = Number(SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Mileshub Windows Website" <${CONTACT_FROM || SMTP_USER}>`,
      to: CONTACT_TO || DEFAULT_TO,
      replyTo: `"${lead.name}" <${lead.email}>`,
      subject: `New quote request — ${lead.service} (${lead.name})`,
      text: renderText(lead),
      html: renderHtml(lead),
    });
  } catch (err) {
    console.error("contact: failed to send lead email", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your message. Please try again or call us." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
