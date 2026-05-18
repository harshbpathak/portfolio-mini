import { useEffect, useRef, useState } from "react";

const lines = [
  { type: "cmd",   text: "$ whoami" },
  { type: "out",   text: "> harshbpathak" },
  { type: "blank", text: "" },
  { type: "cmd",   text: "$ cat skills.txt" },
  { type: "out",   text: "> react, nextjs, typescript, django" },
  { type: "out",   text: "> langchain, pytorch, docker" },
  { type: "blank", text: "" },
  { type: "cmd",   text: "$ echo $STATUS" },
  { type: "out",   text: "> building the future" },
];

export function Terminal() {
  const [visible, setVisible] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  /* Start typewriter only when Terminal enters viewport */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Typewriter tick */
  useEffect(() => {
    if (!started || visible >= lines.length) return;
    const delay = visible === 0 ? 300 : 400;
    const t = setTimeout(() => setVisible((v) => v + 1), delay);
    return () => clearTimeout(t);
  }, [started, visible]);

  return (
    <div ref={ref} className="rounded-lg border border-border bg-card overflow-hidden shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-black/40">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">~/harsh — zsh</span>
      </div>

      {/* Output */}
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[280px]">
        {lines.slice(0, visible).map((l, i) => (
          <div
            key={i}
            className={
              l.type === "cmd"
                ? "text-foreground"
                : l.type === "out"
                ? "text-accent"
                : ""
            }
          >
            {l.text || "\u00A0"}
          </div>
        ))}
        {/* Blinking cursor — shown while typing and after done */}
        {started && (
          <span className="inline-block w-[7px] h-[14px] bg-accent align-middle animate-blink" />
        )}
      </div>
    </div>
  );
}
