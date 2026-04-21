import { MoveUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    index: "01",
    name: "AI PPE Detection System",
    desc: "AI-based safety monitoring using YOLOv11 across 5 CCTV RTSP feeds with 94% accuracy on 10,000+ custom labelled images. Includes a Flask dashboard with real-time Telegram alerts.",
    tags: [{ label: "YOLOv11" }, { label: "Flask" }, { label: "Python" }],
  },
  {
    index: "02",
    name: "Hospital Website Migration",
    desc: "Migrated Medimas Hospital website from PHP 5 to Laravel 12 with React. Implemented debounced search filtering and optimized page load from 8s to under 2s.",
    tags: [{ label: "Laravel" }, { label: "React" }],
    link: "https://www.rsumedimas.com/",
  },
  {
    index: "03",
    name: "Office Management App",
    desc: "Flutter mobile app for project lists, attendance, and finance vouchers serving 50+ users. Features QR-based geofenced attendance and Supabase row-level security.",
    tags: [{ label: "Flutter" }, { label: "Supabase" }, { label: "Mobile" }],
  },
  {
    index: "04",
    name: "SIMASKULI LMS",
    desc: "Full-featured learning management system built with Laravel (web) and Flutter (mobile) with 15+ API endpoints for course management, grading, and enrollment.",
    tags: [{ label: "Laravel" }, { label: "Flutter" }, { label: "REST API" }],
    link: "https://github.com/FakhriF/simaskuli-app",
  },
];

function Projects() {
  return (
    <section id="projects">
      <SectionHeader
        number="03"
        title="Selected Work"
        description="A curated selection of projects spanning backend services, machine learning applications, and fullstack systems."
      />
      <div className="projects reveal">
        {projects.map((project) => {
          const hasLink = "link" in project && project.link;
          const Wrapper = hasLink ? "a" : "div";
          const wrapperProps = hasLink
            ? {
                href: project.link,
                target: "_blank" as const,
                rel: "noopener noreferrer",
                className: "project-item project-item--linked",
              }
            : { className: "project-item" };

          return (
            <Wrapper key={project.index} {...wrapperProps}>
              <div className="grid group">
                <span className="project-index">{project.index}</span>
                <div className="project-name">
                  {project.name}
                  {hasLink && (
                    <span className="project-arrow">
                      <MoveUpRight />
                    </span>
                  )}
                </div>
                <div className="project-desc">{project.desc}</div>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span
                      className={`tag${"red" in tag && tag.red ? " tag--red" : ""}`}
                      key={tag.label}>
                      {tag.label}
                    </span>
                  ))}
                  {!hasLink && (
                    <span className="tag project-internal mono">Internal</span>
                  )}
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
