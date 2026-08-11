import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { navLinks } from "../data/siteData";
import { scrollToId, HEADER_OFFSET } from "../utils/ScrollToSection";

// Try importing logo, fallback to public folder if needed
import logo from "../assets/logo.jpg";

export default function Header() {
  const [activeHref, setActiveHref] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);
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

  // Close the mobile menu whenever the route changes (e.g. tapping a
  // link that navigates to /about, or the browser back/forward button).
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-[1000] h-[70px] bg-white border-b border-gray-100 shadow-sm font-body">
      <div className="h-full flex items-center px-3 md:px-4">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 flex-shrink-0"
        >
          <img
            src={logo}
            alt="MBS Traders logo"
            className="w-10 h-10 rounded-full object-contain"
            onError={(e) => {
              // Fallback if logo fails to load
              e.target.src = "/logo.png";
            }}
          />

          <span className="font-heading font-semibold text-[18px] md:text-[20px] tracking-tight text-ink whitespace-nowrap">
            MBS TRADERS
          </span>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
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

        {/* ================= CART + LOGIN (desktop) ================= */}
        <div className="hidden md:flex items-center gap-5 ml-8 flex-shrink-0">
          <a
            href="#"
            aria-label="Cart"
            className="text-[#3a7d44] hover:text-[#2d6636] transition-colors"
          >
            <ShoppingCart size={21} strokeWidth={2.5} />
          </a>

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

        {/* ================= MOBILE: HAMBURGER ================= */}
        <div className="flex md:hidden items-center ml-auto flex-shrink-0">
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="text-[#25341F] p-1 -mr-1"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU PANEL ================= */}
      <div
        className={`md:hidden fixed top-[70px] right-0 bottom-0 w-[72%] max-w-[320px] bg-white z-[890] transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col px-6 pt-6">
          <ul className="flex flex-col">
            {navLinks.map((link) => {
              const isActive = link.route
                ? location.pathname === link.href
                : isHome && activeHref === link.href;

              const linkClasses = `block py-3 text-[17px] font-semibold transition-colors duration-200 ${
                isActive
                  ? "text-[#3a7d44]"
                  : "text-[#3a7d44] hover:text-[#2d6636]"
              }`;

              if (link.route) {
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={linkClasses}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              }

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

          <a
            href="#"
            aria-label="Cart"
            className="text-[#3a7d44] hover:text-[#2d6636] transition-colors py-3"
          >
            <ShoppingCart size={22} strokeWidth={2.5} />
          </a>

          <button
            onClick={() => setMenuOpen(false)}
            className="
              mt-8
              w-full
              bg-[#3a7d44]
              hover:bg-[#2d6636]
              text-white
              font-semibold
              text-[15px]
              px-5
              py-3
              rounded-md
              transition-colors
              duration-200
            "
          >
            Login
          </button>
        </nav>
      </div>
    </header>
  );
}