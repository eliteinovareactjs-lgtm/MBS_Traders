import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToId } from "../utils/scrollToSection";

/**
 * Call this once inside your Home page component.
 *
 * When you arrive at "/" (or navigate back to it) with a hash in the
 * URL — e.g. "/#categories" from clicking a nav link while on /about —
 * this scrolls to the matching section once it's rendered, landing
 * just below the sticky header instead of underneath it.
 *
 * With no hash, it scrolls back to the top (so navigating Home -> About
 * -> Home doesn't leave you stranded mid-page).
 */
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