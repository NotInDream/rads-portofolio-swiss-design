import SectionHeader from "./SectionHeader";

function Education() {
  return (
    <section id="education" className="education">
      <SectionHeader
        number="05"
        title="Education"
        description="Academic background and peer-reviewed research at the intersection of technology and applied science."
      />

      {/* Degree */}
      <div className="experience-list reveal">
        <div className="exp-item">
          <div className="grid">
            <div className="exp-header">
              <div className="exp-role">Bachelor of Informatics Engineering</div>
              <div className="exp-company">
                Telkom University — Bandung, Indonesia
              </div>
              <div className="exp-period">Oct 2021 — Feb 2025</div>
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

      {/* Research / Publication */}
      <div className="grid reveal">
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
            Published peer-reviewed research at the International Conference on
            Information and Communication Technology (ICoICT 2025), contributing
            to the academic discourse in informatics engineering.
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
    </section>
  );
}

export default Education;
