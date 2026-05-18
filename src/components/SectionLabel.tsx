export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">
      {children}
    </div>
  );
}
