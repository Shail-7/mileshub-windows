import { useRouter, usePathname } from "next/navigation";

export function scrollToAnchor(anchor: string): void {
  const el = document.getElementById(anchor);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export interface SiteNav {
  goHome: () => void;
  goContact: () => void;
  goService: (id: string) => void;
  goSection: (anchor: string) => void;
}

/** Shared navigation helpers. Section links scroll on the home page and
 *  navigate to the home anchor from any other route. */
export function useSiteNav(): SiteNav {
  const router = useRouter();
  const pathname = usePathname();

  return {
    goHome: () => router.push("/"),
    goContact: () => router.push("/contact"),
    goService: (id: string) => router.push("/services/" + id),
    goSection: (anchor: string) => {
      if (pathname === "/") scrollToAnchor(anchor);
      else router.push("/#" + anchor);
    },
  };
}
