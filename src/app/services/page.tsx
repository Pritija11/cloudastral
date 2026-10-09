import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { IconBadge } from "@/components/IconBadge";
import { GradientCTA } from "@/components/GradientCTA";
import {
  IconArchitecture,
  IconAutomation,
  IconNetwork,
  IconPlatform,
  IconShield,
  IconOps,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Cloud architecture, migration, DevOps automation, multi-cloud systems, Kubernetes platforms, security, and managed cloud operations.",
};

const services = [
  {
    icon: IconArchitecture,
    variant: "indigo" as const,
    title: "Cloud Architecture & Migration",
    description:
      "We design cloud environments around how your product actually runs — its traffic patterns, its data, its failure points — then migrate you onto them with a tested plan, not a cutover and a prayer.",
    extra:
      "Every migration starts with a dependency map of what talks to what, so nothing gets moved blind. We sequence the cutover in stages, validate each one before moving to the next, and keep a documented rollback path available until the new environment has proven itself under real traffic.",
    items: [
      "Architecture design & review",
      "Lift-and-shift & re-platform migrations",
      "Cost & capacity planning",
    ],
  },
  {
    icon: IconAutomation,
    variant: "blue" as const,
    title: "DevOps & Infrastructure Automation",
    description:
      "CI/CD pipelines and infrastructure as code that turn deployments into a routine, reviewable process instead of a stressful event that only one person on the team knows how to run.",
    extra:
      "We write your infrastructure in Terraform and your pipelines in code your team can read and modify — nothing lives only in someone's head or in a console no one remembers how to reach. Provisioning, testing, and rollout all become steps you can trace, not steps you have to hope went right.",
    items: [
      "CI/CD pipeline design",
      "Infrastructure as code (Terraform)",
      "Automated environment provisioning",
    ],
  },
  {
    icon: IconNetwork,
    variant: "violet" as const,
    title: "Multi-Cloud & Distributed Systems",
    description:
      "We connect AWS, Azure, and Google Cloud environments, and build the networking layer that lets distributed workloads talk to each other reliably — without duct-taping VPNs together under deadline pressure.",
    extra:
      "Multi-cloud isn't a default for us — it's a decision we make with you when it actually solves a problem: redundancy, data residency, vendor leverage, or workloads that genuinely run better split across providers. We design the networking, identity, and failover strategy to match.",
    items: [
      "Cross-cloud networking & VPNs",
      "Hybrid & distributed infrastructure",
      "Workload placement strategy",
    ],
  },
  {
    icon: IconPlatform,
    variant: "teal" as const,
    title: "Kubernetes & Platform Engineering",
    description:
      "Scalable, container-native platforms for data-intensive and high-traffic applications — built to be operated day after day, not just deployed once and left to drift out of date.",
    extra:
      "We design cluster topology around your actual workload shape, set up autoscaling and resource limits that match real usage, and build the internal tooling your team needs to ship onto the platform without filing a ticket every time.",
    items: [
      "Kubernetes cluster design & operation",
      "Container orchestration",
      "Internal platform tooling",
    ],
  },
  {
    icon: IconShield,
    variant: "rose" as const,
    title: "Cloud Security & Compliance",
    description:
      "Hardened infrastructure with access control, monitoring, and audit-readiness built in from the start, not patched on after something goes wrong and a client starts asking questions.",
    extra:
      "We design around least-privilege access, encrypt data in transit and at rest by default, and set up logging that actually answers the question \"what happened\" when you need it to — not six months after the fact when the logs have already rotated out.",
    items: [
      "Identity & access management",
      "Network & workload hardening",
      "Audit-ready logging & monitoring",
    ],
  },
  {
    icon: IconOps,
    variant: "orange" as const,
    title: "Managed Cloud Operations",
    description:
      "Ongoing monitoring, incident response, and cost optimization so your infrastructure stays healthy long after the initial build — handled by the same engineers who designed it, not a rotating support queue.",
    extra:
      "We set up alerting that tells you about real problems instead of paging you for noise, review your cloud spend on a regular cadence to catch waste before it compounds, and act as the team that gets paged at 3 a.m. so yours doesn't have to.",
    items: [
      "24/7 monitoring & alerting",
      "Incident response",
      "Continuous cost optimization",
    ],
  },
];

const engagementModels = [
  {
    title: "Project-based",
    description:
      "A defined scope with a start and an end — an architecture review, a migration, a security hardening pass. You get a fixed plan, a timeline, and documented infrastructure handed over at the finish line.",
  },
  {
    title: "Ongoing retainer",
    description:
      "For teams who want us to stay on as their infrastructure team — monitoring, maintaining, and evolving the system as traffic, headcount, and requirements change month to month.",
  },
  {
    title: "Embedded support",
    description:
      "We work alongside your existing engineers on a specific initiative, transferring context as we go so your team owns the system fully once the engagement wraps up.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--border)] py-20 md:py-24">
        <div className="hero-glow" aria-hidden />
        <Container className="relative z-10">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-[var(--fg)] md:text-5xl">
              Infrastructure, built and run end-to-end.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Every engagement starts with cloud architecture and
              engineering — the rest extends from there, depending on how
              distributed, automated, or regulated your systems need to be.
              You can bring us in for a single piece of this, or let us own
              the whole picture end to end.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="flex flex-col divide-y divide-[var(--border)]">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 60}>
                <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-[3rem_1.4fr_1fr] md:gap-10">
                  <IconBadge icon={service.icon} variant={service.variant} />
                  <div>
                    <h2 className="text-xl font-medium text-[var(--fg)]">
                      {service.title}
                    </h2>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--fg-muted)]">
                      {service.description}
                    </p>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--fg-muted)]">
                      {service.extra}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2.5 self-start">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-2 text-sm text-[var(--fg-muted)]"
                      >
                        <span className="h-1 w-1 flex-none translate-y-[-2px] rounded-full bg-[var(--primary)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Engagement models</Eyebrow>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-[var(--fg)]">
              How a project with us usually runs
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
              There&apos;s no single way to work with Cloudastral — the
              structure depends on whether you need a defined project
              finished, or a team that stays on as your infrastructure grows.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {engagementModels.map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <div className="h-full rounded-lg border border-[var(--border)] bg-[var(--surface)] p-7">
                  <h3 className="text-lg font-medium text-[var(--fg)]">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                    {m.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <GradientCTA
        title="Not sure which service you need?"
        description="Describe what you're running — we'll point you to the right starting point."
        buttonLabel="Talk to an engineer"
        buttonHref="/contact"
      />
    </>
  );
}
