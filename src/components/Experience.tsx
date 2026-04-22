import SectionHeader from "./SectionHeader";

const expItem = "border-b border-grey-light py-12 first:border-t first:border-grey-light";
const expGrid = "mx-auto grid max-w-[1440px] grid-cols-12 items-start gap-6 px-12 max-tab:gap-4 max-tab:px-6";
const expHeader = "col-start-1 col-end-7 flex flex-col max-tab:col-span-full";
const expDetails = "col-start-8 col-end-13 text-[0.85rem] leading-[1.7] text-grey max-tab:col-span-full max-tab:mt-4";
const expRole = "font-bebas text-[2rem] uppercase leading-[1.1]";
const expCompany = "mt-1 font-bebas text-[1.2rem] uppercase leading-[1.1] text-red";
const expPeriod = "mt-1 font-mono text-[0.7rem] uppercase tracking-[0.06em] text-grey";

function Experience() {
  return (
    <section id="experience" className="bg-white py-16 text-black">
      <SectionHeader
        number="04"
        title="Experience"
        description="Professional roles where I've applied engineering and AI skills to build production systems."
        muted
      />
      <div className="reveal py-16">
        <div className={expItem}>
          <div className={expGrid}>
            <div className={expHeader}>
              <div className={expRole}>Senior Programmer Analyst</div>
              <div className={expCompany}>
                Activate Interactive Pte Ltd — Singapore
              </div>
              <div className={expPeriod}>Dec 2025 — Present</div>
            </div>
            <div className={expDetails}>
              Built and maintained microservices handling authentication, app
              attestation, and encrypted API communication using Node.js,
              Express, TypeScript, and PostgreSQL. Implemented iOS App Attest
              and Android Play Integrity verification. Designed Redis-based
              caching for high-traffic endpoints and applied RSA and AES-GCM
              encryption for end-to-end secure request/response pipelines.
            </div>
          </div>
        </div>
        <div className={expItem}>
          <div className={expGrid}>
            <div className={expHeader}>
              <div className={expRole}>Full Stack Web Developer</div>
              <div className={expCompany}>
                Medimas Hospital — Cirebon, Indonesia
              </div>
              <div className={expPeriod}>Jul 2025 — Aug 2025</div>
            </div>
            <div className={expDetails}>
              Migrated hospital website from PHP 5 to Laravel 12 with React,
              redesigning the UI for a modern, patient-friendly experience.
              Implemented client-side search filtering with debounced input and
              dynamic React components. Optimized performance via server-side
              rendering and image compression, reducing page load time from 8s
              to under 2s.
            </div>
          </div>
        </div>
        <div className={expItem}>
          <div className={expGrid}>
            <div className={expHeader}>
              <div className={expRole}>AI Engineer & Full Stack Developer</div>
              <div className={expCompany}>
                PT Pertamina EP Zone 7 — Cirebon, Indonesia
              </div>
              <div className={expPeriod}>Feb 2025 — Jun 2025</div>
            </div>
            <div className={expDetails}>
              Developed an intranet Flask dashboard for live AI monitoring and
              violation management with automated real-time Telegram alerts and
              Excel exports. Engineered an AI-based PPE detection system using
              YOLOv11 across 5 CCTV RTSP feeds, achieving 94% accuracy on a
              custom labelled dataset of 10,000+ images. Built a TCP-based
              server communication system for secure internal file transmission.
            </div>
          </div>
        </div>
        <div className={expItem}>
          <div className={expGrid}>
            <div className={expHeader}>
              <div className={expRole}>Mobile Developer</div>
              <div className={expCompany}>
                CV Chembro Indonesia — Bogor, Indonesia
              </div>
              <div className={expPeriod}>Sep 2024 — Dec 2024</div>
            </div>
            <div className={expDetails}>
              Developed an internal office management mobile app using Flutter
              for project lists, attendance, and finance vouchers serving 50+
              concurrent users. Implemented role-based access control with
              Supabase row-level security. Integrated QR code-based geofenced
              attendance system, replacing manual sign-in sheets.
            </div>
          </div>
        </div>
        <div className={expItem}>
          <div className={expGrid}>
            <div className={expHeader}>
              <div className={expRole}>Intern — Web Scraping & Automation</div>
              <div className={expCompany}>PLN UP3 — Bandung, Indonesia</div>
              <div className={expPeriod}>Jul 2024 — Aug 2024</div>
            </div>
            <div className={expDetails}>
              Automated extraction of operational data from the APKT intranet
              using Python Selenium, replacing a manual process and delivering
              daily insights via a custom Telegram bot.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
