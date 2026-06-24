"use client";
import Image from "next/image";
import { css } from "@/lib/css";
import { useSiteNav } from "@/lib/nav";
import { PHONE, PHONE_HREF } from "@/lib/data";

export default function Header() {
  const { goHome, goContact, goSection } = useSiteNav();

  return (
    <header style={css("position:sticky;top:0;z-index:60;background:rgba(246,244,239,0.82);backdrop-filter:blur(14px);border-bottom:1px solid #e4dfd4")}>
      <div style={css("max-width:1240px;margin:0 auto;padding:0 32px;height:74px;display:flex;align-items:center;justify-content:space-between;gap:24px")}>
        <button onClick={goHome} aria-label="Mileshub Windows — home" style={css("background:none;border:none;cursor:pointer;padding:0;display:flex;align-items:center;gap:12px")}>
          <span style={css("width:44px;height:44px;border-radius:7px;background:#33312e;display:grid;place-items:center;overflow:hidden;flex:none")}>
            <Image src="/assets/mileshub-mark.png" alt="" width={36} height={33} style={css("display:block")} />
          </span>
          <span style={css("font-family:var(--font-display);font-weight:800;letter-spacing:-0.02em;font-size:19px;line-height:1;color:#26292e")}>
            MILESHUB <span style={css("font-weight:500;color:var(--accent)")}>WINDOWS</span>
          </span>
        </button>
        <nav style={css("display:flex;align-items:center;gap:30px")}>
          <button onClick={() => goSection("services-anchor")} className="nav-link">Services</button>
          <button onClick={() => goSection("gallery-anchor")} className="nav-link">Our Work</button>
          <button onClick={() => goSection("reviews-anchor")} className="nav-link">Reviews</button>
          <button onClick={() => goSection("about-anchor")} className="nav-link">About</button>
          <a href={PHONE_HREF} style={css("font-size:15px;font-weight:600;color:#26292e;text-decoration:none;display:flex;align-items:center;gap:7px")}>{PHONE}</a>
          <button onClick={goContact} className="btn-accent" style={css("font-size:14px;font-weight:600;padding:11px 20px;letter-spacing:0.01em;position:relative;overflow:hidden")}>Free Quote</button>
        </nav>
      </div>
    </header>
  );
}
