import { GithubIcon, TwitterIcon } from "@/components/Icons";
import { GITHUB, TWITTER } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
        <span>© 2026 Harsh Bhushan Pathak. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            <GithubIcon className="w-4 h-4" />
          </a>
          <a href={TWITTER} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            <TwitterIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
