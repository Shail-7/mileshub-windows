"use client";
import { useEffect, useRef, useState } from "react";
import { css } from "@/lib/css";
import { useSiteNav } from "@/lib/nav";
import { HERO_SLIDES } from "@/lib/data";

const SLIDE_MS = 4800;

export default function HeroCarousel() {
  const { goContact, goSection } = useSiteNav();
  const [slide, setSlide] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), SLIDE_MS);
  };

  useEffect(() => {
    start();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const select = (i: number) => {
    setSlide(i);
    start();
  };

  return (
    <section className="mh-hero" data-active={String(slide)} style={css("position:relative;overflow:hidden;background:#16181b;min-height:90vh;display:flex;align-items:center")}>
      <div data-parallax="0.16" style={css("position:absolute;left:0;right:0;top:-18%;height:136%;will-change:transform")}>
        {HERO_SLIDES.map((img, i) => (
          <div key={img} style={{ ...css("position:absolute;inset:0;transition:opacity 1.5s ease"), opacity: i === slide ? 1 : 0 }}>
            <div className="mh-ken" role="img" aria-label="Mileshub windows and doors installation" style={{ ...css("width:100%;height:100%;background-size:cover;background-position:center"), backgroundImage: `url('${img}')` }}></div>
          </div>
        ))}
      </div>
      <div style={css("position:absolute;inset:0;background:linear-gradient(90deg,rgba(16,17,20,0.9) 0%,rgba(16,17,20,0.66) 38%,rgba(16,17,20,0.22) 72%,rgba(16,17,20,0.04) 100%);pointer-events:none")}></div>
      <div style={css("position:absolute;inset:0;background:linear-gradient(180deg,rgba(16,17,20,0.3) 0%,rgba(16,17,20,0) 26%,rgba(16,17,20,0.44) 100%);pointer-events:none")}></div>
      <div className="mh-wrap mh-hero-inner" style={css("position:relative;z-index:3;max-width:1240px;margin:0 auto;padding:96px 32px;width:100%;color:#fff")}>
        <div style={css("max-width:670px")}>
          <div data-hu style={css("animation-delay:.05s;display:inline-flex;align-items:center;gap:10px;font-size:12px;font-weight:600;letter-spacing:0.18em;color:#e7c9a8;text-transform:uppercase;margin-bottom:26px")}>
            <span style={css("width:28px;height:1px;background:#e7c9a8")}></span>Windows · Doors · Living Spaces
          </div>
          <h1 data-hu style={css("animation-delay:.14s;font-family:var(--font-display);font-weight:800;font-size:clamp(42px,5.8vw,76px);line-height:1.0;letter-spacing:-0.03em;margin:0 0 26px;color:#fff;text-shadow:0 2px 36px rgba(0,0,0,0.3)")}>Windows &amp; doors, crafted for the way you live.</h1>
          <p data-hu style={css("animation-delay:.24s;font-size:19px;line-height:1.6;color:#dcdee2;margin:0 0 38px;max-width:548px")}>Premium uPVC, aluminium and timber-style glazing — surveyed by experts, made to measure and installed across the UK. Beautiful, efficient, built to last.</p>
          <div data-hu style={css("animation-delay:.34s;display:flex;gap:14px;flex-wrap:wrap;margin-bottom:48px")}>
            <button onClick={goContact} className="btn-accent" style={css("font-size:16px;font-weight:600;padding:17px 32px;box-shadow:0 14px 34px rgba(0,0,0,0.28)")}>Get your free quote</button>
            <button onClick={() => goSection("gallery-anchor")} className="btn-glass" style={css("font-size:16px;font-weight:600;padding:17px 30px")}>View our work</button>
          </div>
          <div data-hu style={css("animation-delay:.44s;display:flex;gap:34px;flex-wrap:wrap;align-items:center")}>
            <div>
              <div style={css("font-family:var(--font-display);font-size:28px;font-weight:700;letter-spacing:-0.02em;color:#fff")}><span data-count="1" data-suffix="+">1+</span></div>
              <div style={css("font-size:13px;color:#aeb2b8;letter-spacing:0.02em")}>Years installing</div>
            </div>
            <div style={css("width:1px;height:36px;background:rgba(255,255,255,0.22)")}></div>
            <div>
              <div style={css("font-family:var(--font-display);font-size:28px;font-weight:700;letter-spacing:-0.02em;color:#fff")}><span data-count="150" data-suffix="+">150+</span></div>
              <div style={css("font-size:13px;color:#aeb2b8;letter-spacing:0.02em")}>Homes upgraded</div>
            </div>
            <div style={css("width:1px;height:36px;background:rgba(255,255,255,0.22)")}></div>
            <div>
              <div style={css("font-family:var(--font-display);font-size:28px;font-weight:700;letter-spacing:-0.02em;color:#fff")}><span data-count="4.8" data-decimals="1">4.8</span><span style={css("color:#e7c9a8")}>★</span></div>
              <div style={css("font-size:13px;color:#aeb2b8;letter-spacing:0.02em")}>Avg. rating</div>
            </div>
          </div>
        </div>
      </div>
      <div style={css("position:absolute;bottom:28px;left:0;right:0;z-index:4;display:flex;justify-content:center;gap:9px")}>
        {HERO_SLIDES.map((_, i) => (
          <button key={i} className="mh-dot" onClick={() => select(i)} data-dot={i} aria-label={`Show hero slide ${i + 1}`}></button>
        ))}
      </div>
    </section>
  );
}
