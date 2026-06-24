"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { css } from "@/lib/css";
import { SERVICES } from "@/lib/data";

interface FormState {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  service: string;
  message: string;
}

type FieldErrors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = { name: "", email: "", phone: "", postcode: "", service: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const onField = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((errs) => ({ ...errs, [name]: "" }));
  };

  const validate = (f: FormState): FieldErrors => {
    const errs: FieldErrors = {};
    if (!f.name.trim()) errs.name = "Please enter your name";
    if (!f.phone.trim() || f.phone.replace(/\D/g, "").length < 7) errs.phone = "Enter a valid phone number";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email.trim())) errs.email = "Enter a valid email";
    if (!f.service) errs.service = "Please choose a service";
    return errs;
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const reset = () => {
    setForm(EMPTY);
    setErrors({});
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
        <button type="submit" className="btn-accent" style={css("width:100%;font-size:16px;font-weight:600;padding:16px")}>Request my free quote</button>
        <p style={css("font-size:12px;color:#9a9ea4;text-align:center;margin:14px 0 0")}>We&apos;ll only use your details to respond to this enquiry.</p>
      </form>
    </div>
  );
}
