import SectionHeader from "./SectionHeader";

function Experience() {
  return (
    <section id="experience" className="experience">
      {/* Experience */}
      <SectionHeader
        number="04"
        title="Experience"
        description="Professional roles where I've applied engineering and AI skills to build production systems."
      />
      <div className="grid reveal">
        <div className="exp-item" style={{ gridColumn: "1 / 13" }}>
          <div className="grid">
            <div className="exp-period">Dec 2025 — Present</div>
            <div className="exp-role">
              Senior Programmer Analyst
              <span className="exp-company">Activate Interactive Pte Ltd — Singapore</span>
            </div>
            <div className="exp-details">
              Built and maintained microservices handling authentication, app
              attestation, and encrypted API communication using Node.js,
              Express, TypeScript, and PostgreSQL. Implemented iOS App Attest
              and Android Play Integrity verification. Designed Redis-based
              caching for high-traffic endpoints and applied RSA and AES-GCM
              encryption for end-to-end secure request/response pipelines.
            </div>
          </div>
        </div>
        <div className="exp-item" style={{ gridColumn: "1 / 13" }}>
          <div className="grid">
            <div className="exp-period">Jul 2025 — Aug 2025</div>
            <div className="exp-role">
              Full Stack Web Developer
              <span className="exp-company">Medimas Hospital — Cirebon, Indonesia</span>
            </div>
            <div className="exp-details">
              Migrated hospital website from PHP 5 to Laravel 12 with React,
              redesigning the UI for a modern, patient-friendly experience.
              Implemented client-side search filtering with debounced input and
              dynamic React components. Optimized performance via server-side
              rendering and image compression, reducing page load time from 8s
              to under 2s.
            </div>
          </div>
        </div>
        <div className="exp-item" style={{ gridColumn: "1 / 13" }}>
          <div className="grid">
            <div className="exp-period">Feb 2025 — Jun 2025</div>
            <div className="exp-role">
              AI Engineer & Full Stack Developer
              <span className="exp-company">PT Pertamina EP Zone 7 — Cirebon, Indonesia</span>
            </div>
            <div className="exp-details">
              Developed an intranet Flask dashboard for live AI monitoring and
              violation management with automated real-time Telegram alerts and
              Excel exports. Engineered an AI-based PPE detection system using
              YOLOv11 across 5 CCTV RTSP feeds, achieving 94% accuracy on a
              custom labelled dataset of 10,000+ images. Built a TCP-based
              server communication system for secure internal file transmission.
            </div>
          </div>
        </div>
        <div className="exp-item" style={{ gridColumn: "1 / 13" }}>
          <div className="grid">
            <div className="exp-period">Sep 2024 — Dec 2024</div>
            <div className="exp-role">
              Mobile Developer
              <span className="exp-company">CV Chembro Indonesia — Bogor, Indonesia</span>
            </div>
            <div className="exp-details">
              Developed an internal office management mobile app using Flutter
              for project lists, attendance, and finance vouchers serving 50+
              concurrent users. Implemented role-based access control with
              Supabase row-level security. Integrated QR code-based geofenced
              attendance system, replacing manual sign-in sheets.
            </div>
          </div>
        </div>
        <div className="exp-item" style={{ gridColumn: "1 / 13" }}>
          <div className="grid">
            <div className="exp-period">Jul 2024 — Aug 2024</div>
            <div className="exp-role">
              Intern — Web Scraping & Automation
              <span className="exp-company">PLN UP3 — Bandung, Indonesia</span>
            </div>
            <div className="exp-details">
              Automated extraction of operational data from the APKT intranet
              using Python Selenium, replacing a manual process and delivering
              daily insights via a custom Telegram bot.
            </div>
          </div>
        </div>
      </div>

      {/* Research */}
      <div style={{ paddingTop: "calc(var(--unit) * 10)" }}>
        <SectionHeader
          number="05"
          title="Research"
          description="Academic contributions at the intersection of technology and applied research."
        />
        <div
          className="grid reveal"
          style={{ paddingTop: "calc(var(--unit) * 5)" }}>
          <div className="research-card">
            <div className="research-title">
              Implementation of Firefly Algorithm-Support Vector Machine in
              Classifying Clinical Trial Toxicity
            </div>
            <div className="research-meta">
              <span className="mono" style={{ color: "var(--red)" }}>
                Telkom University
              </span>
              <br />
              <br />
              Published peer-reviewed research at the International Conference
              on Information and Communication Technology (ICoICT 2025),
              contributing to the academic discourse in informatics engineering.
            </div>
            <div className="research-paper">
              <a
                href="https://ieeexplore.ieee.org/document/11193023"
                target="_blank"
                rel="noopener noreferrer"
                className="research-paper-link mono">
                View Publication →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div
        style={{ padding: "calc(var(--unit) * 10) 0 calc(var(--unit) * 8)" }}>
        <div className="grid reveal">
          <div className="exp-item" style={{ gridColumn: "1 / 13" }}>
            <div className="grid">
              <div className="exp-period">Oct 2021 — Feb 2025</div>
              <div className="exp-role">
                Bachelor of Informatics Engineering
                <span className="exp-company">Telkom University — Bandung, Indonesia</span>
              </div>
              <div className="exp-details">
                GPA: 3.77/4.00. Thesis: Developed a Firefly Algorithm–SVM
                classifier for clinical toxicity prediction, improving
                classification accuracy over baseline SVM. Published at ICoICT
                2025.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
