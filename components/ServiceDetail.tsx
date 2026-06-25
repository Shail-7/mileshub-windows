"use client";
import { css } from "@/lib/css";
import { useSiteNav } from "@/lib/nav";
import { SERVICES, type Service } from "@/lib/data";

export default function ServiceDetail({ service }: { service: Service }) {
  const { goHome, goContact, goService, goSection } = useSiteNav();
  const related = SERVICES.filter((s) => s.id !== service.id).slice(0, 4);

  return (
    <main>
      {/* breadcrumb */}
      <section style={css("border-bottom:1px solid #e4dfd4;background:#f1eee7")}>
        <div className="mh-wrap" style={css("max-width:1240px;margin:0 auto;padding:18px 32px;font-size:13px;color:#7c8088;display:flex;gap:8px;align-items:center")}>
          <button onClick={goHome} className="crumb">Home</button>
          <span>/</span>
          <button onClick={() => goSection("services-anchor")} className="crumb">Services</button>
          <span>/</span>
          <span style={css("color:#26292e;font-weight:600")}>{service.name}</span>
        </div>
      </section>

      {/* hero */}
      <section className="mh-wrap" style={css("max-width:1240px;margin:0 auto;padding:64px 32px 70px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr));gap:60px;align-items:center")}>
        <div data-reveal>
          <div style={css("font-size:12px;font-weight:600;letter-spacing:0.16em;color:var(--accent);text-transform:uppercase;margin-bottom:18px")}>{service.kicker}</div>
          <h1 style={css("font-family:var(--font-display);font-weight:800;font-size:clamp(36px,4.6vw,58px);letter-spacing:-0.03em;line-height:1.03;margin:0 0 22px")}>{service.name}</h1>
          <p style={css("font-size:18px;line-height:1.62;color:#55595f;margin:0 0 32px")}>{service.blurb}</p>
          <div style={css("display:flex;gap:14px;flex-wrap:wrap")}>
            <button onClick={goContact} className="btn-accent" style={css("font-size:16px;font-weight:600;padding:15px 28px")}>Get a quote for this</button>
            <button onClick={() => goSection("gallery-anchor")} className="btn-outline" style={css("font-size:16px;font-weight:600;padding:15px 26px")}>See examples</button>
          </div>
        </div>
        <div className="mh-rimg" data-reveal data-reveal-delay="120" style={css("aspect-ratio:4/3;border:1px solid #e0d9cc;border-radius:4px;overflow:hidden;box-shadow:0 28px 56px rgba(38,41,46,0.14)")}>
          <div className="mh-rev" role="img" aria-label={service.name} style={{ ...css("width:100%;height:100%;background-size:cover;background-position:center"), backgroundImage: `url('${service.img}')` }}></div>
        </div>
      </section>

      {/* features */}
      <section style={css("background:#26292e;color:#fff")}>
        <div className="mh-wrap" style={css("max-width:1240px;margin:0 auto;padding:80px 32px")}>
          <h2 data-reveal style={css("font-family:var(--font-display);font-weight:700;font-size:clamp(26px,3vw,38px);letter-spacing:-0.025em;margin:0 0 44px;line-height:1.05")}>Why choose our {service.shortName}.</h2>
          <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(250px,100%),1fr));gap:16px")}>
            {service.features.map((f, i) => (
              <div key={f.title} data-reveal data-reveal-delay={i * 90} style={css("background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:4px;padding:30px 28px")}>
                <div style={css("width:42px;height:42px;border-radius:50%;background:rgba(179,128,79,0.16);color:var(--accent);display:grid;place-items:center;font-size:18px;margin-bottom:16px")}>✦</div>
                <div style={css("font-family:var(--font-display);font-weight:700;font-size:17px;margin-bottom:10px")}>{f.title}</div>
                <p style={css("font-size:14px;line-height:1.6;color:#b9bcc1;margin:0")}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* options */}
      <section className="mh-wrap" style={css("max-width:1240px;margin:0 auto;padding:80px 32px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr));gap:48px;align-items:start")}>
        <div data-reveal>
          <div style={css("font-size:12px;font-weight:600;letter-spacing:0.16em;color:var(--accent);text-transform:uppercase;margin-bottom:14px")}>Options &amp; finishes</div>
          <h3 style={css("font-family:var(--font-display);font-weight:700;font-size:28px;letter-spacing:-0.02em;margin:0 0 18px;line-height:1.1")}>Specified around your home.</h3>
          <p style={css("font-size:16px;line-height:1.62;color:#55595f;margin:0")}>Choose from a wide range of colours, glass options, hardware and security upgrades. Our surveyor will walk you through every choice so the finished result suits your property and budget.</p>
        </div>
        <div data-reveal data-reveal-delay="100" style={css("display:flex;flex-direction:column;gap:1px;background:#e4dfd4;border:1px solid #e4dfd4;border-radius:4px;overflow:hidden")}>
          {service.options.map((o) => (
            <div key={o.label} style={css("background:#fff;padding:18px 22px;display:flex;justify-content:space-between;align-items:center;gap:16px")}>
              <span style={css("font-size:15px;font-weight:600;color:#34373d")}>{o.label}</span>
              <span style={css("font-size:13px;color:#8a8e95;text-align:right")}>{o.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* related */}
      <section style={css("background:#f1eee7;border-top:1px solid #e4dfd4")}>
        <div className="mh-wrap" style={css("max-width:1240px;margin:0 auto;padding:72px 32px")}>
          <h3 data-reveal style={css("font-family:var(--font-display);font-weight:700;font-size:26px;letter-spacing:-0.02em;margin:0 0 30px")}>Explore more services</h3>
          <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr));gap:16px")}>
            {related.map((s, i) => (
              <button key={s.id} onClick={() => goService(s.id)} className="mh-card mh-tilt" data-reveal data-reveal-delay={i * 80} style={css("text-align:left;background:#fff;border:1px solid #e4dfd4;cursor:pointer;padding:0;display:flex;flex-direction:column;border-radius:4px;overflow:hidden")}>
                <div className="mh-rimg" style={css("aspect-ratio:16/10;overflow:hidden")}>
                  <div className="mh-img mh-rev" style={{ ...css("width:100%;height:100%;background-size:cover;background-position:center"), backgroundImage: `url('${s.img}')` }}></div>
                </div>
                <div style={css("padding:20px 22px;display:flex;flex-direction:column;gap:8px")}>
                  <span style={css("font-family:var(--font-display);font-weight:700;font-size:17px")}>{s.name}</span>
                  <span style={css("font-size:13px;color:#6a6e75;line-height:1.5")}>{s.tag}</span>
                  <span style={css("font-size:13px;font-weight:600;color:var(--accent);margin-top:4px")}>Explore <span className="mh-arrow" style={css("display:inline-block")}>→</span></span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
