import { useEffect, useRef } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const awards = [
  {
    year: "2026",
    title: "First Place - Hacksecure 2026",
    organization:" Ministry of Electronics and Information Technology (MeitY), Government of India",
    desc: "Led a Hackathon team to build an innovative cybersecurity solution for making a Lightweight Network Flow Analyser. Awarded first place out of 50+ participating teams.",
  },
  {
    year: "2026",
    title: "Winner of Google Deepmind Gemini Track -Electrothon 8.0",
    organization: "The Google Deepmind and SPEC-NITH",
    desc: "Recognized for the best use of Gemini API by The Google Deepmind Team in a National level Hackathon- Electrothon 8.0",
  },
  {
    year: "2025",
    title: "Second Prize in CyberSeige",
    organization: "ISTE-NIT hamirpur",
    desc: "Awarded 2nd Prize in an automation script competition",
  }
];

export function Awards() {
  const lineRef = useRef<HTMLDivElement>(null);
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
    <section id="awards" className="px-6 py-32 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <SectionLabel>// awards</SectionLabel>
          <h2 className="font-mono font-bold text-4xl md:text-5xl mb-12">Honors & Awards</h2>
        </Reveal>

        <div className="relative pl-8 md:pl-10">
          {/* Animated vertical line */}
          <div
            ref={lineRef}
            className="timeline-line absolute left-0 top-0 bottom-0 w-px bg-border"
          />

          {awards.map((award, i) => (
            <div
              key={award.title}
              ref={(el) => { entryRefs.current[i] = el; }}
              className="exp-entry relative pb-14 last:pb-0"
            >
              <span className="absolute -left-[37px] md:-left-[45px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background" />
              <div className="font-mono text-xs text-muted-foreground mb-2">{award.year}</div>
              <h3 className="font-mono font-bold text-2xl text-foreground">{award.title}</h3>
              <div className="font-mono text-sm text-accent mt-1 mb-4">{award.organization}</div>
              <p className="text-foreground/80 leading-relaxed max-w-2xl">{award.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

