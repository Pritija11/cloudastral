import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { GradientCTA } from "@/components/GradientCTA";
import { IconAutomation, IconPlatform, IconShield } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Cloudastral is a cloud infrastructure and engineering startup based in Kathmandu, Nepal, building reliable cloud systems for global teams.",
};

const values = [
  {
    icon: IconAutomation,
    title: "Engineering-first",
    description:
      "No account managers between you and the people building your infrastructure. You talk to engineers, always — from the first scoping call to the last line of Terraform.",
  },
  {
    icon: IconShield,
    title: "Security by default",
    description:
      "Access control, monitoring, and hardening are part of the initial design, not a follow-up project you get sold six months later once something has already gone wrong.",
  },
  {
    icon: IconPlatform,
    title: "Built to scale",
    description:
      "We design for the traffic and team size you're growing into, not just the one you have today — so the architecture doesn't need a rewrite at your next stage of growth.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--border)] py-20 md:py-24">
        <div className="hero-glow" aria-hidden />
        <Container className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Eyebrow>About Cloudastral</Eyebrow>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight text-[var(--fg)] md:text-5xl">
              Cloud engineering, based in Nepal, built for global teams.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Cloudastral is a cloud infrastructure and engineering startup
              working out of Kathmandu. We help teams design, migrate, and
              operate the cloud systems their products actually run on —
              across AWS, Azure, and Google Cloud — with the same engineers
              staying involved from the first conversation through
              day-to-day operations.
            </p>
            <p className="mt-4 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              We&apos;re a small, focused team, and we keep it that way on
              purpose: it&apos;s the only way to guarantee that the people
              designing your infrastructure are the same people who answer
              when something needs attention at 3 a.m.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-lg border border-[var(--border)]">
              <Image
                src="/3.jpeg"
                alt="Two Cloudastral engineers reviewing infrastructure on screen together"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--fg)]">
              Why we started Cloudastral
            </h2>
            <p className="mt-5 text-sm leading-7 text-[var(--fg-muted)]">
              Most teams don&apos;t have an infrastructure problem — they have
              an infrastructure-ownership problem. Systems get built in a
              hurry during a launch crunch, nobody is given the time to
              document the architecture properly, and the cloud bill grows
              faster than anyone&apos;s actual understanding of what&apos;s
              running and why.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              A year or two later, that infrastructure is load-bearing for
              the whole business, and the one person who understood it has
              moved on. We started Cloudastral to be the team that owns that
              problem properly from the beginning: designing infrastructure
              deliberately, automating what should be automated, documenting
              decisions as we make them, and staying on to operate it —
              instead of handing over a diagram and disappearing.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              That approach shapes everything about how we work, from the
              first architecture review to the shape of a Terraform module —
              built to be read and changed by someone other than the person
              who wrote it.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--fg)]">
              Working from Kathmandu, built for anywhere
            </h2>
            <p className="mt-5 text-sm leading-7 text-[var(--fg-muted)]">
              Being based in Nepal doesn&apos;t narrow who we work with.
              Cloud infrastructure is remote-native by nature, and so are we
              — we work async-first, document decisions as we make them, and
              structure our hours to overlap with teams across time zones,
              rather than asking clients to work around ours.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              What it does give us is a straightforward, engineering-led way
              of working — direct communication, clear scopes, and no layers
              of account management between you and the infrastructure
              decisions that actually matter. When you have a question about
              why something was built a certain way, you ask the person who
              built it.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              It also means we think carefully about cost — not as a
              discount, but because efficient infrastructure and efficient
              engineering come from the same instinct: building only what
              the problem actually requires.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>How we think</Eyebrow>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-[var(--fg)]">
              Principles we build with
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
              These aren&apos;t slogans on a wall — they&apos;re the defaults
              we fall back on whenever a decision isn&apos;t obvious.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <v.icon className="h-6 w-6 text-[var(--primary)]" />
                <h3 className="mt-4 text-lg font-medium text-[var(--fg)]">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                  {v.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <GradientCTA
        title="Want to work with us?"
        description="Tell us about your infrastructure and what you're trying to get to."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </>
  );
}
