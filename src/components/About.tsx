import SectionHeader from "./SectionHeader";
import { Infinity } from "lucide-react";

const stats = [
  { number: "3+", label: "Years Building" },
  { number: "1", label: "Research Publication" },
  { number: "10+", label: "Projects Shipped" },
  { number: "infinity", label: "Curiosity Level" },
];

function About() {
  return (
    <section id="about">
      <SectionHeader
        number="01"
        title="About"
        description="A backend-focused fullstack developer with deep interest in artificial intelligence, machine learning, and building secure, scalable systems."
      />
      <div className="reveal py-16">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-6 gap-y-12 px-12 max-tab:gap-x-4 max-tab:px-6">
          <div className="col-start-1 col-end-7 text-[1.1rem] leading-[1.75] max-tab:col-span-full">
            Recent Informatics graduate (GPA: 3.77) and published researcher
            with production experience building AI-powered safety monitoring
            systems and enterprise web applications. My work spans from
            architecting secure backend microservices with Node.js, Express, and
            PostgreSQL to engineering computer vision systems with YOLOv11
            achieving 94% accuracy across live CCTV feeds.
          </div>
          <div className="col-start-8 col-end-13 grid grid-cols-2 gap-8 max-tab:col-span-full">
            {stats.map(({ number, label }) => (
              <div className="border-l-2 border-red pl-4" key={label}>
                <div className="font-bebas text-[3.5rem] leading-none text-black">
                  {number === "infinity" ? (
                    <Infinity className="md:size-14" />
                  ) : (
                    number
                  )}
                </div>
                <div className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-grey-dark">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
