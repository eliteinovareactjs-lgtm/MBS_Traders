import Reveal from "../common/Reveal";

const missionPoints = [
  "To offer a seamless eCommerce experience that bridges the gap between producers and consumers across wholesale, retail, and export markets.",
  "To ensure the consistent supply of premium white shell eggs, fresh meats (chicken, fish, and mutton), and nutrient-rich millets through responsible sourcing and transparent practices.",
  "To promote sustainable agriculture by supporting local farmers and adhering to eco-conscious standards in every step of our supply chain.",
  "To build long-term partnerships through reliability, integrity, and customer-centric service across domestic and international markets.",
  "To leverage technology and innovation for better logistics, product traceability, and enhanced customer satisfaction.",
];

export default function MissionVision() {
  return (
    <section className="bg-gradient-to-b from-[#eaf6ea] to-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8">
        {/* Mission */}
        <Reveal>
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-8 md:p-10 h-full">
            <h3 className="font-heading font-bold text-[#2d6636] text-2xl border-l-4 border-[#3a7d44] pl-4 mb-6">
              Our Mission
            </h3>
            <ul className="space-y-4">
              {missionPoints.map((point, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-[#333] leading-relaxed">
                  <span className="mt-[3px] flex-shrink-0 w-[14px] h-[14px] rounded-[3px] border-2 border-[#3a7d44]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Vision */}
        <Reveal delay={150}>
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-8 md:p-10 h-full">
            <h3 className="font-heading font-bold text-[#2d6636] text-2xl border-l-4 border-[#3a7d44] pl-4 mb-6">
              Our Vision
            </h3>
            <p className="text-[15px] text-[#333] leading-relaxed">
              To become a globally trusted and innovative agri-commerce
              platform, delivering high-quality, sustainable, and ethically
              sourced agricultural products — from farm to every home and
              business — while empowering farmers and enriching lives.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}