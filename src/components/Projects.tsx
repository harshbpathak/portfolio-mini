import type React from "react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const projects = [
  {
    name: "PRISM.ai",
    desc: "PRISM.ai is a next-generation supply chain intelligence platform that combines AI agents, digital twin visualization, ML-powered risk prediction, and multi-agent orchestration to help businesses proactively identify, assess, and mitigate supply chain risks.",
    tags: ["Next.js", "Agentic-AI", "Gemini API", "Supabase", "Tailwind CSS", "Recharts"],
  },
  {
    name: "NetSecure",
    desc: "NetSecure is an Android network security and privacy monitoring app that captures real-time traffic via a local VPN, classifies it by app and category, performs Deep Packet Inspection with nDPI, runs a local Intrusion Detection System, and submits suspicious observables to an IntelOwl threat intelligence backend — all without root access.",
    tags: ["Android", "C", "Kotlin", "NDPI", "Jetpack Compose"],
  },
  {
    name: "Fake News Classifier",
    desc: "Built an AI misinformation detector using a fine-tuned DistilBERT model on 44K+ articles, that classifies news articles as real or fake using a Kaggle dataset.",
    tags: ["Python", "Machine Learning", "NLP", "Kaggle", "DistilBERT"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-32 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionLabel>// projects</SectionLabel>
          <h2 className="font-mono font-bold text-4xl md:text-5xl mb-3">What I've Built</h2>
          <p className="text-muted-foreground text-lg mb-16">
            From full-stack applications to AI-powered tools, each project reflects my commitment
            to quality and innovation.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} style={{ transitionDelay: `${i * 100}ms` } as React.CSSProperties}>
              <div className="project-card group h-full p-6 rounded-lg bg-card border border-border">
                <h3 className="font-mono font-bold text-xl text-foreground mb-3">{p.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="tag-pill font-mono text-xs px-2 py-1 rounded bg-muted text-accent/90 transition-all duration-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
