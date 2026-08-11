import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "../data/siteData";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (i) => {
    setIndex((i + heroSlides.length) % heroSlides.length);
    resetTimer();
  };

  return (
    <section id="home" className="relative h-[675px] overflow-hidden bg-[#333]">
      {/* ================= BACKGROUND SLIDES ================= */}
      {heroSlides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1000ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        >
          {/* Uniform dark overlay like screenshot */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-0 md:ml-[18.5%] font-body">
        <div className="max-w-[720px]">
          {/* Heading */}
          <h1 className="font-heading text-white font-bold text-[32px] md:text-[44px] leading-[1.18] max-w-[720px] tracking-tight [text-shadow:0_2px_8px_rgba(0,0,0,0.35)]">
            "Welcome to your Neighborhood
            <br />
            Food Basket."
          </h1>

          {/* Subtitle */}
          <p className="text-white text-[17px] md:text-[18px] mt-5 font-normal">
            "Your Satisfaction is Our Commitment."
          </p>

          {/* Button */}
          <button
            type="button"
            onClick={(e) => e.preventDefault()}
            className="mt-8 bg-[#2f8f3a] hover:bg-[#267b30] text-white font-semibold text-[16px] px-6 py-3 rounded-[3px] transition-colors duration-200"
          >
            Order Online
          </button>
        </div>
      </div>

      {/* ================= LEFT ARROW ================= */}
      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
        className="absolute top-1/2 left-[5.5%] -translate-y-1/2 z-20 text-white/90 hover:text-white transition"
      >
        <ChevronLeft size={38} strokeWidth={1.5} />
      </button>

      {/* ================= RIGHT ARROW ================= */}
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
        className="absolute top-1/2 right-[5.5%] -translate-y-1/2 z-20 text-white/90 hover:text-white transition"
      >
        <ChevronRight size={38} strokeWidth={1.5} />
      </button>

      {/* ================= SLIDE DOTS ================= */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-[12px] h-[12px] rounded-full transition-all duration-300 ${
              i === index ? "bg-[#2f8f3a]" : "bg-[#2f8f3a]/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}