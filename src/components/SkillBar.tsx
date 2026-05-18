import { useEffect, useRef, useState } from "react";

export function SkillBar({ name, value, delay = 0 }: { name: string; value: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Count-up in sync with bar fill (900ms) */
  useEffect(() => {
    if (!active) return;
    const duration = 900;
    const start = performance.now() + delay;
    let raf: number;

    const tick = (now: number) => {
      const elapsed = Math.max(0, now - start);
      const progress = Math.min(elapsed / duration, 1);
      /* ease-out quad */
      const eased = 1 - (1 - progress) * (1 - progress);
      setDisplayed(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value, delay]);

  return (
    <div ref={ref}>
      <div className="flex justify-between items-baseline mb-2 font-mono text-sm">
        <span className="text-foreground">{name}</span>
        <span className="text-muted-foreground">{displayed}%</span>
      </div>
      <div className="h-[3px] bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full"
          style={{
            width: active ? `${value}%` : "0%",
            transition: `width 900ms ${delay}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          }}
        />
      </div>
    </div>
  );
}
