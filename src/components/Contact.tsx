import { MoveUpRight } from "lucide-react";

const links = [
  {
    href: "https://github.com/notindream",
    label: "GitHub",
    value: "@NotInDream",
    external: true,
  },
  {
    href: "mailto:radenananta.ram@gmail.com",
    label: "Email",
    value: "Get in touch",
    external: false,
  },
  {
    href: "https://linkedin.com/in/raden-ananta-mahardika",
    label: "LinkedIn",
    value: "Connect with me",
    external: true,
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-30">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-6 gap-y-12 px-12 max-tab:gap-x-4 max-tab:px-6">
        <h2 className="reveal col-start-1 col-end-8 font-bebas uppercase leading-[0.95] text-[clamp(3rem,7vw,7rem)] max-tab:col-span-full">
          Let's Work <br />
          <span className="text-red">Together</span>
        </h2>
        <div className="reveal col-start-9 col-end-13 flex flex-col gap-6 pt-4 max-tab:col-span-full">
          {links.map(({ href, label, value, external }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center justify-between border-b border-grey-light pb-4 text-black no-underline transition-all duration-300 hover:border-red hover:pl-4"
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}>
              <div>
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-grey-dark">
                  {label}
                </div>
                <div className="text-[0.9rem] font-medium">{value}</div>
              </div>
              <span className="font-bebas text-[1.2rem] text-red transition-transform duration-300 group-hover:rotate-45">
                <MoveUpRight />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
