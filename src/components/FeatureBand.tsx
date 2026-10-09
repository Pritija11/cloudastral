import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { IconArrowRight } from "./icons";

export function FeatureBand() {
  return (
    <section className="bg-[var(--primary-deep)]">
      <Container className="grid grid-cols-1 items-center gap-10 py-16 md:py-20 lg:grid-cols-[1fr_0.8fr]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/60">
            How we build
          </p>
          <h2 className="mt-4 max-w-lg text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
            Every environment we build starts as code.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
            No infrastructure we hand over depends on a console someone
            clicked through once. Every environment is written in Terraform,
            reviewed like any other code change, and reproducible from
            scratch if it ever needs to be.
          </p>
          <Link
            href="/services"
            className="mt-7 inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            See how we work
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal delay={100}>
          <div className="relative aspect-[738/402] w-full overflow-hidden rounded-lg border border-white/15">
            <Image
              src="/2.jpeg"
              alt="Secure CI/CD pipeline architecture, from developer identity through to cloud infrastructure targets"
              fill
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
