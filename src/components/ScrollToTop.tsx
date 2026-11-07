import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    const prevPath = prevPathnameRef.current;

    // Save home scroll position when leaving home
    if (prevPath === "/" && pathname.startsWith("/topics/")) {
      sessionStorage.setItem("home_scroll_pos", window.scrollY.toString());
    }

    if (pathname === "/") {
      if (hash === "#topics") {
        setTimeout(() => {
          const el = document.getElementById("topics");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 50);
      } else {
        const savedScroll = sessionStorage.getItem("home_scroll_pos");
        if (savedScroll) {
          setTimeout(() => {
            window.scrollTo(0, parseInt(savedScroll, 10));
          }, 0);
        } else {
          window.scrollTo(0, 0);
        }
      }
    } else {
      window.scrollTo(0, 0);
    }

    prevPathnameRef.current = pathname;
  }, [pathname, hash]);

  return null;
}
