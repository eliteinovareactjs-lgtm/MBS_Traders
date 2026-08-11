import { Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { navLinks } from "../data/siteData";

// ============================================================
// FOOTER
// ============================================================

export default function Footer() {
  return (
    <footer
      className="
        w-full
        bg-[#A4AB8B]
        text-[#25341F]
        border-t
        border-[#536C46]
        font-body
      "
    >

      {/* ======================================================
          TOP FOOTER CONTENT
      ======================================================= */}
      <div
        className="
          max-w-[1200px]
          mx-auto
          px-[31px]

          pt-[47px]
          pb-[36px]

          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-[270px_220px_275px_1fr]

          gap-x-[34px]
          gap-y-[40px]
        "
      >

        {/* ====================================================
            MBS TRADERS
        ===================================================== */}
        <div>
          <h4
            className="
              font-heading
              text-[24px]
              leading-[29px]
              font-bold
              text-white
              mb-[17px]
            "
          >
            MBS TRADERS
          </h4>

          <p
            className="
              text-[15px]
              leading-[1.7]
              text-[#26341F]
              max-w-[270px]
            "
          >
            Delivering organic produce, fresh meat,
            and wholesome grains right to your
            doorstep. Sustainability and quality at
            our core.
          </p>
        </div>


        {/* ====================================================
            QUICK LINKS
        ===================================================== */}
        <div>
          <h4
            className="
              font-heading
              text-[24px]
              leading-[29px]
              font-bold
              text-white
              mb-[17px]
            "
          >
            Quick Links
          </h4>

          <ul className="space-y-[10px]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="
                    text-[15px]
                    leading-[22px]
                    text-[#26341F]
                    hover:text-[#182416]
                    transition-colors
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>


        {/* ====================================================
            CONTACT US
        ===================================================== */}
        <div>
          <h4
            className="
              font-heading
              text-[24px]
              leading-[29px]
              font-bold
              text-white
              mb-[17px]
            "
          >
            Contact Us
          </h4>

          {/* LOCATION */}
          <div
            className="
              flex
              items-start
              gap-[8px]

              text-[15px]
              leading-[1.7]

              text-[#26341F]

              mb-[17px]
            "
          >
            <span
              className="flex-shrink-0 leading-none"
              style={{ fontSize: "17px" }}
              role="img"
              aria-label="Location"
            >
              📍
            </span>

            <p>
              No.28.LALBHAGADUR NAGAR,
              <br />
              MASAKALIPALAYAM MAIN ROAD,
              <br />
              COIMBATORE- 641004, TAMIL NADU,
              <br />
              INDIA
            </p>
          </div>


          {/* PHONE */}
          <div
            className="
              flex
              items-center
              gap-[8px]

              text-[15px]

              text-[#26341F]

              mb-[17px]
            "
          >
            <Phone
              size={17}
              className="flex-shrink-0 text-[#E82B83]"
              fill="#E82B83"
              strokeWidth={1.5}
            />

            <span>
              +919790516014
            </span>
          </div>


          {/* EMAIL */}
          <div
            className="
              flex
              items-center
              gap-[8px]

              text-[15px]

              text-[#26341F]
            "
          >
            <Mail
              size={17}
              className="flex-shrink-0 text-[#2878D7]"
              strokeWidth={2}
            />

            <span>
              mbstraders9@gmail.com
            </span>
          </div>
        </div>


        {/* ====================================================
            FOLLOW US
        ===================================================== */}
        <div>
          <h4
            className="
              font-heading
              text-[24px]
              leading-[29px]
              font-bold
              text-white
              mb-[17px]
            "
          >
            Follow Us
          </h4>

          <div
            className="
              flex
              items-center
              gap-[10px]
              text-[#252A20]
            "
          >

            {/* FACEBOOK */}
            <a
              href="#"
              aria-label="Facebook"
              className="
                flex
                items-center
                justify-center
                text-[#25341F]
                hover:text-[#111]
                transition-colors
              "
            >
              <FaFacebook size={21} />
            </a>


            {/* INSTAGRAM */}
            <a
              href="#"
              aria-label="Instagram"
              className="
                flex
                items-center
                justify-center
                text-[#25341F]
                hover:text-[#111]
                transition-colors
              "
            >
              <FaInstagram size={21} />
            </a>


            {/* TWITTER */}
            <a
              href="#"
              aria-label="Twitter"
              className="
                flex
                items-center
                justify-center
                text-[#25341F]
                hover:text-[#111]
                transition-colors
              "
            >
              <FaTwitter size={21} />
            </a>


            {/* LINKEDIN */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="
                flex
                items-center
                justify-center
                text-[#25341F]
                hover:text-[#111]
                transition-colors
              "
            >
              <FaLinkedin size={21} />
            </a>

          </div>
        </div>
      </div>


      {/* ======================================================
          BOTTOM LINE
      ======================================================= */}
      <div
        className="
          mx-[14px]
          border-t
          border-[#536C46]
        "
      />


      {/* ======================================================
          COPYRIGHT
      ======================================================= */}
      <div
        className="
          max-w-[1200px]
          mx-auto

          px-[31px]
          py-[25px]

          flex
          flex-col
          md:flex-row

          md:items-center
          md:justify-between

          gap-[12px]

          text-[15px]
          leading-[20px]

          text-white
        "
      >

        {/* LEFT */}
        <span>
          © MBS TRADERS. All rights reserved.
        </span>


        {/* RIGHT */}
        <span className="md:text-right">
          @ 2026 Designed by{" "}

          <a
            href="#"
            className="
              text-[#0047FF]
              font-semibold
              underline
              hover:text-[#0035C7]
            "
          >
            Balasabari Software Developer
          </a>

          {" "} , Vadapalani, Chennai
        </span>

      </div>
    </footer>
  );
}