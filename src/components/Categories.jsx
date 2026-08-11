import { motion } from "framer-motion";
import { categories } from "../data/siteData";
import catbg from "../assets/catbg.png";

export default function Categories() {
  return (
    <section id="categories" className="w-full font-body">
      {/* ===================================================== TITLE AREA ====================================================== */}
      <div className="bg-white py-16 md:py-[70px] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-heading text-[#2d4056] font-bold text-[30px] md:text-[38px] leading-none"
        >
          Our Categories
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-[80px] h-[4px] bg-[#20a957] mx-auto mt-4 rounded-full"
        />
      </div>

      {/* ===================================================== BACKGROUND IMAGE AREA ====================================================== */}
      <div className="relative w-full overflow-hidden">
        {/* ================================================= FIXED BACKGROUND IMAGE ================================================== */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed" 
          style={{ backgroundImage: `url(${catbg})` }} 
        />
        {/* Background overlay */}
        <div className="absolute inset-0 z-0 bg-black/5 pointer-events-none" />

        {/* ================================================= CONTENT / CARDS ================================================== */}
        <div className="relative z-10 max-w-[1050px] mx-auto px-6 md:px-0 py-14 md:py-16">
          <div className="flex flex-col gap-8">
            {categories.map((cat, index) => {
              const isReverse = index % 2 === 1;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, x: isReverse ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full max-w-[800px] mx-auto min-h-[295px]"
                >
                  {/* ================================================= MAIN CARD ================================================== */}
                  <div className={`relative w-full min-h-[295px] rounded-[28px] shadow-[0_12px_30px_rgba(0,0,0,0.16)] overflow-visible ${cat.bg || "bg-white"}`}>
                    {/* ================================================= OVERLAPPING IMAGE ================================================== */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85, x: isReverse ? 50 : -50 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                      className={`absolute z-30 top-1/2 -translate-y-1/2 w-[320px] h-[200px] hidden md:block ${isReverse ? "right-[-100px]" : "left-[-100px]"}`}
                    >
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover rounded-[18px] shadow-[0_10px_24px_rgba(0,0,0,0.28)]"
                      />
                    </motion.div>

                    {/* ================================================= CONTENT ================================================== */}
                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                      className={`min-h-[295px] flex flex-col justify-center px-8 md:px-10 py-10 ${isReverse ? "md:pr-[220px] md:pl-[80px]" : "md:pl-[260px] md:pr-[55px]"}`}
                    >
                      <h3 className="font-heading text-[#292929] font-semibold text-[25px] md:text-[30px] leading-[1.2] mb-4">
                        {cat.title}
                      </h3>
                      <p className="text-[#4a4a4a] text-[15px] md:text-[16px] leading-[1.8]">
                        {cat.text}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}