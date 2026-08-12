import { Phone, Mail } from "lucide-react";

// Contact details — edit these two lines to update everywhere.
const PHONE_NUMBER = "9790516014";
const WHATSAPP_NUMBER = "919790516014"; // country code + number, no + or spaces
const EMAIL = "mbstraders9@gmail.com";

const whatsappMessage = "Hi MBS Traders, I'd like to know more about your products.";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
const phoneHref = `tel:+91${PHONE_NUMBER}`;

const mailSubject = "Business Enquiry - MBS TRADERS";
const mailBody = [
  "Dear MBS TRADERS,",
  "",
  "I am interested in your export products (Eggs, Meat, Vegetables, Millets). Please share more details and pricing.",
  "",
  "Regards,",
  "[Your Name]",
].join("\n");
// Opens Gmail's web compose window (matches gmail.com), instead of the OS mail app.
const mailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  EMAIL
)}&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

// Lucide-react doesn't ship the WhatsApp brand mark, so it's a small inline SVG.
const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" width="25" height="25" fill="currentColor" {...props}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    <path d="M12.02 2C6.5 2 2.03 6.44 2.03 11.91c0 1.87.52 3.61 1.42 5.11L2 22l5.13-1.34a10.02 10.02 0 0 0 4.89 1.25h.01c5.52 0 10-4.44 10-9.91C22.02 6.44 17.54 2 12.02 2Zm0 18.02h-.01c-1.55 0-3.06-.41-4.38-1.19l-.31-.18-3.05.8.82-2.96-.2-.3a8.02 8.02 0 0 1-1.24-4.28c0-4.44 3.65-8.05 8.14-8.05 2.17 0 4.21.84 5.75 2.37a8.03 8.03 0 0 1 2.38 5.68c0 4.44-3.65 8.11-7.9 8.11Z" />
  </svg>
);

export default function FloatingSocial() {
  return (
    <div className="fixed right-3 sm:right-5 top-[80px] sm:top-[95px] z-[900] flex flex-col items-center gap-[10px] sm:gap-[13px]">
      {/* WhatsApp */}
      
        <a href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-full bg-white shadow-[0_3px_12px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#25D366] hover:scale-105 transition-transform duration-200"
      >
        <WhatsAppIcon className="w-[22px] h-[22px] sm:w-[25px] sm:h-[25px]" />
      </a>

      {/* Phone */}
      
        <a href={phoneHref}
        aria-label="Call us"
        className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-full bg-white shadow-[0_3px_12px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#1976d2] hover:scale-105 transition-transform duration-200"
      >
        <Phone size={20} className="sm:hidden" strokeWidth={2} fill="#1976d2" />
        <Phone size={24} className="hidden sm:block" strokeWidth={2} fill="#1976d2" />
      </a>

      {/* Email */}
      
       <a href={mailHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email us"
        className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-full bg-white shadow-[0_3px_12px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#e53935] hover:scale-105 transition-transform duration-200"
      >
        <Mail size={20} className="sm:hidden" strokeWidth={2} />
        <Mail size={24} className="hidden sm:block" strokeWidth={2} />
      </a>
    </div>
  );
}