import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      const savedScroll = sessionStorage.getItem("home_scroll_pos");
      if (savedScroll) {
        window.scrollTo(0, parseInt(savedScroll, 10));
      }
    } else {
      sessionStorage.setItem("home_scroll_pos", window.scrollY.toString());
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
