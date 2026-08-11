import { motion } from "framer-motion";
import farmimage from "../assets/farmimage.jpg";

export default function Journey() {
  return (
    <section id="journey" className="w-full min-h-[700px] bg-[#adb398] px-6 md:px-[65px] lg:px-[5%] py-16 md:py-20 flex items-center font-body overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* ===================================================== LEFT CONTENT - SLIDE FROM LEFT ====================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-[50%] xl:w-[49%]"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="font-heading text-[#008000] font-bold text-[28px] md:text-[32px] lg:text-[34px] leading-[1.3] mb-6 max-w-[560px]"
          >
            Our Journey: From Roots to Reliability
          </motion.h2>

          {/* First Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-[#293620] leading-[1.9] mb-5 text-[15.5px] md:text-[16px] max-w-[560px]"
          >
            What began 15 years ago in Coimbatore as a small family initiative
            to help friends and local entrepreneurs has grown into MBS—your
            trusted service partner. We saw a need for reliable, all-in-one
            support, and stepped up with timely service and quality supply.
          </motion.p>

          {/* Second Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="text-[#293620] leading-[1.9] text-[15.5px] md:text-[16px] max-w-[560px]"
          >
            Today, with a passionate team of 13, we offer 10 essential
            services under the MBS Farm Fresh banner—combining business
            support with healthy food delivery. More than a company, we're a
            growing community built on trust, care, and commitment.
          </motion.p>
        </motion.div>

        {/* ===================================================== RIGHT IMAGE - SLIDE FROM RIGHT ====================================================== */}
        <motion.div
          initial={{ opacity: 0, x: 120, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-[48%] xl:w-[47%] flex justify-center lg:justify-end"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-[535px] h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
          >
            <img
              src={farmimage}
              alt="MBS Traders farm"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}