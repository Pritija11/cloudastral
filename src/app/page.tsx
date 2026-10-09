import Image from "next/image";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { FeatureBand } from "@/components/FeatureBand";
import { LogoStrip } from "@/components/LogoStrip";
import { StatBand } from "@/components/StatBand";
import { GradientCTA } from "@/components/GradientCTA";
import {
  IconArchitecture,
  IconAutomation,
  IconNetwork,
  IconPlatform,
  IconShield,
  IconOps,
  IconArrowRight,
} from "@/components/icons";

const services = [
  {
    icon: IconArchitecture,
    variant: "indigo" as const,
    title: "Cloud Architecture & Migration",
    description:
      "Infrastructure designed around how your product actually runs, and migrated with a tested plan instead of a leap of faith. We map dependencies, sequence the cutover in stages, and keep a rollback path ready at every point along the way.",
  },
  {
    icon: IconAutomation,
    variant: "blue" as const,
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines and infrastructure as code that make deployments routine instead of risky. Every environment is defined in version control, so changes are reviewed, repeatable, and never tied to one engineer's memory.",
  },
  {
    icon: IconShield,
    variant: "rose" as const,
    title: "Security & Compliance",
    description:
      "Access control, monitoring, and hardened defaults built in from day one, not bolted on after an incident. We design around least-privilege access and audit-ready logging so you're never scrambling to reconstruct what happened.",
  },
  {
    icon: IconOps,
    variant: "orange" as const,
    title: "Managed Cloud Operations",
    description:
      "Ongoing monitoring, incident response, and cost tuning so your infrastructure stays healthy long after launch day. We watch the systems we build, not just the ones we're called in to fix after something breaks.",
  },
];

const steps = [
  {
    index: "01",
    title: "Assess",
    description:
      "We audit your current setup — architecture, costs, security gaps, single points of failure — and give you a clear, written picture of what actually needs to change and why.",
  },
  {
    index: "02",
    title: "Architect",
    description:
      "We design infrastructure around your real traffic, team size, and growth plans, not a generic best-practices template pulled from a blog post. Every decision is explained, not just handed down.",
  },
  {
    index: "03",
    title: "Build",
    description:
      "We implement with infrastructure as code, so every change is versioned, reviewed, and repeatable. Nothing gets clicked into existence through a console where it can't be tracked.",
  },
  {
    index: "04",
    title: "Operate",
    description:
      "We stay on to monitor, maintain, and tune the system as your workload and team grow — or hand over fully documented infrastructure your own team can run with confidence.",
  },
];

const capabilities = [
  {
    icon: IconNetwork,
    variant: "indigo" as const,
    label: "Multi-cloud by design",
    description:
      "We design for portability across AWS, Azure, and Google Cloud from the start, not as an afterthought bolted on later.",
  },
  {
    icon: IconPlatform,
    variant: "violet" as const,
    label: "Kubernetes & container-native",
    description:
      "Cluster design and day-to-day operation for workloads that need to scale predictably under real traffic.",
  },
  {
    icon: IconAutomation,
    variant: "blue" as const,
    label: "Infrastructure as code",
    description:
      "Every environment defined in Terraform — versioned, peer-reviewed, and reproducible on demand.",
  },
  {
    icon: IconShield,
    variant: "teal" as const,
    label: "Security-first defaults",
    description:
      "Access control and monitoring built into the architecture itself, not patched on after a close call.",
  },
];

const faqs = [
  {
    q: "We already have infrastructure on AWS, Azure, or GCP. Do we need to start over?",
    a: "No. Most engagements start with an architecture review of what you already have. We identify what's solid, what's fragile, and what's quietly costing you more than it should — then build a plan around keeping what works and replacing only what doesn't.",
  },
  {
    q: "How long does a typical migration take?",
    a: "It depends on the size and complexity of what you're moving, but most migrations are planned in phases over several weeks to a few months. Each phase has its own testing and rollback point, so nothing moves to production until it's been verified.",
  },
  {
    q: "Do you work with early-stage startups, or only established companies?",
    a: "Both. Early-stage teams usually need architecture that won't need a rewrite at their next round of growth. Established teams usually need help untangling infrastructure that grew faster than it was ever documented.",
  },
  {
    q: "What happens after the initial build is done?",
    a: "If you choose managed operations, we stay on to monitor, maintain, and tune the system as your traffic and team grow. If not, we hand over fully documented infrastructure that your own team can run independently from day one.",
  },
  {
    q: "Which cloud platforms do you support?",
    a: "AWS, Microsoft Azure, and Google Cloud, including infrastructure that spans more than one of them. We choose the platform — or combination of platforms — based on your workload and constraints, not a default preference of ours.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="hero-glow" aria-hidden />
        <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 py-20 md:py-28 lg:grid-cols-[1fr_0.95fr]">
          <div className="px-6 lg:pl-10">
            <Eyebrow>Cloud Infrastructure &amp; Engineering</Eyebrow>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight text-[var(--fg)] md:text-5xl">
              Cloud infrastructure, engineered to hold up.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Cloudastral designs, migrates, and operates cloud systems for
              teams that can&apos;t afford downtime. We work across AWS,
              Azure, and Google Cloud, pairing hands-on engineering with
              infrastructure as code, so every system we touch is documented,
              repeatable, and built to survive contact with real traffic.
            </p>
            <p className="mt-4 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              From your first architecture review to day-to-day operations,
              you work with the same engineers the entire way — no handoffs,
              no account-management layer, and no mystery about what&apos;s
              actually running in your account.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact">
                Start a project
                <IconArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/services" variant="ghost">
                View services
              </Button>
            </div>
          </div>

          <Reveal>
            <div className="px-6 lg:pl-0 lg:pr-6">
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-lg border border-[var(--border)] bg-white">
                <Image
                  src="/1.jpeg"
                  alt="Cloud infrastructure illustration — servers connected through the cloud"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-contain p-10"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FeatureBand />

      <LogoStrip />

      {/* What we do — editorial layout */}
      <section className="py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--fg)]">
                Four ways we keep your infrastructure running
              </h2>
              <p className="mt-4 text-sm leading-6 text-[var(--fg-muted)]">
                Most engagements start with one of these and expand as your
                systems grow. Each one builds on solid architecture, so
                nothing you adopt later requires tearing down what came
                before.
              </p>
              <Button href="/services" variant="ghost" className="mt-8">
                See all services
                <IconArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          <div className="flex flex-col divide-y divide-[var(--border)]">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="flex gap-5 py-7 first:pt-0">
                  <span
                    className="mt-2 h-2 w-2 flex-none rounded-full"
                    style={{ background: `var(--accent-${s.variant})` }}
                    aria-hidden
                  />
                  <div>
                    <h3 className="text-lg font-medium text-[var(--fg)]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                      {s.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-[var(--fg)]">
              A process built for infrastructure, not guesswork
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
              Every engagement moves through the same four stages. It&apos;s
              a deliberately unglamorous process — and that&apos;s the point.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
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

      <StatBand />

      {/* Capabilities */}
      <section className="py-24">
        <Container>
          <Reveal>
            <Eyebrow>Why Cloudastral</Eyebrow>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-[var(--fg)]">
              Engineering-led, not account-managed
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--fg-muted)]">
              You work directly with the engineers who design and build your
              infrastructure — across every major cloud and the tools that
              hold it together.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <c.icon className="h-6 w-6 text-[var(--primary)]" />
                <p className="mt-4 text-sm font-medium text-[var(--fg)]">
                  {c.label}
                </p>
                <p className="mt-1.5 text-sm leading-6 text-[var(--fg-muted)]">
                  {c.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-[var(--fg)]">
              Things people usually ask before reaching out
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col divide-y divide-[var(--border)]">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 60}>
                <div className="grid grid-cols-1 gap-3 py-7 md:grid-cols-[1.1fr_1.4fr] md:gap-10">
                  <h3 className="text-base font-medium text-[var(--fg)]">
                    {item.q}
                  </h3>
                  <p className="text-sm leading-6 text-[var(--fg-muted)]">
                    {item.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <GradientCTA
        title="Have infrastructure that needs attention?"
        description="Tell us what you're running and where it's breaking. We'll tell you what we'd do about it."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </>
  );
}
