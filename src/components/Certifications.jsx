import Reveal from "../common/Reveal";

// --- Logos: drop the real files in src/assets/certs/ ---
import msmeLogo from "../assets/msme.png";
import dgftLogo from "../assets/dgft.png";
import gstLogo from "../assets/gst.png";
import fssaiLogo from "../assets/fssai.png";
import apedaLogo from "../assets/apeda.png";

// --- PDFs: drop the real files in src/assets/ ---
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

export default function Certifications() {
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