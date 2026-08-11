import Reveal from "../common/Reveal";

// Replace with your actual product photo in src/assets/about/
import whoWeAreImg from "../assets/category3.jpg";

export default function WhoWeAre() {
  return (
    <section className="bg-[#fdfcf7] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal>
          <h2 className="font-heading font-bold text-[#1a1a1a] text-3xl mb-6">
            Who We Are
          </h2>

          <div className="space-y-5 text-[#333] text-[15.5px] leading-relaxed">
            <p>
              At <strong>MBS Farm Fresh</strong>, we specialize in providing
              the freshest, highest-quality farm eggs and premium cuts of
              meat. Our supply chain is designed to maintain nutritional
              value, hygiene, and customer satisfaction at every stage.
            </p>
            <p>
              We work directly with local farmers who follow ethical and
              sustainable practices, ensuring every product we offer is
              safe, natural, and responsibly sourced.
            </p>
            <p>
              From farm to fork, our team is dedicated to delivering
              quality and building a healthier tomorrow for families and
              communities.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <img
            src={whoWeAreImg}
            alt="Fresh eggs and meat from MBS Traders"
            className="w-full rounded-xl shadow-lg"
          />
        </Reveal>
      </div>
    </section>
  );
}