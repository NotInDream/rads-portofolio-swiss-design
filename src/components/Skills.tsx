import { Fragment } from "react";
import SectionHeader from "./SectionHeader";

const categories = [
  {
    label: "Languages",
    title: "Frameworks",
    lines: [
      "Python · TypeScript · Dart",
      "Node.js · Express · Laravel",
      "React · Flutter · Flask · Tailwind CSS",
    ],
  },
  {
    label: "AI / ML",
    title: "Intelligence",
    lines: [
      "YOLOv11 · Computer Vision",
      "Firefly Algorithm · SVM",
      "scikit-learn",
    ],
  },
  {
    label: "Backend",
    title: "Data & APIs",
    lines: [
      "PostgreSQL · MySQL · Redis",
      "Supabase · Firebase",
      "REST API Design",
    ],
  },
  {
    label: "Tools",
    title: "Practices",
    lines: [
      "Git · Postman · Figma",
      "Responsive Design",
      "Agile Methodology",
    ],
  },
];

function Skills() {
  return (
    <section id="skills">
      <SectionHeader
        number="02"
        title="Expertise"
        description="Technical depth across backend systems, AI/ML pipelines, and fullstack development with a focus on security and performance."
      />
      <div className="reveal pt-16 pb-24">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-6 px-12 max-tab:gap-x-4 max-tab:px-6">
          {categories.map(({ label, title, lines }) => (
            <div
              className="
                group relative col-span-6 overflow-hidden border-t border-grey-light
                px-4 py-6 transition-colors duration-500 hover:text-white
                before:content-[''] before:absolute before:inset-0 before:z-0
                before:origin-left before:scale-x-0 before:bg-black
                before:transition-transform before:duration-500
                before:ease-[cubic-bezier(0.77,0,0.175,1)]
                hover:before:scale-x-100
                max-[550px]:col-span-full
              "
              key={label}>
              <div className="relative z-10 mb-4 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-red">
                {label}
              </div>
              <div className="relative z-10 mb-4 font-bebas text-[1.8rem] uppercase tracking-[0.02em]">
                {title}
              </div>
              <div className="relative z-10 text-[0.82rem] leading-[1.8] text-grey-dark group-hover:text-grey">
                {lines.map((line, i) => (
                  <Fragment key={i}>
                    {line}
                    {i < lines.length - 1 && <br />}
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
