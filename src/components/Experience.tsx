import { useEffect, useRef } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const experience = [
  {
    period: "2025 — Present",
    company: "Google Developer Groups on Campus- NIT Hamirpur",
    role: "Executive Member",
    desc: "Volunteered in pre-NIMBUS event \u201cAmong Us\u201d, Assisted in multiple GDG workshops throughout the year, Organised a Capture the Flag (CTF) with over 200+ participants.",
    tags: [] as string[],
  },
  {
    period: "2025-present",
    company: "The Honeynet Project",
    role: "Open Source Contributer",
    desc: "Contributing to the IntelOwl open source project.",
    tags: ["Django", "CI/CD", "Python"],
  },
  // {
  //   period: "future",
  //   company: "Soon to be!!",
  //   role: "Full-Stack ML Engineer",
  //   desc: "Built data labeling pipelines and quality assurance systems for computer vision datasets. Shipped annotation tools used by 5k+ labelers.",
  //   tags: ["React", "Python", "FastAPI", "PostgreSQL"],
  // },
];

export function Experience() {
  const lineRef  = useRef<HTMLDivElement>(null);
  const entryRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Timeline line draw */
  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Entry slide-in with stagger */
  useEffect(() => {
    entryRefs.current.forEach((el, i) => {
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add("in"), i * 200);
            io.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      io.observe(el);
    });
  }, []);

  return (
    <section id="experience" className="px-6 py-32 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <SectionLabel>// experience</SectionLabel>
          <h2 className="font-mono font-bold text-4xl md:text-5xl mb-3">Where I've Worked</h2>
          {/* <p className="text-muted-foreground text-lg mb-16">
            From open-source contributions to scaling AI at top companies.
          </p> */}
        </Reveal>

        <div className="relative pl-8 md:pl-10">
          {/* Animated vertical line */}
          <div
            ref={lineRef}
            className="timeline-line absolute left-0 top-0 bottom-0 w-px bg-border"
          />

          {experience.map((e, i) => (
            <div
              key={e.company}
              ref={(el) => { entryRefs.current[i] = el; }}
              className="exp-entry relative pb-14 last:pb-0"
            >
              <span className="absolute -left-[37px] md:-left-[45px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background" />
              <div className="font-mono text-xs text-muted-foreground mb-2">{e.period}</div>
              <h3 className="font-mono font-bold text-2xl text-foreground">{e.company}</h3>
              <div className="font-mono text-sm text-accent mt-1 mb-4">{e.role}</div>
              <p className="text-foreground/80 leading-relaxed mb-4 max-w-2xl">{e.desc}</p>
              <div className="flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-1 rounded bg-muted text-muted-foreground
                               hover:bg-muted/80 transition-colors duration-150"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
