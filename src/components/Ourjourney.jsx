import Reveal from "../common/Reveal";

// Replace with your actual illustration in src/assets/about/
import journeyImg from "../assets/catbg.png";

export default function OurJourney() {
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