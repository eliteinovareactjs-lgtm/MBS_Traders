import { motion } from "framer-motion";
import { weAreCards } from "../data/siteData";

export default function WeAre() {
  return (
    <section id="weare" className="w-full bg-[#607C52] px-6 md:px-[60px] py-16 md:py-20 font-body overflow-hidden">
      {/* ===================================================== TITLE ====================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-10 md:mb-12"
      >
        {/* Heading */}
        <h2 className="font-heading text-white font-bold text-[30px] md:text-[40px] leading-none">
          We are
        </h2>

        {/* Green underline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="w-[60px] h-[3px] bg-[#20A957] mx-auto mt-4 rounded-full"
        />
      </motion.div>

      {/* ===================================================== CARDS CONTAINER ====================================================== */}
      <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
        {weAreCards.map((card, index) => (
          <FlipCard key={card.id} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}

/* ========================================================= FLIP CARD COMPONENT ========================================================= */

function FlipCard({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-[250px] h-[300px] [perspective:1200px] cursor-pointer"
    >
      {/* =================================================== ROTATING CARD ==================================================== */}
      <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:[transform:rotateY(180deg)]">
        {/* ================================================= FRONT SIDE ================================================== */}
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[16px] bg-white shadow-[0_14px_30px_rgba(0,0,0,0.22)] [backface-visibility:hidden]">
          {/* Card image */}
          <img
            src={card.image}
            alt={card.label}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark gradient at bottom */}
          <div className="absolute left-0 right-0 bottom-0 h-[100px] bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none" />

          {/* Card label */}
          <div className="absolute left-1/2 bottom-5 -translate-x-1/2 bg-black/55 px-4 py-1.5 rounded-[5px] whitespace-nowrap">
            <span className="text-white font-semibold text-[18px] md:text-[20px]">
              {card.label}
            </span>
          </div>
        </div>

        {/* ================================================= BACK SIDE ================================================== */}
        <div className="absolute inset-0 w-full h-full rounded-[16px] bg-[#164A3A] shadow-[0_14px_30px_rgba(0,0,0,0.22)] [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center px-8 text-center">
          <p className="text-white text-[15px] md:text-[16px] leading-[1.7] font-medium">
            {card.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}