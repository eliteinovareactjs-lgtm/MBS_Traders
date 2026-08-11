import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToId } from "../utils/scrollToSection";

export default function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      // Small delay so the section exists in the DOM (and images/layout
      // have settled) before we calculate where to scroll to.
      const timer = setTimeout(() => {
        scrollToId(id);
      }, 100);

      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
}