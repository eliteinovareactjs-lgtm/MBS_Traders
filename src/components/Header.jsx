import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { navLinks } from "../data/siteData";
import { scrollToId, HEADER_OFFSET } from "./ScrollToSection";

// Try importing logo, fallback to public folder if needed
import logo from "../assets/logo.jpg";

export default function Header() {
  const [activeHref, setActiveHref] = useState("#home");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    // Scroll-spy only makes sense while we're on the home page,
    // where the section anchors actually live.
    if (!isHome) return;

    const sections = navLinks
      .filter((link) => !link.route)
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const onScroll = () => {
      let current = "#home";

      sections.forEach((sec) => {
        const top = sec.offsetTop - HEADER_OFFSET;

        if (window.scrollY >= top) {
          current = `#${sec.id}`;
        }
      });

      setActiveHref(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHome]);

  const handleSectionClick = (e, href) => {
    // Already on the home page: scroll manually (with header offset)
    // instead of letting the browser jump the anchor natively —
    // the native jump lands the section right under the sticky header.
    if (isHome) {
      e.preventDefault();
      scrollToId(href.replace("#", ""));
    }
    // Not on home: let the Link navigate to "/#section" as normal;
    // Home's useScrollToHash hook takes over once it mounts.
  };

  return (
    <header className="sticky top-0 z-[1000] h-[70px] bg-white border-b border-gray-100 shadow-sm font-body">
      <div className="h-full flex items-center px-3 md:px-4">

        {/* ================= LOGO ================= */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <img
            src={logo}
            alt="MBS Traders logo"
            className="w-10 h-10 rounded-full object-contain"
            onError={(e) => {
              // Fallback if logo fails to load
              e.target.src = "/logo.png";
            }}
          />

          <span className="font-heading font-semibold text-[20px] tracking-tight text-ink whitespace-nowrap">
            MBS TRADERS
          </span>
        </Link>

        {/* ================= SPACE + NAV ================= */}
        <div className="flex-1 flex justify-end">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-9">
              {navLinks.map((link) => {
                const isActive = link.route
                  ? location.pathname === link.href
                  : isHome && activeHref === link.href;

                const linkClasses = `text-[15.5px] font-medium transition-colors duration-200 whitespace-nowrap ${
                  isActive
                    ? "text-[#3a7d44]"
                    : "text-[#5a8a5e] hover:text-[#3a7d44]"
                }`;

                // Real page (e.g. About) -> always a router Link, no scroll logic.
                if (link.route) {
                  return (
                    <li key={link.href}>
                      <Link to={link.href} className={linkClasses}>
                        {link.label}
                      </Link>
                    </li>
                  );
                }

                // Same-page section (Home, Categories, Products, Contact):
                // - target "/#section" so it works from any page
                // - onClick handles the smooth, offset-aware scroll when
                //   we're already on the home page
                return (
                  <li key={link.href}>
                    <Link
                      to={isHome ? link.href : `/${link.href}`}
                      onClick={(e) => handleSectionClick(e, link.href)}
                      className={linkClasses}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* ================= CART + LOGIN ================= */}
        <div className="flex items-center gap-5 ml-8 flex-shrink-0">

          {/* Cart */}
          <a
            href="#"
            aria-label="Cart"
            className="text-[#3a7d44] hover:text-[#2d6636] transition-colors"
          >
            <ShoppingCart
              size={21}
              strokeWidth={2.5}
            />
          </a>

          {/* Login */}
          <button
            className="
              bg-[#3a7d44]
              hover:bg-[#2d6636]
              text-white
              font-semibold
              text-[14px]
              px-5
              py-2
              rounded-md
              transition-colors
              duration-200
            "
          >
            Login
          </button>

        </div>
      </div>
    </header>
  );
}