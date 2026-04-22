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

const itemBase =
  "group block border-b border-grey-light py-12 transition-all duration-300 first:border-t hover:pl-6 hover:bg-gradient-to-r hover:from-transparent hover:to-red/5";

const tagBase =
  "whitespace-nowrap border px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.06em]";

function Projects() {
  return (
    <section id="projects">
      <SectionHeader
        number="03"
        title="Selected Work"
        description="A curated selection of projects spanning backend services, machine learning applications, and fullstack systems."
      />
      <div className="reveal py-16">
        {projects.map((project) => {
          const hasLink = "link" in project && project.link;
          const Wrapper = hasLink ? "a" : "div";
          const wrapperProps = hasLink
            ? {
                href: project.link,
                target: "_blank" as const,
                rel: "noopener noreferrer",
                className: `${itemBase} cursor-pointer text-inherit no-underline`,
              }
            : { className: itemBase };

          return (
            <Wrapper key={project.index} {...wrapperProps}>
              <div className="mx-auto grid max-w-[1440px] grid-cols-12 items-center gap-6 px-12 max-tab:gap-4 max-tab:px-6">
                <span className="col-start-1 col-end-2 font-bebas text-[2rem] text-grey max-tab:col-end-3">
                  {project.index}
                </span>
                <div className="col-start-2 col-end-6 font-bebas text-[2rem] uppercase tracking-[0.01em] max-tab:col-start-3 max-tab:col-end-13">
                  {project.name}
                  {hasLink && (
                    <span className="ml-3 inline-block align-middle text-[1.2rem] text-grey transition-colors duration-300 group-hover:text-red [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:rotate-45">
                      <MoveUpRight />
                    </span>
                  )}
                </div>
                <div className="col-start-6 col-end-10 text-[0.85rem] leading-[1.6] text-grey-dark max-tab:col-start-3 max-tab:col-end-13">
                  {project.desc}
                </div>
                <div className="col-start-10 col-end-13 flex flex-wrap justify-end gap-2 max-tab:col-start-3 max-tab:col-end-13 max-tab:mt-2 max-tab:justify-start">
                  {project.tags.map((tag) => (
                    <span
                      className={`${tagBase} ${
                        "red" in tag && tag.red
                          ? "border-red bg-red text-white"
                          : "border-black"
                      }`}
                      key={tag.label}>
                      {tag.label}
                    </span>
                  ))}
                  {!hasLink && (
                    <span className={`${tagBase} border-grey-light text-grey`}>
                      Internal
                    </span>
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
