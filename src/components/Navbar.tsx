import { useEffect, useRef, useState } from "react";
import { GITHUB, TWITTER } from "@/lib/constants";
import { GithubIcon, TwitterIcon } from "@/components/Icons";

const NAV_SECTIONS = ["about", "skills", "projects", "experience", "contact"];

const links = [
  { href: "#about",      label: "About" },
  { href: "#skills",     label: "Skills" },
  { href: "#projects",   label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("");
  const navRef = useRef<HTMLElement>(null);

  /* blur-on-scroll + active section via IntersectionObserver */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });

    const observers: IntersectionObserver[] = [];
    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
        { threshold: 0.4 },
      );
      io.observe(el);
      observers.push(io);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`navbar-animate fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/90"
          : "backdrop-blur-md  bg-background/70"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-foreground hover:text-accent transition-colors duration-200">
          <span className="text-accent">$</span> harshbpathak
        </a>

        <div className="hidden md:flex items-center gap-7 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link text-muted-foreground hover:text-accent pb-0.5 ${
                active === l.href ? "active" : ""
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* mobile socials */}
        <div className="flex md:hidden items-center gap-4 text-muted-foreground">
          <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><GithubIcon /></a>
          <a href={TWITTER} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><TwitterIcon /></a>
        </div>
      </div>
    </nav>
  );
}
