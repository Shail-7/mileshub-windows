"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { css } from "@/lib/css";
import { SERVICES } from "@/lib/data";
import { validateLead, EMPTY_LEAD, type Lead, type LeadErrors } from "@/lib/validation";

interface ContactResponse {
  ok: boolean;
  error?: string;
  errors?: LeadErrors;
}

export default function ContactForm() {
  const [form, setForm] = useState<Lead>(EMPTY_LEAD);
  const [company, setCompany] = useState(""); // honeypot — must stay empty
  const [errors, setErrors] = useState<LeadErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const onField = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((errs) => ({ ...errs, [name]: "" }));
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);

    const clientErrors = validateLead(form);
    if (Object.keys(clientErrors).length) {
      setErrors(clientErrors);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, company }),
      });
      const data = (await res.json().catch(() => ({ ok: false }))) as ContactResponse;

      if (res.ok && data.ok) {
        setErrors({});
        setSubmitted(true);
      } else if (res.status === 422 && data.errors) {
        setErrors(data.errors);
      } else {
        setServerError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setServerError("Network error — please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setForm(EMPTY_LEAD);
    setCompany("");
    setErrors({});
    setServerError(null);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div data-reveal style={css("background:#fff;border:1px solid #e4dfd4;border-radius:4px;padding:36px 34px;box-shadow:0 18px 44px rgba(38,41,46,0.06)")}>
        <div style={css("text-align:center;padding:30px 10px")}>
          <div style={css("width:62px;height:62px;border-radius:50%;background:var(--accent);color:#fff;display:grid;place-items:center;font-size:30px;margin:0 auto 22px")}>✓</div>
          <h3 style={css("font-family:var(--font-display);font-weight:700;font-size:24px;margin:0 0 12px")}>Thank you — request received.</h3>
          <p style={css("font-size:16px;color:#55595f;line-height:1.6;margin:0 0 26px")}>A member of the Mileshub team will be in touch shortly to arrange your free survey.</p>
          <button onClick={reset} className="btn-outline" style={css("font-size:15px;font-weight:600;padding:12px 24px")}>Submit another</button>
        </div>
      </div>
    );
  }

  return (
    <div data-reveal style={css("background:#fff;border:1px solid #e4dfd4;border-radius:4px;padding:36px 34px;box-shadow:0 18px 44px rgba(38,41,46,0.06)")}>
      <form onSubmit={submitForm} noValidate>
        <div style={css("display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:18px")}>
          <div>
            <label htmlFor="name" style={css("display:block;font-size:13px;font-weight:600;color:#34373d;margin-bottom:7px")}>Full name</label>
            <input id="name" name="name" value={form.name} onChange={onField} placeholder="Jane Smith" className="field" />
            {errors.name && <div style={css("font-size:12px;color:#b4453f;margin-top:6px")}>{errors.name}</div>}
          </div>
          <div>
            <label htmlFor="phone" style={css("display:block;font-size:13px;font-weight:600;color:#34373d;margin-bottom:7px")}>Phone</label>
            <input id="phone" name="phone" value={form.phone} onChange={onField} placeholder="07700 900000" className="field" />
            {errors.phone && <div style={css("font-size:12px;color:#b4453f;margin-top:6px")}>{errors.phone}</div>}
          </div>
        </div>
        <div style={css("display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:18px")}>
          <div>
            <label htmlFor="email" style={css("display:block;font-size:13px;font-weight:600;color:#34373d;margin-bottom:7px")}>Email</label>
            <input id="email" name="email" value={form.email} onChange={onField} placeholder="jane@email.com" className="field" />
            {errors.email && <div style={css("font-size:12px;color:#b4453f;margin-top:6px")}>{errors.email}</div>}
          </div>
          <div>
            <label htmlFor="postcode" style={css("display:block;font-size:13px;font-weight:600;color:#34373d;margin-bottom:7px")}>Postcode</label>
            <input id="postcode" name="postcode" value={form.postcode} onChange={onField} placeholder="SW1A 1AA" className="field" />
          </div>
        </div>
        <div style={css("margin-bottom:18px")}>
          <label htmlFor="service" style={css("display:block;font-size:13px;font-weight:600;color:#34373d;margin-bottom:7px")}>I&apos;m interested in</label>
          <select id="service" name="service" value={form.service} onChange={onField} className="field">
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.name}>{s.name}</option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
          {errors.service && <div style={css("font-size:12px;color:#b4453f;margin-top:6px")}>{errors.service}</div>}
        </div>
        <div style={css("margin-bottom:24px")}>
          <label htmlFor="message" style={css("display:block;font-size:13px;font-weight:600;color:#34373d;margin-bottom:7px")}>Project details</label>
          <textarea id="message" name="message" value={form.message} onChange={onField} rows={4} placeholder="e.g. 6 windows and a front door for a 1930s semi…" className="field" style={css("resize:vertical")}></textarea>
        </div>
        {/* honeypot — hidden from real users; bots that fill it are dropped */}
        <div aria-hidden="true" style={css("position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden")}>
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>
        {serverError && (
          <div role="alert" style={css("font-size:13px;color:#b4453f;background:#fbeeed;border:1px solid #f0cfcc;border-radius:2px;padding:10px 14px;margin-bottom:16px")}>{serverError}</div>
        )}
        <button type="submit" disabled={submitting} className="btn-accent" style={{ ...css("width:100%;font-size:16px;font-weight:600;padding:16px"), opacity: submitting ? 0.7 : 1, cursor: submitting ? "default" : "pointer" }}>
          {submitting ? "Sending…" : "Request my free quote"}
        </button>
        <p style={css("font-size:12px;color:#9a9ea4;text-align:center;margin:14px 0 0")}>We&apos;ll only use your details to respond to this enquiry.</p>
      </form>
    </div>
  );
}
