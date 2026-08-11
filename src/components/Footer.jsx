import { MapPin, Phone, Mail } from "lucide-react";
import { navLinks } from "../data/siteData";

// lucide-react no longer ships brand/social icons, so these are small
// inline SVGs instead — same 16px sizing as the lucide icons above.
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
  </svg>
);
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M22 5.9c-.73.33-1.5.54-2.32.64a4.05 4.05 0 0 0 1.78-2.24 8.1 8.1 0 0 1-2.56.98 4.03 4.03 0 0 0-6.87 3.68A11.44 11.44 0 0 1 3.66 4.9a4.03 4.03 0 0 0 1.25 5.38 4 4 0 0 1-1.83-.5v.05a4.03 4.03 0 0 0 3.23 3.95 4.05 4.05 0 0 1-1.82.07 4.03 4.03 0 0 0 3.76 2.8A8.1 8.1 0 0 1 2 18.4a11.44 11.44 0 0 0 6.2 1.82c7.44 0 11.51-6.16 11.51-11.51 0-.18 0-.35-.01-.52A8.2 8.2 0 0 0 22 5.9Z" />
  </svg>
);
const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.71h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-footer-sage text-[#25341f] px-6 md:px-[60px] pt-14 pb-6 font-body">
      <div className="max-w-[1160px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h4 className="font-heading text-xl mb-4 text-[#20291a]">MBS TRADERS</h4>
          <p className="text-[14.5px] leading-[1.7] text-[#31401f]">
            Delivering organic produce, fresh meat, and wholesome grains right
            to your doorstep. Sustainability and quality at our core.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-xl mb-4 text-[#20291a]">Quick Links</h4>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[14.5px] text-[#31401f] hover:text-forest-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-xl mb-4 text-[#20291a]">Contact Us</h4>
          <p className="flex gap-2 items-start text-[14.5px] mb-3">
            <MapPin size={16} className="mt-0.5 flex-shrink-0" />
            No.28.LALBHAGADUR NAGAR, MASAKALIPALAYAM MAIN ROAD, COIMBATORE-
            641004, TAMIL NADU, INDIA
          </p>
          <p className="flex gap-2 items-center text-[14.5px] mb-3">
            <Phone size={16} /> +919790516014
          </p>
          <p className="flex gap-2 items-center text-[14.5px]">
            <Mail size={16} /> mbstraders9@gmail.com
          </p>
        </div>

        <div>
          <h4 className="font-heading text-xl mb-4 text-[#20291a]">Follow Us</h4>
          <div className="flex gap-3.5">
            <a href="#" className="w-9 h-9 rounded-md bg-white flex items-center justify-center text-[#25341f]">
              <FacebookIcon />
            </a>
            <a href="#" className="w-9 h-9 rounded-md bg-white flex items-center justify-center text-[#25341f]">
              <InstagramIcon />
            </a>
            <a href="#" className="w-9 h-9 rounded-md bg-white flex items-center justify-center text-[#25341f]">
              <TwitterIcon />
            </a>
            <a href="#" className="w-9 h-9 rounded-md bg-white flex items-center justify-center text-[#25341f]">
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto mt-9 pt-5 border-t border-black/15 flex justify-between flex-wrap gap-2.5 text-[13.5px] text-[#31401f]">
        <span>© MBS TRADERS. All rights reserved.</span>
        <span>
          @ 2026 Designed by{" "}
          <a href="#" className="text-forest font-semibold">
            Balasabari Software Developer
          </a>
          , Vadapalani, Chennai
        </span>
      </div>
    </footer>
  );
}