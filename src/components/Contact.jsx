export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    alert("Thank you! Your message has been noted.");
  };

  return (
    <section id="contact" className="bg-sage-dark text-white px-6 md:px-[60px] pt-16 pb-14 font-body">
      <div className="max-w-[1160px] mx-auto flex gap-14 flex-wrap">
        <div className="flex-1 min-w-[320px]">
          <h3 className="font-heading text-[26px] mb-3.5">Our Location :</h3>
          <p className="leading-[1.8] text-[15px] text-[#e8ecdf] mb-9">
            📍 MBS TRADERS
            <br />
            No.28.LALBHAGADUR NAGAR, MASAKALIPALAYAM MAIN ROAD, COIMBATORE-
            641004, TAMIL NADU, INDIA, Contact: +919790516014,
            mbstraders9@gmail.com
          </p>

          <h4 className="font-heading text-xl mb-4.5">Get in Touch :</h4>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="px-4 py-3.5 rounded-lg border-none text-[14.5px] bg-[#f4f5ee] text-[#222]"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="px-4 py-3.5 rounded-lg border-none text-[14.5px] bg-[#f4f5ee] text-[#222]"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="px-4 py-3.5 rounded-lg border-none text-[14.5px] bg-[#f4f5ee] text-[#222]"
            />
            <input
              type="text"
              placeholder="Your Address"
              className="px-4 py-3.5 rounded-lg border-none text-[14.5px] bg-[#f4f5ee] text-[#222]"
            />
            <textarea
              placeholder="Your Message"
              className="px-4 py-3.5 rounded-lg border-none text-[14.5px] bg-[#f4f5ee] text-[#222] min-h-[110px] resize-y"
            />
            <button
              type="submit"
              className="bg-[#8b9a71] hover:bg-[#a3b389] text-[#1c2717] font-bold py-3.5 rounded-lg text-[15px] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex-1 min-w-[320px]">
          <iframe
            title="MBS Traders location"
            src="https://maps.google.com/maps?q=Masakalipalayam%20Main%20Road%2C%20Coimbatore&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full min-h-[420px] border-0 rounded-2xl"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}