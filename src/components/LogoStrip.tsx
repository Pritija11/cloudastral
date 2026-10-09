import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Button } from "./Button";

const platforms = [
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "Kubernetes",
  "Terraform",
  "Docker",
];

export function LogoStrip() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-20">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--fg)] md:text-3xl">
            Built on the platforms you already trust
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[var(--fg-muted)]">
            We don&apos;t default to one provider. We pick the platform — or
            combination of platforms — that fits your workload, and operate
            comfortably across all of them.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {platforms.map((p) => (
              <span
                key={p}
                className="font-mono text-sm text-[var(--fg-muted)]"
              >
                {p}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <Button href="/services" variant="ghost" className="mt-10">
            See how we work with each
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
