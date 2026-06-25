"use client";
import Image from "next/image";
import { css } from "@/lib/css";
import { useSiteNav } from "@/lib/nav";
import { SERVICES, PHONE, PHONE_HREF, EMAIL } from "@/lib/data";

export default function Footer() {
  const { goContact, goService, goSection } = useSiteNav();

  return (
    <>
      {/* CTA */}
      <section style={css("background:#1d2024;color:#fff;position:relative;overflow:hidden")}>
        <div style={css("position:absolute;bottom:-100px;left:-60px;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(179,128,79,0.18),rgba(179,128,79,0) 70%)")}></div>
        <div data-reveal className="mh-wrap" style={css("max-width:1240px;margin:0 auto;padding:74px 32px;text-align:center;position:relative")}>
          <h2 style={css("font-family:var(--font-display);font-weight:700;font-size:clamp(28px,3.6vw,46px);letter-spacing:-0.03em;margin:0 0 18px;line-height:1.05")}>Ready for a free, no-obligation quote?</h2>
          <p style={css("font-size:18px;color:#b9bcc1;margin:0 auto 32px;max-width:520px")}>Book a survey at a time that suits you. Most quotes are back within two working days.</p>
          <div style={css("display:flex;gap:14px;justify-content:center;flex-wrap:wrap")}>
            <button onClick={goContact} className="btn-accent" style={css("font-size:16px;font-weight:600;padding:16px 32px")}>Get your free quote</button>
            <a href={PHONE_HREF} className="btn-outline-light" style={css("font-size:16px;font-weight:600;padding:16px 30px")}>Call {PHONE}</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={css("background:#16181b;color:#9a9ea4")}>
        <div className="mh-wrap" style={css("max-width:1240px;margin:0 auto;padding:60px 32px 30px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(190px,100%),1fr));gap:40px")}>
          <div style={css("grid-column:1/-1;max-width:320px")}>
            <div style={css("display:flex;align-items:center;gap:11px;margin-bottom:16px")}>
              <span style={css("width:40px;height:40px;border-radius:6px;background:#33312e;display:grid;place-items:center;overflow:hidden;flex:none")}>
                <Image src="/assets/mileshub-mark.png" alt="" width={33} height={30} style={css("display:block")} />
              </span>
              <span style={css("font-family:var(--font-display);font-weight:800;letter-spacing:-0.02em;font-size:18px;color:#fff")}>
                MILESHUB <span style={css("font-weight:500;color:var(--accent)")}>WINDOWS</span>
              </span>
            </div>
            <p style={css("font-size:14px;line-height:1.6;margin:0")}>Made-to-measure windows, doors and living spaces — surveyed, manufactured and installed across the UK.</p>
          </div>
          <div>
            <div style={css("color:#fff;font-weight:600;font-size:14px;margin-bottom:14px")}>Products</div>
            <div style={css("display:flex;flex-direction:column;gap:9px")}>
              {SERVICES.map((s) => (
                <button key={s.id} onClick={() => goService(s.id)} className="foot-link">{s.name}</button>
              ))}
            </div>
          </div>
          <div>
            <div style={css("color:#fff;font-weight:600;font-size:14px;margin-bottom:14px")}>Company</div>
            <div style={css("display:flex;flex-direction:column;gap:9px")}>
              <button onClick={() => goSection("about-anchor")} className="foot-link">About us</button>
              <button onClick={() => goSection("gallery-anchor")} className="foot-link">Our work</button>
              <button onClick={() => goSection("reviews-anchor")} className="foot-link">Reviews</button>
              <button onClick={goContact} className="foot-link">Contact</button>
            </div>
          </div>
          <div>
            <div style={css("color:#fff;font-weight:600;font-size:14px;margin-bottom:14px")}>Get in touch</div>
            <div style={css("display:flex;flex-direction:column;gap:9px;font-size:14px")}>
              <span>{PHONE}</span>
              <span>{EMAIL}</span>
              <span>Mon–Sat&nbsp;&nbsp;9am – 7pm</span>
            </div>
          </div>
        </div>
        <div style={css("border-top:1px solid #2a2d31")}>
          <div className="mh-wrap" style={css("max-width:1240px;margin:0 auto;padding:22px 32px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:13px")}>
            <span>© 2026 Mileshub Windows Ltd. All rights reserved.</span>
            <span>Registered in England &amp; Wales</span>
          </div>
        </div>
      </footer>
    </>
  );
}
