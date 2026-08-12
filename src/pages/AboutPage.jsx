// src/pages/AboutPage.jsx

import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingSocial from "../components/FloatingSocial";
import Reveal from "../common/Reveal";
import { motion } from "framer-motion";

// ============================================ ABOUT HERO COMPONENT ============================================
import heroImg from "../assets/abtbanner.png";

function AboutHero() {
  return (
    <section className="relative w-full h-[520px] md:h-[640px] overflow-hidden">
      <img src={heroImg} alt="MBS Traders farm" className="absolute inset-0 w-full h-full object-cover" />
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

// ============================================ OUR JOURNEY COMPONENT ============================================
import journeyImg from "../assets/farmimage.jpg";

function OurJourney() {
  return (
    <section id="journey" className="w-full min-h-[700px] bg-[#A6AD91] px-6 md:px-[65px] lg:px-[5%] py-16 md:py-20 flex items-center font-body overflow-hidden">
      <div className="w-full max-w-[1148px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-[50%] xl:w-[49%]"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="font-heading font-bold text-[#008000] text-[28px] md:text-[32px] lg:text-[34px] leading-[1.3] mb-6 max-w-[560px]"
          >
            Our Journey: From Roots to Reliability
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-[#293620] leading-[1.9] mb-5 text-[15.5px] md:text-[16px] max-w-[560px]"
          >
            What began 15 years ago in Coimbatore as a small family initiative to help friends and local entrepreneurs has grown into MBS—your trusted service partner. We saw a need for reliable, all-in-one support, and stepped up with timely service and quality supply.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="text-[#293620] leading-[1.9] mb-5 text-[15.5px] md:text-[16px] max-w-[560px]"
          >
            Today, with a passionate team of 13, we offer 10 essential services under the MBS Farm Fresh banner—combining business support with healthy food delivery. More than a company, we're a growing community built on trust, care, and commitment.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-[#293620] leading-[1.9] mb-5 text-[15.5px] md:text-[16px] max-w-[560px]"
          >
            Over the years, we've grown into a strong team of 13 dedicated professionals delivering 10 core services under the MBS Farm Fresh banner. From essential business services to healthy, farm-fresh food supplies, our offerings have expanded to meet the evolving needs of our clients.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
            className="text-[#293620] leading-[1.9] text-[15.5px] md:text-[16px] max-w-[560px]"
          >
            Today, MBS is more than a business—it's a community. We are proud to be a trusted partner to countless clients who have become part of our extended family.
          </motion.p>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
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
            className="w-full max-w-[535px] h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-[28px] shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
          >
            <img src={journeyImg} alt="Illustration of the MBS Traders farm" className="w-full h-full object-cover object-center" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================ MISSION & VISION COMPONENT ============================================
const missionPoints = [
  "To offer a seamless eCommerce experience that bridges the gap between producers and consumers across wholesale, retail, and export markets.",
  "To ensure the consistent supply of premium white shell eggs, fresh meats (chicken, fish, and mutton), and nutrient-rich millets through responsible sourcing and transparent practices.",
  "To promote sustainable agriculture by supporting local farmers and adhering to eco-conscious standards in every step of our supply chain.",
  "To build long-term partnerships through reliability, integrity, and customer-centric service across domestic and international markets.",
  "To leverage technology and innovation for better logistics, product traceability, and enhanced customer satisfaction.",
];

function MissionVision() {
  return (
    <section className="bg-gradient-to-b from-[#eaf8ed] via-[#f6fcf7] to-white py-14 md:py-20 overflow-hidden">
      <div className="w-[90%] max-w-[1130px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[49px]">
        {/* ================= MISSION - SLIDE FROM LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-white rounded-[18px] shadow-[0_10px_35px_rgba(0,0,0,0.08)] px-8 md:px-[51px] py-8 md:py-[31px] min-h-[584px]">
            <h3 className="font-heading font-bold text-[#29a54a] text-[30px] md:text-[32px] leading-[1.2] border-l-[4px] border-[#29a54a] pl-3 mb-7">
              Our Mission
            </h3>
            <ul className="space-y-[5px]">
              {missionPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-[9px] text-[15px] md:text-[16px] text-[#444] leading-[1.8]">
                  <span className="mt-[7px] flex-shrink-0 w-[12px] h-[12px] border-[2px] border-[#29b34d] rounded-[2px] relative">
                    <span className="absolute inset-[2px] bg-[#29b34d] rounded-[1px]" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ================= VISION - SLIDE FROM RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-white rounded-[18px] shadow-[0_10px_35px_rgba(0,0,0,0.08)] px-8 md:px-[31px] lg:px-[31px] py-8 md:py-[31px] min-h-[584px]">
            <h3 className="font-heading font-bold text-[#29a54a] text-[30px] md:text-[32px] leading-[1.2] border-l-[4px] border-[#29a54a] pl-3 mb-7">
              Our Vision
            </h3>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.8]">
              To become a globally trusted and innovative agri-commerce platform, delivering high-quality, sustainable, and ethically sourced agricultural products — from farm to every home and business — while empowering farmers and enriching lives.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================ CERTIFICATIONS COMPONENT ============================================
import certificationBg from "../assets/certificate.jpg";
import msmeLogo from "../assets/msme.png";
import dgftLogo from "../assets/dgft.png";
import gstLogo from "../assets/gst.png";
import fssaiLogo from "../assets/fssai.png";
import apedaLogo from "../assets/apeda-logo.png";
import msmePdf from "../assets/msme.pdf";
import dgftPdf from "../assets/dgft.pdf";
import gstPdf from "../assets/gst.pdf";
import fssaiPdf from "../assets/fssai.pdf";
import apedaPdf from "../assets/Apedapdf.pdf";

const certifications = [
  {
    id: "msme",
    logo: msmeLogo,
    title: "Micro, Small and Medium Enterprises",
    pdf: msmePdf,
    fileName: "MBS-MSME-Certificate.pdf",
  },
  {
    id: "dgft",
    logo: dgftLogo,
    title: "Ministry of Commerce and Industry DGFT",
    pdf: dgftPdf,
    fileName: "MBS-DGFT-Certificate.pdf",
  },
  {
    id: "gst",
    logo: gstLogo,
    title: "Goods and Services Tax",
    pdf: gstPdf,
    fileName: "MBS-GST-Certificate.pdf",
  },
  {
    id: "fssai",
    logo: fssaiLogo,
    title: "Food Safety and Standards Authority of India",
    pdf: fssaiPdf,
    fileName: "MBS-FSSAI-Certificate.pdf",
  },
  {
    id: "apeda",
    logo: apedaLogo,
    title: "Agricultural and processed food products export development authority",
    pdf: apedaPdf,
    fileName: "MBS-APEDA-Certificate.pdf",
  },
];

function Certifications() {
  return (
    <section className="relative w-full min-h-screen py-12 md:py-[50px] overflow-hidden bg-[#e6eceb]">
      {/* ===================================================== BACKGROUND IMAGE ===================================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src={certificationBg} alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.18]" />
        <div className="absolute inset-0 bg-[#e6eceb]/45" />
      </div>

      {/* ===================================================== CERTIFICATION CONTENT ===================================================== */}
      <div className="relative z-10 w-[90%] max-w-[750px] mx-auto">
        <div className="space-y-6 md:space-y-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-full bg-white rounded-[15px] border-l-[4px] border-[#27ad4c] shadow-[0_10px_25px_rgba(0,0,0,0.09)] px-5 sm:px-6 md:px-[31px] py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 md:gap-6">
                {/* ================= LOGO + TITLE ROW ================= */}
                <div className="flex items-center gap-4 sm:contents">
                  <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[84px] md:h-[84px] flex-shrink-0 flex items-center justify-center">
                    <img src={cert.logo} alt={`${cert.title} logo`} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#111111] font-medium text-[15px] sm:text-[16px] md:text-[18px] leading-[1.35]">
                      {cert.title}
                    </p>
                  </div>
                </div>

                {/* ================= DOWNLOAD BUTTON ================= */}
                <a
                  href={cert.pdf}
                  download={cert.fileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-full sm:w-auto text-center bg-[#087bf5] hover:bg-[#066edb] text-white font-semibold text-[14px] md:text-[15px] px-5 md:px-[20px] py-[11px] md:py-[12px] rounded-[5px] whitespace-nowrap transition-all duration-200 hover:shadow-[0_5px_15px_rgba(8,123,245,0.25)] active:scale-[0.97]"
                >
                  Download PDF
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================ WHO WE ARE COMPONENT ============================================
import whoWeAreImg from "../assets/Whoweare.png";

function WhoWeAre() {
  return (
    <section id="who-we-are" className="w-full min-h-[600px] bg-[#fdfcf7] px-6 md:px-[65px] lg:px-[5%] py-16 md:py-20 flex items-center font-body overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* ===================================================== LEFT CONTENT ===================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-[50%] xl:w-[49%]"
        >
          <h2 className="font-heading font-bold text-[#1a1a1a] text-[28px] md:text-[32px] lg:text-[34px] leading-[1.3] mb-6">
            Who We Are
          </h2>
          <div className="space-y-5 text-[#333] text-[15.5px] md:text-[16px] leading-[1.9]">
            <p>
              At <strong>MBS Farm Fresh</strong>, we specialize in providing the freshest, highest-quality farm eggs and premium cuts of meat. Our supply chain is designed to maintain nutritional value, hygiene, and customer satisfaction at every stage.
            </p>
            <p>
              We work directly with local farmers who follow ethical and sustainable practices, ensuring every product we offer is safe, natural, and responsibly sourced.
            </p>
            <p>
              From farm to fork, our team is dedicated to delivering quality and building a healthier tomorrow for families and communities.
            </p>
          </div>
        </motion.div>

        {/* ===================================================== RIGHT IMAGE ===================================================== */}
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
            className="w-full max-w-[570px] h-[400px] md:h-[450px] lg:h-[450px] overflow-hidden rounded-[18px] shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
          >
            <img src={whoWeAreImg} alt="Fresh eggs and meat from MBS Traders" className="w-full h-full object-cover object-center" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================ CORE VALUES COMPONENT ============================================
import coreValuesImg from "../assets/ourcore.png";

const values = [
  { label: "Customer-Centricity", text: "Focused on meeting your evolving needs" },
  { label: "Safety", text: "Ensuring hygiene and compliance at every step" },
  { label: "Quality", text: "Only the best reaches your doorstep." },
  { label: "Transparency", text: "We maintain full traceability from farm to home." },
  { label: "Commitment", text: "Your health and satisfaction are our priority." },
  { label: "Innovation", text: "Constantly improving our standards and delivery." },
];

function CoreValues() {
  return (
    <section id="core-values" className="w-full min-h-[600px] bg-[#fdfcf7] px-6 md:px-[40px] lg:px-[5%] pb-16 md:pb-20 pt-10 md:pt-14 flex items-center font-body overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
        {/* ===================================================== LEFT CONTENT ===================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-[48%] xl:w-[49%]"
        >
          <h2 className="font-heading font-bold text-[#1a1a1a] text-[28px] md:text-[32px] lg:text-[34px] leading-[1.3] mb-6">
            Our Core Values
          </h2>
          <ul className="space-y-3 text-[15.5px] md:text-[16px] text-[#333] leading-[1.8] list-disc pl-5">
            {values.map((v) => (
              <li key={v.label}>
                <strong>{v.label}:</strong> {v.text}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ===================================================== RIGHT IMAGE ===================================================== */}
        <motion.div
          initial={{ opacity: 0, x: 120, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-[50%] xl:w-[49%] flex justify-center lg:justify-end"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-[585px] h-[400px] md:h-[465px] lg:h-[465px] overflow-hidden rounded-[18px] shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
          >
            <img src={coreValuesImg} alt="Grains and vegetables from MBS Traders" className="w-full h-full object-cover object-center" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================ MAIN ABOUT PAGE ============================================
export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutHero />
      <OurJourney />
      <MissionVision />
      <Certifications />
      <WhoWeAre />
      <CoreValues />
      <FloatingSocial />
      <Footer />
    </>
  );
}