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
      <div className="skills-grid reveal">
        <div className="grid">
          {categories.map(({ label, title, lines }) => (
            <div className="skill-category" key={label}>
              <div className="skill-cat-label">{label}</div>
              <div className="skill-cat-title">{title}</div>
              <div className="skill-list">
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
