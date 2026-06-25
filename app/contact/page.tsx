import type { Metadata } from "next";
import { css } from "@/lib/css";
import { ART, PHONE, EMAIL } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Free Quote — Mileshub Windows",
  description:
    "Tell us about your windows, doors or living-space project and we'll arrange a free survey and itemised quote — usually within two working days.",
};

export default function ContactPage() {
  return (
    <main className="mh-wrap" style={css("max-width:1240px;margin:0 auto;padding:64px 32px 90px")}>
      <div data-reveal style={css("max-width:640px;margin-bottom:50px")}>
        <div style={css("font-size:12px;font-weight:600;letter-spacing:0.16em;color:var(--accent);text-transform:uppercase;margin-bottom:16px")}>Free quote</div>
        <h1 style={css("font-family:var(--font-display);font-weight:800;font-size:clamp(36px,4.6vw,56px);letter-spacing:-0.03em;line-height:1.03;margin:0 0 18px")}>Tell us about your project.</h1>
        <p style={css("font-size:18px;line-height:1.6;color:#55595f;margin:0")}>No pressure, no obligation. Share a few details and we&apos;ll arrange a free survey and itemised quote — usually within two working days.</p>
      </div>

      <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr));gap:48px;align-items:start")}>
        <ContactForm />

        {/* details */}
        <div data-reveal data-reveal-delay="120">
          <div style={css("display:flex;flex-direction:column;gap:1px;background:#e4dfd4;border:1px solid #e4dfd4;border-radius:4px;overflow:hidden;margin-bottom:24px")}>
            <div style={css("background:#fff;padding:22px 24px")}>
              <div style={css("font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#9a9ea4;margin-bottom:6px")}>Call us</div>
              <div style={css("font-family:var(--font-display);font-weight:700;font-size:22px")}>{PHONE}</div>
            </div>
            <div style={css("background:#fff;padding:22px 24px")}>
              <div style={css("font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#9a9ea4;margin-bottom:6px")}>Email</div>
              <div style={css("font-size:16px;font-weight:500")}>{EMAIL}</div>
            </div>
            <div style={css("background:#fff;padding:22px 24px")}>
              <div style={css("font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#9a9ea4;margin-bottom:6px")}>Office</div>
              <div style={css("font-size:16px;font-weight:500;line-height:1.5")}>Wickets Way<br />IG6 3DF, United Kingdom</div>
            </div>
            <div style={css("background:#fff;padding:22px 24px")}>
              <div style={css("font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#9a9ea4;margin-bottom:6px")}>Opening hours</div>
              <div style={css("font-size:14px;color:#34373d;line-height:1.7")}>Mon–Sat&nbsp;&nbsp;9:00 – 19:00<br />Sunday&nbsp;&nbsp;Closed</div>
            </div>
          </div>
          <div className="mh-rimg" data-reveal style={css("aspect-ratio:16/10;border:1px solid #e0d9cc;border-radius:4px;overflow:hidden;position:relative")}>
            <div className="mh-rev" role="img" aria-label="Get in touch with our team" style={{ ...css("width:100%;height:100%;background-size:cover;background-position:center"), backgroundImage: `url('${ART.contact}')` }}></div>
            <div style={css("position:absolute;left:14px;bottom:14px;background:rgba(255,255,255,0.94);padding:8px 14px;border-radius:2px;font-size:13px;font-weight:600;color:#26292e;display:flex;align-items:center;gap:7px")}>
              <span style={css("color:var(--accent)")}>●</span>We&apos;re here to help
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
