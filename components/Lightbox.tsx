"use client";
import { useEffect } from "react";
import { css } from "@/lib/css";

interface LightboxProps {
  img: string;
  label: string;
  onClose: () => void;
}

export default function Lightbox({ img, label, onClose }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-label={label} onClick={onClose} style={css("position:fixed;inset:0;z-index:90;background:rgba(20,21,24,0.9);display:grid;place-items:center;padding:32px;animation:mhFade .25s ease")}>
      <div onClick={(e) => e.stopPropagation()} style={css("width:min(900px,92vw);position:relative")}>
        <div style={css("aspect-ratio:4/3;border-radius:5px;overflow:hidden;box-shadow:0 40px 90px rgba(0,0,0,0.5)")}>
          <div role="img" aria-label={label} style={{ ...css("width:100%;height:100%;background-size:cover;background-position:center"), backgroundImage: `url('${img}')` }}></div>
        </div>
        <div style={css("margin-top:14px;color:#e7e1d6;font-size:15px;font-weight:500")}>{label}</div>
        <button onClick={onClose} aria-label="Close" style={css("position:absolute;top:-46px;right:0;background:none;border:none;cursor:pointer;color:#fff;font-size:30px;line-height:1")}>×</button>
      </div>
    </div>
  );
}
