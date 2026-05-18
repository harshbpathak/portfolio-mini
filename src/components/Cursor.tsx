import { useEffect, useRef } from "react";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const onEnter = () => el.classList.add("expanded");
    const onLeave = () => el.classList.remove("expanded");

    window.addEventListener("mousemove", onMove, { passive: true });

    /* Expand on interactive elements */
    const targets = document.querySelectorAll("a, button, [role='button']");
    targets.forEach((t) => {
      t.addEventListener("mouseenter", onEnter);
      t.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", onEnter);
        t.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return <div id="custom-cursor" ref={cursorRef} aria-hidden="true" />;
}
