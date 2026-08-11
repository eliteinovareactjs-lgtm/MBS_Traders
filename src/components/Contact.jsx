import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;

    form.reset();

    alert(`Thank you ${name}! Your message has been noted.`);
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#607C52] text-white font-body"
    >
      {/* =========================================================
          MAIN CONTACT CONTAINER
      ========================================================= */}
      <div
        className="
          w-full
          max-w-[1223px]
          mx-auto
          px-[32px]
          md:px-0
          pt-[18px]
          pb-[38px]

          flex
          flex-col
          lg:flex-row

          gap-[48px]
        "
      >
        {/* =======================================================
            LEFT COLUMN
        ======================================================== */}
        <div
          className="
            w-full
            lg:w-[576px]
            lg:flex-shrink-0
          "
        >
          {/* =====================================================
              OUR LOCATION
          ====================================================== */}
          <h3
            className="
              font-heading
              text-[28px]
              leading-[34px]
              font-bold
              mb-[8px]
            "
          >
            Our Location :
          </h3>

          {/* =====================================================
              LOCATION DETAILS
          ====================================================== */}
          <p
            className="
              text-[15px]
              leading-[1.75]
              text-[#F0F2EC]
              mb-[30px]
            "
          >
            <span>
              📍&nbsp; MBS TRADERS
            </span>

            <br />

            No.28.LALBHAGADUR NAGAR, MASAKALIPALAYAM MAIN ROAD, COIMBATORE-
            <br className="hidden md:block" />

            641004, TAMIL NADU, INDIA, Contact: +919790516014,
            mbstraders9@gmail.com
          </p>

          {/* =====================================================
              GET IN TOUCH HEADING
          ====================================================== */}
          <h4
            className="
              font-heading
              text-[24px]
              leading-[30px]
              font-bold
              mb-[14px]
            "
          >
            Get in Touch :
          </h4>

          {/* =====================================================
              CONTACT FORM
          ====================================================== */}
          <form
            onSubmit={handleSubmit}
            className="
              flex
              flex-col
              gap-[15px]
            "
          >
            {/* =================================================
                NAME
            ================================================== */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="
                w-full
                h-[54px]

                px-[14px]

                bg-[#F4F5F4]
                text-[#333]
                placeholder:text-[#68718A]

                text-[14px]

                rounded-[8px]

                border-none
                outline-none

                box-border

                focus:outline-none
                focus:ring-2
                focus:ring-[#A6AD8E]
              "
            />

            {/* =================================================
                EMAIL
            ================================================== */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="
                w-full
                h-[54px]

                px-[14px]

                bg-[#F4F5F4]
                text-[#333]
                placeholder:text-[#68718A]

                text-[14px]

                rounded-[8px]

                border-none
                outline-none

                box-border

                focus:outline-none
                focus:ring-2
                focus:ring-[#A6AD8E]
              "
            />

            {/* =================================================
                PHONE
            ================================================== */}
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              className="
                w-full
                h-[54px]

                px-[14px]

                bg-[#F4F5F4]
                text-[#333]
                placeholder:text-[#68718A]

                text-[14px]

                rounded-[8px]

                border-none
                outline-none

                box-border

                focus:outline-none
                focus:ring-2
                focus:ring-[#A6AD8E]
              "
            />

            {/* =================================================
                ADDRESS
            ================================================== */}
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              className="
                w-full
                h-[52px]

                px-[14px]

                bg-[#F4F5F4]
                text-[#333]
                placeholder:text-[#68718A]

                text-[14px]

                rounded-[8px]

                border-none
                outline-none

                box-border

                focus:outline-none
                focus:ring-2
                focus:ring-[#A6AD8E]
              "
            />

            {/* =================================================
                MESSAGE
            ================================================== */}
            <textarea
              name="message"
              placeholder="Your Message"
              className="
                w-full
                h-[149px]

                px-[14px]
                py-[14px]

                bg-[#F4F5F4]
                text-[#333]
                placeholder:text-[#68718A]

                text-[14px]

                rounded-[8px]

                border-none
                outline-none

                resize-y

                box-border

                focus:outline-none
                focus:ring-2
                focus:ring-[#A6AD8E]
              "
            />

            {/* =================================================
                SEND MESSAGE BUTTON
            ================================================== */}
            <button
              type="submit"
              className="
                w-full
                h-[53px]

                bg-[#A6AD8E]
                hover:bg-[#B2B99B]

                text-[#111]

                font-bold
                text-[15px]

                rounded-[8px]

                border-none

                transition-colors
                duration-200

                cursor-pointer
              "
            >
              Send Message
            </button>
          </form>
        </div>

        {/* =======================================================
            RIGHT COLUMN - GOOGLE MAP
        ======================================================== */}
        <div
          className="
            w-full
            lg:w-[576px]
            lg:flex-shrink-0

            flex
            items-start

            lg:pt-[239px]
          "
        >
          {/* =====================================================
              MAP CONTAINER
          ====================================================== */}
          <div
            className="
              w-full
              h-[326px]

              overflow-hidden

              rounded-[12px]

              bg-white

              shadow-[0_3px_8px_rgba(0,0,0,0.16)]
            "
          >
            <iframe
              title="MBS Traders location"
              src="https://maps.google.com/maps?q=Masakalipalayam%20Main%20Road%2C%20Coimbatore&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="
                w-full
                h-full
                border-0
              "
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}