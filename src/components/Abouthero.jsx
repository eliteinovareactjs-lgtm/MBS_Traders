import Reveal from "../common/Reveal";

// Replace with your actual farm banner image in src/assets/about/
import heroImg from "../assets/banner3.jpg";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[520px] md:h-[640px] overflow-hidden">
      <img
        src={heroImg}
        alt="MBS Traders farm"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* subtle darkening so the (optional) heading stays readable */}
      <div className="absolute inset-0 bg-black/10" />

      <Reveal className="relative h-full flex items-end md:items-center">
        <div className="px-6 md:px-16 pb-10 md:pb-0 max-w-2xl">
          <h1 className="font-heading font-bold text-white text-3xl md:text-5xl leading-tight drop-shadow-sm">
            Rooted in the Farm,
            <br />
            Delivered to Your Door
          </h1>
        </div>
      </Reveal>
    </section>
  );
}