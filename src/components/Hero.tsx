import { useEffect, useState } from "react";
import { GithubIcon, TwitterIcon } from "@/components/Icons";
import { GITHUB, TWITTER } from "@/lib/constants";

export function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-3xl mx-auto w-full">

        {/* Badge */}
        <div className="hero-badge flex justify-end mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border font-mono text-xs text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for new projects
          </span>
        </div>

        {/* Name */}
        <h1 className="hero-name font-mono font-bold text-5xl md:text-7xl text-foreground leading-tight">
          Harsh Bhushan Pathak
        </h1>

        {/* Handle */}
        <p className="hero-handle font-mono text-muted-foreground mt-3 text-lg">
          @harshbpathak
        </p>

        {/* Bio */}
        <p className="hero-body text-lg text-foreground/85 mt-8 leading-relaxed max-w-2xl">
          Sophomore at NIT Hamirpur, with a strong grasp in Development and a keen interest in
          Machine Learning and Cybersecurity.
        </p>

        {/* CTAs */}
        <div className="hero-cta flex flex-wrap gap-3 mt-10">
          <a
            href="#projects"
            className="font-mono text-sm px-5 py-2.5 border border-accent text-accent rounded-md
                       hover:bg-accent hover:text-accent-foreground hover:scale-[1.03]
                       transition-all duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="font-mono text-sm px-5 py-2.5 text-muted-foreground hover:text-foreground
                       hover:scale-[1.03] transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Socials */}
        <div className="hero-socials flex items-center gap-5 mt-8 text-muted-foreground">
          <a href={GITHUB} target="_blank" rel="noreferrer"
             className="hover:text-accent transition-colors duration-200">
            <GithubIcon />
          </a>
          <a href={TWITTER} target="_blank" rel="noreferrer"
             className="hover:text-accent transition-colors duration-200">
            <TwitterIcon />
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`hero-scroll mt-24 font-mono text-xs text-muted-foreground flex items-center gap-2 cursor-pointer transition-opacity duration-400 ${
            scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span>scroll</span>
          <span className="inline-block animate-bounce-slow">↓</span>
        </div>
      </div>
    </section>
  );
}
