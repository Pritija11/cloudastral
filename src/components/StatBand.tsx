import { Reveal } from "./Reveal";

const stats = [
  { value: "3", label: "Cloud platforms we operate across — AWS, Azure, and Google Cloud." },
  { value: "100%", label: "Of the infrastructure we build is defined as code, not clicked together." },
  { value: "24/7", label: "Monitoring coverage available under managed operations." },
  { value: "1–2 days", label: "Typical time to hear back from an engineer, not a queue." },
];

export function StatBand() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-[var(--primary)] px-6 py-16 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-[480px] lg:ml-auto lg:mr-0 lg:pr-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">
              Built to run what comes next
            </p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
              We&apos;re a new company, but the way we build infrastructure
              isn&apos;t improvised.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/80">
              Every engagement follows the same disciplined defaults —
              infrastructure as code, documented decisions, and direct
              access to the engineers doing the work.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="bg-[var(--primary-deep)] px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-[480px] grid-cols-2 gap-8 lg:ml-0 lg:mr-auto lg:pl-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <p className="text-3xl font-semibold tracking-tight text-white">
                {s.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
