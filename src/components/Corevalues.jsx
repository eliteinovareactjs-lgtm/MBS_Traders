import Reveal from "../common/Reveal";

// Replace with your actual product photo in src/assets/about/
import coreValuesImg from "../assets/catbg.png";

const values = [
  { label: "Customer-Centricity", text: "Focused on meeting your evolving needs" },
  { label: "Safety", text: "Ensuring hygiene and compliance at every step" },
  { label: "Quality", text: "Only the best reaches your doorstep." },
  { label: "Transparency", text: "We maintain full traceability from farm to home." },
  { label: "Commitment", text: "Your health and satisfaction are our priority." },
  { label: "Innovation", text: "Constantly improving our standards and delivery." },
];

export default function CoreValues() {
  return (
    <section className="bg-[#fdfcf7] pb-16 md:pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal>
          <h2 className="font-heading font-bold text-[#1a1a1a] text-3xl mb-6">
            Our Core Values
          </h2>

          <ul className="space-y-3 text-[15.5px] text-[#333] leading-relaxed list-disc pl-5">
            {values.map((v) => (
              <li key={v.label}>
                <strong>{v.label}:</strong> {v.text}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <img
            src={coreValuesImg}
            alt="Grains and vegetables from MBS Traders"
            className="w-full rounded-xl shadow-lg"
          />
        </Reveal>
      </div>
    </section>
  );
}