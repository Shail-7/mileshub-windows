import type { CSSProperties } from "react";

/**
 * Parse a CSS declaration string into a React style object so the exported
 * design's inline styles can be reproduced faithfully. CSS custom properties
 * (`--x`) keep their name; all other properties are camel-cased.
 *
 * This keeps the markup a close, reviewable mirror of the source design while
 * still being type-safe at the call site (the result is a `CSSProperties`).
 */
export function css(text: string): CSSProperties {
  const out: Record<string, string> = {};
  for (const decl of text.split(";")) {
    const i = decl.indexOf(":");
    if (i === -1) continue;
    const prop = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (!prop) continue;
    const key = prop.startsWith("--")
      ? prop
      : prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[key] = val;
  }
  return out as CSSProperties;
}
