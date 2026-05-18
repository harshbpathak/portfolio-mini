import { GithubIcon, TwitterIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { GITHUB, TWITTER } from "@/lib/constants";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-32 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <SectionLabel>// contact</SectionLabel>
          <h2 className="font-mono font-bold text-4xl md:text-5xl mb-3">Let's Connect</h2>
          <p className="text-muted-foreground text-lg mb-12">
            I'm always open to discussing new opportunities.
          </p>
          <a
            href="mailto:harshbhushan001@gmail.com"
            className="contact-email font-mono text-2xl md:text-3xl text-accent break-all"
          >
            harshbhushan001@gmail.com
          </a>
          <div className="flex items-center justify-center gap-5 mt-10 text-muted-foreground">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-md border border-border hover:text-accent hover:border-accent/50 hover:scale-110 transition-all duration-200"
            >
              <GithubIcon />
            </a>
            <a
              href={TWITTER}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-md border border-border hover:text-accent hover:border-accent/50 hover:scale-110 transition-all duration-200"
            >
              <TwitterIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
