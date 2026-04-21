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
      <div className="about-content reveal">
        <div className="grid">
          <div className="about-text">
            Recent Informatics graduate (GPA: 3.77) and published researcher
            with production experience building AI-powered safety monitoring
            systems and enterprise web applications. My work spans from
            architecting secure backend microservices with Node.js, Express, and
            PostgreSQL to engineering computer vision systems with YOLOv11
            achieving 94% accuracy across live CCTV feeds.
          </div>
          <div className="about-stats">
            {stats.map(({ number, label }) => (
              <div className="stat-block" key={label}>
                <div className="stat-number">
                  {number === "infinity" ? (
                    <Infinity className="md:size-14" />
                  ) : (
                    number
                  )}
                </div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
