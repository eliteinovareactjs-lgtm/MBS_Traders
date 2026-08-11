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
          className="font-heading text-[#2d4056] font-bold text-[28px] md:text-[38px] leading-none px-4"
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
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{ backgroundImage: `url(${catbg})` }}
        />
        {/* Background overlay */}
        <div className="absolute inset-0 z-0 bg-black/5 pointer-events-none" />

        {/* ================================================= CONTENT / CARDS ================================================== */}
        <div className="relative z-10 max-w-[1050px] mx-auto px-4 sm:px-6 md:px-0 py-10 md:py-16">
          <div className="flex flex-col gap-6 md:gap-8">
            {categories.map((cat, index) => {
              const isReverse = index % 2 === 1;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full max-w-[800px] mx-auto md:min-h-[295px]"
                >
                  {/* ================================================= MAIN CARD ================================================== */}
                  <div
                    className={`relative w-full md:min-h-[295px] rounded-[20px] md:rounded-[28px] shadow-[0_12px_30px_rgba(0,0,0,0.16)] overflow-hidden md:overflow-visible p-4 sm:p-5 md:p-0 ${
                      cat.bg || "bg-white"
                    }`}
                  >
                    {/* ================================================= MOBILE IMAGE (inset, own rounded corners) ================================================== */}
                    <div className="block md:hidden w-full h-[190px] sm:h-[220px] rounded-[16px] overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* ================================================= DESKTOP OVERLAPPING IMAGE ================================================== */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85, x: isReverse ? 50 : -50 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                      className={`absolute z-30 top-1/2 -translate-y-1/2 w-[320px] h-[200px] hidden md:block ${
                        isReverse ? "right-[-100px]" : "left-[-100px]"
                      }`}
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
                      className={`flex flex-col justify-center text-center md:text-left pt-5 sm:pt-6 md:pt-0 md:min-h-[295px] md:px-10 md:py-10 ${
                        isReverse ? "md:pr-[220px] md:pl-[80px]" : "md:pl-[260px] md:pr-[55px]"
                      }`}
                    >
                      <h3 className="font-heading text-[#292929] font-semibold text-[21px] sm:text-[24px] md:text-[30px] leading-[1.2] mb-3 md:mb-4">
                        {cat.title}
                      </h3>
                      <p className="text-[#4a4a4a] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] md:leading-[1.8]">
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