import SectionHeader from "./SectionHeader";

function Education() {
  return (
    <section id="education" className="bg-white py-16 text-black">
      <SectionHeader
        number="05"
        title="Education"
        description="Academic background and peer-reviewed research at the intersection of technology and applied science."
        muted
      />

      {/* Degree */}
      <div className="reveal pt-16 pb-12">
        <div className="border-t border-b border-grey-light py-12">
          <div className="mx-auto grid max-w-[1440px] grid-cols-12 items-start gap-6 px-12 max-tab:gap-4 max-tab:px-6">
            <div className="col-start-1 col-end-7 flex flex-col max-tab:col-span-full">
              <div className="font-bebas text-[2rem] uppercase leading-[1.1]">
                Bachelor of Informatics Engineering
              </div>
              <div className="mt-1 font-bebas text-[1.2rem] uppercase leading-[1.1] text-red">
                Telkom University — Bandung, Indonesia
              </div>
              <div className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.06em] text-grey">
                Oct 2021 — Feb 2025
              </div>
            </div>
            <div className="col-start-8 col-end-13 text-[0.85rem] leading-[1.7] text-grey max-tab:col-span-full max-tab:mt-4">
              GPA: 3.77/4.00. Thesis: Developed a Firefly Algorithm–SVM
              classifier for clinical toxicity prediction, improving
              classification accuracy over baseline SVM. Published at ICoICT
              2025.
            </div>
          </div>
        </div>
      </div>

      {/* Research / Publication */}
      <div className="reveal mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-12 pb-16 max-tab:gap-4 max-tab:px-6">
        <div
          className="
            relative col-span-full grid grid-cols-12 gap-6 border border-grey-light
            bg-white p-10 transition-colors duration-300 hover:border-red
            before:content-['PUBLICATION'] before:absolute before:-top-3 before:left-6
            before:bg-white before:px-2 before:font-mono before:text-[0.6rem]
            before:tracking-[0.1em] before:text-red
          ">
          <div className="col-start-1 col-end-8 font-bebas text-[1.8rem] uppercase leading-[1.15] max-tab:col-span-full">
            Implementation of Firefly Algorithm-Support Vector Machine in
            Classifying Clinical Trial Toxicity
          </div>
          <div className="col-start-9 col-end-13 text-[0.82rem] leading-[1.7] text-grey-dark max-tab:col-span-full">
            <span className="font-mono text-[0.75rem] uppercase tracking-[0.04em] text-red">
              Telkom University
            </span>
            <br />
            <br />
            Published peer-reviewed research at the International Conference on
            Information and Communication Technology (ICoICT 2025), contributing
            to the academic discourse in informatics engineering.
          </div>
          <div className="col-span-full mt-4 border-t border-grey-light pt-6">
            <a
              href="https://ieeexplore.ieee.org/document/11193023"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-red no-underline transition-colors duration-300 hover:text-black">
              View Publication →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
