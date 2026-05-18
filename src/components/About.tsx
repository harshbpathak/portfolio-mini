import { Terminal } from "@/components/Terminal";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

// const stats = [
//   ["N/A", "Projects Shipped"],
//   ["N/A", "Years Experience"],
//   ["N/A", "Models Trained"],
//   ["N/A", "Papers Read"],
// ] as const;

export function About() {
  return (
    <section id="about" className="px-6 py-32 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionLabel>// about</SectionLabel>
          <h2 className="font-mono font-bold text-4xl md:text-5xl mb-3">
            Building products that matter
          </h2>
          <p className="italic text-muted-foreground text-lg mb-16">
            From idea to production — shipping systems that solve real problems.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <Terminal />
          </Reveal>
          <Reveal>
            <div className="space-y-5 text-foreground/85 leading-relaxed">
              <p>
                I'm Harsh Bhushan Pathak, a sophomore at NIT Hamirpur with a strong grasp in
                Development and a keen interest in Machine Learning and Cybersecurity.
              </p>
              <p>
                My work spans full-stack development, machine learning, and cybersecurity. I believe
                the best solutions aren't the most complex — they're the ones that are lightweight,
                reliable, and built to solve real problems at scale.
              </p>
              <p>
                When I'm not shipping full-stack products or training models, I contribute to
                open-source cybersecurity — IntelOwl being my current rabbit hole. And when the
                terminal finally closes, it's lights off, thriller on.
              </p>
            </div>
          </Reveal>
        </div>

        {/* <Reveal className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(([n, l]) => (
              <div key={l}>
                <div className="font-mono text-4xl md:text-5xl text-accent">{n}</div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-2">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </Reveal> */}
      </div>
    </section>
  );
}
