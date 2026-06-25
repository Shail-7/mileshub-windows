import Link from "next/link";
import { css } from "@/lib/css";

export default function NotFound() {
  return (
    <main className="mh-wrap" style={css("max-width:1240px;margin:0 auto;padding:120px 32px;text-align:center")}>
      <div style={css("font-size:12px;font-weight:600;letter-spacing:0.16em;color:var(--accent);text-transform:uppercase;margin-bottom:16px")}>404</div>
      <h1 style={css("font-family:var(--font-display);font-weight:800;font-size:clamp(34px,4.6vw,52px);letter-spacing:-0.03em;margin:0 0 18px")}>Page not found.</h1>
      <p style={css("font-size:18px;color:#55595f;margin:0 auto 32px;max-width:460px")}>The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="btn-accent" style={css("display:inline-block;font-size:16px;font-weight:600;padding:15px 30px;text-decoration:none")}>Back to home</Link>
    </main>
  );
}
