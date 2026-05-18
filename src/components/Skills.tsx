import { SkillBar } from "@/components/SkillBar";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const skillGroups = [
  {
    title: "AI / Machine Learning",
    items: [
      ["Scikit-learn", 95],
      ["Tensorflow", 90],
      ["Numpy and Pandas", 95],
      ["PyTorch", 80],
      ["MLOps", 60],
    ],
  },
  {
    title: "Web Development",
    items: [
      ["TypeScript", 93],
      ["React / Next.js", 92],
      ["Node.js", 88],
      ["Python/Django", 80],
      ["TailwindCSS", 90],
    ],
  },
  {
    title: "Infrastructure",
    items: [
      ["FastAPI", 98],
      ["PostgreSQL", 85],
      ["MongoDB", 83],
      ["Docker", 75],
      ["GitHub Actions", 60],

    ],
  },
] as const;

/* Column stagger: 0ms / 150ms / 300ms */
const COL_STAGGER = [0, 150, 300];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-32 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionLabel>// skills</SectionLabel>
          <h2 className="font-mono font-bold text-4xl md:text-5xl mb-3">Tech Stack</h2>
          <p className="text-muted-foreground text-lg mb-16">
            The tools and technologies I work with daily.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12">
          {skillGroups.map((g, colIdx) => (
            <Reveal key={g.title} className={`transition-delay-[${COL_STAGGER[colIdx]}ms]`}>
              <h3 className="font-mono text-sm text-accent uppercase tracking-wider mb-6">
                {g.title}
              </h3>
              <div className="space-y-5">
                {g.items.map(([name, val], barIdx) => (
                  <SkillBar
                    key={name as string}
                    name={name as string}
                    value={val as number}
                    /* bar stagger: col offset + per-bar offset */
                    delay={COL_STAGGER[colIdx] + barIdx * 100}
                  />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
