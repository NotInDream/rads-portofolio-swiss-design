import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-between bg-black px-4 py-2 text-white">
        <div className="font-bebas text-2xl uppercase tracking-wide">
          Rad's Portofolio
        </div>

        {/* Inline links — hidden below 768px */}
        <ul className="flex list-none gap-10 max-md:hidden">
          {links.map(({ href, label }) => {
            const isActive = activeId === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className={`relative font-mono text-[0.7rem] uppercase tracking-widest no-underline transition-colors duration-200 after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-current after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full ${
                    isActive
                      ? "text-red after:w-full"
                      : "text-inherit after:w-0"
                  }`}>
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hamburger — shown only below 768px */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="hidden text-white max-md:block">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Side drawer — slides in from the right */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-40 flex w-72 flex-col bg-black text-white transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <ul className="mt-16 flex list-none flex-col divide-y divide-white/20">
          {links.map(({ href, label }) => {
            const isActive = activeId === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className={`block px-6 py-4 font-bebas text-2xl uppercase tracking-wide no-underline transition-colors duration-200 hover:text-red ${
                    isActive ? "text-red" : "text-inherit"
                  }`}>
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}

export default Navbar;
