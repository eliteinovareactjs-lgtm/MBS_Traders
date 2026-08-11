// src/pages/AboutPage.jsx

import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingSocial from "../components/FloatingSocial";
import Reveal from "../common/Reveal";

// ============================================
// ABOUT HERO COMPONENT
// ============================================
import heroImg from "../assets/banner3.jpg";

function AboutHero() {
  return (
    <section className="relative w-full h-[520px] md:h-[640px] overflow-hidden">
      <img
        src={heroImg}
        alt="MBS Traders farm"
        className="absolute inset-0 w-full h-full object-cover"
      />
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

// ============================================
// OUR JOURNEY COMPONENT
// ============================================
import journeyImg from "../assets/catbg.png";

function OurJourney() {
  return (
    <section className="bg-[#9CAA82] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal>
          <h2 className="font-heading font-bold text-[#1f4d24] text-3xl md:text-[34px] leading-tight mb-6">
            Our Journey: From Roots to Reliability
          </h2>
          <div className="space-y-5 text-[#233524] text-[15.5px] leading-relaxed">
            <p>
              What began 15 years ago in Coimbatore as a small family
              initiative to help friends and local entrepreneurs has grown
              into MBS—your trusted service partner. We saw a need for
              reliable, all-in-one support, and stepped up with timely
              service and quality supply.
            </p>
            <p>
              Today, with a passionate team of 13, we offer 10 essential
              services under the MBS Farm Fresh banner—combining business
              support with healthy food delivery. More than a company,
              we're a growing community built on trust, care, and
              commitment.
            </p>
            <p>
              Over the years, we've grown into a strong team of 13
              dedicated professionals delivering 10 core services under the
              MBS Farm Fresh banner. From essential business services to
              healthy, farm-fresh food supplies, our offerings have
              expanded to meet the evolving needs of our clients.
            </p>
            <p>
              Today, MBS is more than a business—it's a community. We are
              proud to be a trusted partner to countless clients who have
              become part of our extended family.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <img
            src={journeyImg}
            alt="Illustration of the MBS Traders farm"
            className="w-full rounded-xl shadow-lg"
          />
        </Reveal>
      </div>
    </section>
  );
}

// ============================================
// MISSION & VISION COMPONENT
// ============================================
const missionPoints = [
  "To offer a seamless eCommerce experience that bridges the gap between producers and consumers across wholesale, retail, and export markets.",
  "To ensure the consistent supply of premium white shell eggs, fresh meats (chicken, fish, and mutton), and nutrient-rich millets through responsible sourcing and transparent practices.",
  "To promote sustainable agriculture by supporting local farmers and adhering to eco-conscious standards in every step of our supply chain.",
  "To build long-term partnerships through reliability, integrity, and customer-centric service across domestic and international markets.",
  "To leverage technology and innovation for better logistics, product traceability, and enhanced customer satisfaction.",
];

function MissionVision() {
  return (
    <section className="bg-gradient-to-b from-[#eaf6ea] to-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8">
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

// ============================================
// CERTIFICATIONS COMPONENT
// ============================================
import msmeLogo from "../assets/msme.png";
import dgftLogo from "../assets/dgft.png";
import gstLogo from "../assets/gst.png";
import fssaiLogo from "../assets/fssai.png";
import apedaLogo from "../assets/apeda.png";

import msmePdf from "../assets/msme.pdf";
import dgftPdf from "../assets/dgft.pdf";
import gstPdf from "../assets/gst.pdf";
import fssaiPdf from "../assets/fssai.pdf";
import apedaPdf from "../assets/fssai.pdf";

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
    <section className="bg-[#eef0ef] py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <Reveal>
          <h2 className="font-heading font-bold text-[#1f4d24] text-2xl md:text-3xl mb-10 text-center">
            Our Certifications
          </h2>
        </Reveal>
        <div className="space-y-5">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 100}>
              <div className="flex items-center gap-5 bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] border-l-4 border-[#3a7d44] px-6 py-5">
                <img
                  src={cert.logo}
                  alt={`${cert.title} logo`}
                  className="w-14 h-14 object-contain flex-shrink-0"
                />
                <p className="flex-1 font-medium text-[#222] text-[15.5px] md:text-base">
                  {cert.title}
                </p>
                <a
                  href={cert.pdf}
                  download={cert.fileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 bg-[#1e73f0] hover:bg-[#1a63d1] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors duration-200 whitespace-nowrap"
                >
                  Download PDF
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// WHO WE ARE COMPONENT
// ============================================
import whoWeAreImg from "../assets/category3.jpg";

function WhoWeAre() {
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

// ============================================
// CORE VALUES COMPONENT
// ============================================
import coreValuesImg from "../assets/catbg.png";

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