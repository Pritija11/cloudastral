import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function LegalLayout({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-[var(--fg)] md:text-5xl">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-14 flex max-w-[680px] flex-col gap-10">
            {children}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-lg font-medium text-[var(--fg)]">{title}</h2>
      <div className="mt-3 flex flex-col gap-3 text-sm leading-7 text-[var(--fg-muted)]">
        {children}
      </div>
    </div>
  );
}
