"use client";
import { useEffect, useState } from "react";
import { css } from "@/lib/css";
import { useSiteNav, scrollToAnchor } from "@/lib/nav";
import { SERVICES, STEPS, REVIEWS, GALLERY, ART } from "@/lib/data";
import HeroCarousel from "@/components/HeroCarousel";
import ServiceCard from "@/components/ServiceCard";
import Lightbox from "@/components/Lightbox";

const TRUST = [
  "Fully Insured & Guaranteed",
  "10-Year Guarantee",
  "0% Finance Available",
  "Free No-Obligation Survey",
  "5★ Rated Installers",
];

export default function HomePage() {
  const { goContact } = useSiteNav();
  const [lightbox, setLightbox] = useState<number | null>(null);

  // honour /#anchor links arriving from other routes
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const t = window.setTimeout(() => scrollToAnchor(hash), 60);
      return () => clearTimeout(t);
    }
  }, []);

  const active = lightbox !== null ? GALLERY[lightbox] : null;

  return (
    <main>
      <HeroCarousel />

      {/* TRUST STRIP */}
      <section style={css("border-top:1px solid #e4dfd4;border-bottom:1px solid #e4dfd4;background:#f1eee7")}>
        <div data-reveal style={css("max-width:1240px;margin:0 auto;padding:22px 32px;display:flex;flex-wrap:wrap;gap:14px 48px;justify-content:space-between;align-items:center")}>
          {TRUST.map((t) => (
            <div key={t} style={css("display:flex;align-items:center;gap:11px;font-size:14px;font-weight:600;color:#3a3e44")}>
              <span style={css("color:var(--accent);font-size:18px")}>●</span>{t}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services-anchor" style={css("max-width:1240px;margin:0 auto;padding:96px 32px 90px")}>
        <div data-reveal style={css("display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:20px;margin-bottom:48px")}>
          <div>
            <div style={css("font-size:12px;font-weight:600;letter-spacing:0.16em;color:var(--accent);text-transform:uppercase;margin-bottom:14px")}>What we do</div>
            <h2 style={css("font-family:var(--font-display);font-weight:700;font-size:clamp(30px,3.6vw,44px);letter-spacing:-0.025em;margin:0;max-width:520px;line-height:1.05")}>A complete range, fitted to a single standard.</h2>
          </div>
          <p style={css("font-size:16px;color:#55595f;max-width:340px;margin:0")}>From a single replacement window to a full home transformation — every product surveyed, made and installed by our own teams.</p>
        </div>
        <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:22px")}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={(i % 4) * 90} />
          ))}
        </div>
      </section>

      {/* ABOUT / STATS */}
      <section id="about-anchor" style={css("background:#26292e;color:#fff;position:relative;overflow:hidden")}>
        <div style={css("position:absolute;top:-120px;right:-80px;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,rgba(179,128,79,0.22),rgba(179,128,79,0) 70%)")}></div>
        <div style={css("max-width:1240px;margin:0 auto;padding:96px 32px;display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:64px;align-items:center;position:relative")}>
          <div data-reveal>
            <div style={css("font-size:12px;font-weight:600;letter-spacing:0.16em;color:var(--accent);text-transform:uppercase;margin-bottom:18px")}>Why Mileshub</div>
            <h2 style={css("font-family:var(--font-display);font-weight:700;font-size:clamp(30px,3.6vw,44px);letter-spacing:-0.025em;margin:0 0 22px;line-height:1.06")}>The detail others skip is the reason we last.</h2>
            <p style={css("font-size:17px;line-height:1.65;color:#c2c5ca;margin:0 0 18px")}>No subcontractors, no sales pressure, no surprise costs. One team takes you from first measure to final clean-up — and stands behind it for a decade.</p>
            <p style={css("font-size:17px;line-height:1.65;color:#c2c5ca;margin:0 0 30px")}>We work with homeowners and trade partners alike, matching the right glazing system to your property, budget and timeline.</p>
            <button onClick={goContact} className="btn-white" style={css("font-size:15px;font-weight:600;padding:14px 26px")}>Book a free survey</button>
          </div>
          <div data-reveal data-reveal-delay="120" style={css("display:grid;grid-template-columns:1fr 1fr;gap:14px")}>
            <div style={css("background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:4px;padding:28px 24px")}>
              <div style={css("font-family:var(--font-display);font-size:40px;font-weight:700;letter-spacing:-0.03em;color:var(--accent)")}>A+</div>
              <div style={css("font-size:14px;color:#b9bcc1;margin-top:6px")}>Energy-rated frames as standard</div>
            </div>
            <div style={css("background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:4px;padding:28px 24px")}>
              <div style={css("font-family:var(--font-display);font-size:40px;font-weight:700;letter-spacing:-0.03em;color:var(--accent)")}><span data-count="10" data-suffix="yr">10yr</span></div>
              <div style={css("font-size:14px;color:#b9bcc1;margin-top:6px")}>Guarantee on every job</div>
            </div>
            <div style={css("background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:4px;padding:28px 24px")}>
              <div style={css("font-family:var(--font-display);font-size:40px;font-weight:700;letter-spacing:-0.03em;color:var(--accent)")}><span data-count="150" data-suffix="+">150+</span></div>
              <div style={css("font-size:14px;color:#b9bcc1;margin-top:6px")}>Installations completed</div>
            </div>
            <div style={css("background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:4px;padding:28px 24px")}>
              <div style={css("font-family:var(--font-display);font-size:40px;font-weight:700;letter-spacing:-0.03em;color:var(--accent)")}><span data-count="0" data-suffix="%">0%</span></div>
              <div style={css("font-size:14px;color:#b9bcc1;margin-top:6px")}>Finance options available</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={css("max-width:1240px;margin:0 auto;padding:96px 32px 80px")}>
        <div data-reveal>
          <div style={css("font-size:12px;font-weight:600;letter-spacing:0.16em;color:var(--accent);text-transform:uppercase;margin-bottom:14px;text-align:center")}>How it works</div>
          <h2 style={css("font-family:var(--font-display);font-weight:700;font-size:clamp(28px,3.4vw,42px);letter-spacing:-0.025em;margin:0 0 54px;text-align:center;line-height:1.05")}>Four steps, no surprises.</h2>
        </div>
        <div style={css("position:relative;display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:32px")}>
          <div style={css("position:absolute;top:28px;left:6%;right:6%;height:2px;background:linear-gradient(90deg,#e4dfd4,var(--accent),#e4dfd4)")}></div>
          {STEPS.map((p, i) => (
            <div key={p.num} data-reveal data-reveal-delay={i * 120} style={css("position:relative")}>
              <div style={css("width:56px;height:56px;border-radius:50%;background:#f6f4ef;border:2px solid var(--accent);display:grid;place-items:center;font-family:var(--font-display);font-weight:700;font-size:18px;color:var(--accent);margin-bottom:22px;position:relative;z-index:1")}>{p.num}</div>
              <div style={css("font-family:var(--font-display);font-weight:700;font-size:19px;margin-bottom:10px")}>{p.title}</div>
              <p style={css("font-size:14px;color:#6a6e75;line-height:1.6;margin:0")}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery-anchor" style={css("background:#f1eee7;border-top:1px solid #e4dfd4;border-bottom:1px solid #e4dfd4")}>
        <div style={css("max-width:1240px;margin:0 auto;padding:90px 32px")}>
          <div data-reveal style={css("display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:20px;margin-bottom:42px")}>
            <div>
              <div style={css("font-size:12px;font-weight:600;letter-spacing:0.16em;color:var(--accent);text-transform:uppercase;margin-bottom:14px")}>Our work</div>
              <h2 style={css("font-family:var(--font-display);font-weight:700;font-size:clamp(30px,3.6vw,44px);letter-spacing:-0.025em;margin:0;line-height:1.05")}>Recent installations.</h2>
            </div>
            <button onClick={goContact} className="btn-outline" style={css("font-size:15px;font-weight:600;padding:13px 24px")}>Start your project</button>
          </div>
          <div style={css("display:grid;grid-template-columns:repeat(3, minmax(0,1fr));gap:14px")}>
            {GALLERY.map((g, i) => (
              <button key={g.label} onClick={() => setLightbox(i)} className="mh-gal mh-rimg" data-reveal data-reveal-delay={(i % 3) * 90} style={css("border:none;cursor:pointer;padding:0;aspect-ratio:1/1;border-radius:4px;position:relative;overflow:hidden")}>
                <div className="mh-img mh-rev" role="img" aria-label={g.label} style={{ ...css("position:absolute;inset:0;background-size:cover;background-position:center"), backgroundImage: `url('${ART[g.art]}')` }}></div>
                <div className="mh-shine"></div>
                <div className="mh-veil" style={css("position:absolute;inset:0;background:linear-gradient(180deg,rgba(29,32,36,0) 40%,rgba(29,32,36,0.85) 100%)")}></div>
                <div className="mh-cap" style={css("position:absolute;left:16px;bottom:14px;right:48px;color:#fff;font-size:14px;font-weight:600;text-align:left;line-height:1.35")}>{g.label}</div>
                <span style={css("position:absolute;bottom:12px;right:12px;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.92);color:#26292e;display:grid;place-items:center;font-size:15px")}>⤢</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews-anchor" style={css("max-width:1240px;margin:0 auto;padding:96px 32px 80px")}>
        <div data-reveal style={css("text-align:center;margin-bottom:54px")}>
          <div style={css("font-size:12px;font-weight:600;letter-spacing:0.16em;color:var(--accent);text-transform:uppercase;margin-bottom:14px")}>Reviews</div>
          <h2 style={css("font-family:var(--font-display);font-weight:700;font-size:clamp(30px,3.6vw,44px);letter-spacing:-0.025em;margin:0 0 12px;line-height:1.05")}>Rated 4.8 out of 5 by our customers.</h2>
          <p style={css("font-size:16px;color:#6a6e75;margin:0")}>Based on 16 verified reviews from homeowners across the UK.</p>
        </div>
        <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:24px")}>
          {REVIEWS.map((r, i) => (
            <div key={r.title} className="mh-tilt" data-reveal data-reveal-delay={i * 110} style={css("background:#fff;border:1px solid #e4dfd4;border-radius:4px;padding:32px 28px 28px;display:flex;flex-direction:column;position:relative")}>
              <span style={css("position:absolute;top:12px;right:22px;font-family:Georgia,serif;font-size:72px;line-height:1;color:#efe6d8")}>&rdquo;</span>
              <div style={css("color:var(--accent);font-size:16px;letter-spacing:3px;margin-bottom:14px")}>★★★★★</div>
              <div style={css("font-family:var(--font-display);font-weight:700;font-size:16px;letter-spacing:-0.01em;color:#26292e;margin-bottom:10px;line-height:1.3;position:relative")}>{r.title}</div>
              <p style={css("font-size:15px;line-height:1.6;color:#55595f;margin:0 0 22px;flex:1;position:relative")}>{r.quote}</p>
              <div style={css("display:flex;align-items:center;gap:12px;border-top:1px solid #efe9de;padding-top:18px")}>
                <div style={css("width:44px;height:44px;border-radius:50%;background:var(--accent);display:grid;place-items:center;font-family:var(--font-display);font-weight:700;color:#fff;font-size:15px;flex:none")}>{r.initial}</div>
                <div>
                  <div style={css("font-weight:600;font-size:14px")}>{r.name}</div>
                  <div style={css("font-size:13px;color:#8a8e95")}>{r.place} · {r.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINANCE BAND */}
      <section style={css("max-width:1240px;margin:0 auto 90px;padding:0 32px")}>
        <div data-reveal style={css("background:var(--accent);border-radius:5px;padding:58px 56px;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:32px;align-items:center;color:#fff;position:relative;overflow:hidden")}>
          <div style={css("position:absolute;top:-60px;right:-40px;width:240px;height:240px;border-radius:50%;background:rgba(255,255,255,0.1)")}></div>
          <div style={css("position:relative")}>
            <h2 style={css("font-family:var(--font-display);font-weight:700;font-size:clamp(26px,3vw,38px);letter-spacing:-0.02em;margin:0 0 12px;line-height:1.08")}>Spread the cost. 0% finance available.</h2>
            <p style={css("font-size:17px;line-height:1.55;color:rgba(255,255,255,0.92);margin:0;max-width:480px")}>Flexible payment plans on installations — get the windows you want now and pay over time, subject to status.</p>
          </div>
          <div style={css("display:flex;justify-content:flex-end;position:relative")}>
            <button onClick={goContact} className="btn-dark" style={css("font-size:16px;font-weight:600;padding:16px 30px")}>Get a free quote</button>
          </div>
        </div>
      </section>

      {active && (
        <Lightbox img={ART[active.art]} label={active.label} onClose={() => setLightbox(null)} />
      )}
    </main>
  );
}
