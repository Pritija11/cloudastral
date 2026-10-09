import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { IconPin, IconMail, IconPhone } from "@/components/icons";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Cloudastral about cloud architecture, migration, DevOps, security, or managed cloud operations.",
};

const nextSteps = [
  {
    index: "01",
    title: "You tell us what's going on",
    description:
      "A short message is enough — what you're running, what's breaking, or what you're trying to build. No intake form, no sales deck required.",
  },
  {
    index: "02",
    title: "We review and ask questions",
    description:
      "An engineer — not a salesperson — reads what you sent and follows up with a few specific questions so we understand the actual shape of the problem.",
  },
  {
    index: "03",
    title: "We propose a starting point",
    description:
      "You get a clear recommendation for where to start, what it would involve, and roughly what it would cost — before anything is scheduled or signed.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-[var(--fg)] md:text-5xl">
              Let&apos;s talk about your infrastructure.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Tell us what you&apos;re running, what&apos;s not working, or
              what you&apos;re trying to build. Whether it&apos;s a single
              architecture review or a full migration, the first
              conversation costs you nothing but a few minutes — and
              we&apos;d rather tell you early if we&apos;re not the right
              fit than take on work we can&apos;t do well.
            </p>
            <p className="mt-4 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              We usually reply within 1–2 business days, and every message
              is read by an engineer, not routed through a queue.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                  <IconPin className="h-6 w-6 flex-none text-[var(--primary)]" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                      Office
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                      Putalisadak, Kathmandu 44600
                      <br />
                      Nepal
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <IconMail className="h-6 w-6 flex-none text-[var(--primary)]" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                      Email
                    </p>
                    <a
                      href="mailto:hello@cloudastral.ltd"
                      className="mt-2 inline-block text-sm text-[var(--fg)] hover:text-[var(--primary)]"
                    >
                      hello@cloudastral.ltd
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <IconPhone className="h-6 w-6 flex-none text-[var(--primary)]" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                      Phone
                    </p>
                    <a
                      href="tel:+9779801234567"
                      className="mt-2 inline-block text-sm text-[var(--fg)] hover:text-[var(--primary)]"
                    >
                      +977 980-1234567
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-7 md:p-9">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>What happens next</Eyebrow>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-[var(--fg)]">
              From first message to a working plan
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {nextSteps.map((step, i) => (
              <Reveal key={step.index} delay={i * 80}>
                <div className="border-t-2 border-[var(--primary)] pt-5">
                  <span className="font-mono text-sm text-[var(--primary)]">
                    {step.index}
                  </span>
                  <h3 className="mt-3 text-base font-medium text-[var(--fg)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
