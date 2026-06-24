"use client";
import { css } from "@/lib/css";
import { useSiteNav } from "@/lib/nav";
import type { Service } from "@/lib/data";

export default function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  const { goService } = useSiteNav();
  return (
    <button onClick={() => goService(service.id)} className="mh-card mh-tilt" data-reveal data-reveal-delay={delay} style={css("text-align:left;background:#fff;border:1px solid #e4dfd4;cursor:pointer;padding:0;display:flex;flex-direction:column;border-radius:4px;overflow:hidden")}>
      <div className="mh-rimg" style={css("aspect-ratio:16/11;width:100%;overflow:hidden;position:relative")}>
        <div className="mh-img mh-rev" style={{ ...css("position:absolute;inset:0;background-size:cover;background-position:center"), backgroundImage: `url('${service.img}')` }}></div>
        <div className="mh-shine"></div>
        <div style={css("position:absolute;inset:0;background:linear-gradient(180deg,rgba(29,32,36,0) 45%,rgba(29,32,36,0.55) 100%)")}></div>
        <span style={css("position:absolute;left:14px;top:14px;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#fff;background:rgba(38,41,46,0.55);backdrop-filter:blur(4px);padding:5px 10px;border-radius:2px")}>{service.kicker}</span>
        <div style={css("position:absolute;left:18px;bottom:14px;right:18px;font-family:var(--font-display);font-weight:700;font-size:21px;letter-spacing:-0.01em;color:#fff;text-shadow:0 1px 12px rgba(0,0,0,0.3)")}>{service.name}</div>
      </div>
      <div style={css("padding:20px 22px 22px;display:flex;flex-direction:column;flex:1")}>
        <div style={css("font-size:14px;color:#6a6e75;line-height:1.55;margin-bottom:16px;flex:1")}>{service.tag}</div>
        <div style={css("font-size:13px;font-weight:600;color:var(--accent);display:flex;align-items:center;gap:7px")}>Explore <span className="mh-arrow">→</span></div>
      </div>
    </button>
  );
}
