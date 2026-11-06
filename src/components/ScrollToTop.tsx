import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    const prevPath = prevPathnameRef.current;

    // Save home scroll position only when leaving home for a topic page
    if (prevPath === "/" && pathname.startsWith("/topics/")) {
      sessionStorage.setItem("home_scroll_pos", window.scrollY.toString());
    }

    // Restore home scroll position when returning to the home page
    if (pathname === "/") {
      const savedScroll = sessionStorage.getItem("home_scroll_pos");
      if (savedScroll) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedScroll, 10));
        }, 0);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      // Always scroll to top when navigating between topic pages
      window.scrollTo(0, 0);
    }

    prevPathnameRef.current = pathname;
  }, [pathname]);

  return null;
}
