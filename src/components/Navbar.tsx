const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 px-16 py-6 max-md:px-8 max-md:py-4 flex justify-between items-center bg-black backdrop-blur-md text-white">
      <div className="font-bebas text-2xl tracking-wide uppercase">
        Rad's Portofolio
      </div>
      <ul className="flex gap-10 max-md:gap-6 list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              onClick={(e) => handleClick(e, href)}
              className="font-mono text-[0.7rem] max-sm:text-[0.6rem] uppercase tracking-widest text-inherit no-underline relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-px after:bg-current after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
