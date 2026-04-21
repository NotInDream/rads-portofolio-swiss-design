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
    <section id="contact" className="contact">
      <div className="grid">
        <h2 className="contact-heading reveal">
          Let's Work <br />
          <span>Together</span>
        </h2>
        <div className="contact-links reveal">
          {links.map(({ href, label, value, external }) => (
            <a
              key={label}
              href={href}
              className="contact-link"
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}>
              <div>
                <div className="contact-link-label">{label}</div>
                <div className="contact-link-value">{value}</div>
              </div>
              <span className="contact-link-arrow">
                <MoveUpRight></MoveUpRight>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
