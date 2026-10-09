export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--primary)]">
      <span aria-hidden className="h-px w-5 bg-[var(--primary)]" />
      {children}
    </div>
  );
}
