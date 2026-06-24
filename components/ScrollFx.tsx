"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Drives scroll-reveal, hero parallax and count-up animations. A continuous
 * requestAnimationFrame loop scans the live DOM, so newly-rendered content
 * (after client navigation) is picked up automatically.
 *
 * Reveal contract (CSS in globals.css):
 *   - `[data-reveal]`        starts hidden; gets `data-shown` when in view.
 *   - `[data-reveal-delay]`  ms delay before `data-shown` is applied.
 *   - `[data-count]`         counts up to its numeric value once in view.
 *   - `[data-parallax]`      translated each frame from its parent's position.
 *   - `[data-hu]`            hero copy; force-shown after a short timeout.
 */
export default function ScrollFx(): null {
  const pathname = usePathname();

  useEffect(() => {
    let raf = 0;
    let frame = 0;

    const count = (el: Element): void => {
      const target = parseFloat(el.getAttribute("data-count") ?? "");
      if (isNaN(target)) return;
      const dec = parseInt(el.getAttribute("data-decimals") ?? "0", 10);
      const suf = el.getAttribute("data-suffix") ?? "";
      const pre = el.getAttribute("data-prefix") ?? "";
      const dur = 1400;
      const start = performance.now();
      const fmt = (n: number): string => {
        let s: string;
        if (dec > 0) {
          const parts = n.toFixed(dec).split(".");
          parts[0] = parseInt(parts[0], 10).toLocaleString("en-US");
          s = parts.join(".");
        } else {
          s = Math.round(n).toLocaleString("en-US");
        }
        return pre + s + suf;
      };
      const tick = (now: number): void => {
        const t = Math.min(1, (now - start) / dur);
        const e = 1 - Math.pow(1 - t, 3);
        el.textContent = fmt(target * e);
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = fmt(target);
      };
      requestAnimationFrame(tick);
    };

    const check = (): void => {
      const vh = window.innerHeight || 800;
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-rev])").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > -40) {
          el.setAttribute("data-rev", "1");
          const d = parseInt(el.getAttribute("data-reveal-delay") ?? "0", 10);
          window.setTimeout(() => el.setAttribute("data-shown", "1"), d);
        }
      });
      document.querySelectorAll<HTMLElement>("[data-count]:not([data-cnt])").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.95 && r.bottom > 0) {
          el.setAttribute("data-cnt", "1");
          count(el);
        }
      });
    };

    const tick = (): void => {
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const host = el.parentElement;
        if (!host) return;
        const r = host.getBoundingClientRect();
        const f = parseFloat(el.getAttribute("data-parallax") ?? "0");
        el.style.transform = "translate3d(0," + (-r.top * f).toFixed(1) + "px,0)";
      });
      frame += 1;
      if (frame % 3 === 0) check();
      raf = requestAnimationFrame(tick);
    };

    check();
    raf = requestAnimationFrame(tick);
    const timers = [
      window.setTimeout(check, 120),
      window.setTimeout(check, 500),
      // hero copy is above the fold — guarantee it shows even if the entrance stalls
      window.setTimeout(() => {
        document.querySelectorAll<HTMLElement>("[data-hu]").forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
      }, 1300),
    ];

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach((t) => clearTimeout(t));
    };
  }, [pathname]);

  return null;
}
