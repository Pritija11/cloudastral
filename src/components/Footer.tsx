import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { IconPin, IconMail, IconPhone } from "./icons";

const serviceLinks = [
  "Cloud Architecture & Migration",
  "DevOps & Automation",
  "Multi-Cloud & Distributed Systems",
  "Kubernetes & Platform Engineering",
  "Security & Compliance",
  "Managed Cloud Operations",
];

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2 font-mono text-sm text-[var(--fg)]">
            <Image src="/logo.png" alt="" width={32} height={32} />
            cloudastral
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--fg-muted)]">
            Cloud infrastructure and engineering, based in Kathmandu, Nepal —
            architecture, automation, and operations for teams that run on
            the cloud.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--fg-faint)]">
            Navigate
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-[var(--fg-muted)]">
            <li><Link href="/" className="hover:text-[var(--primary)]">Home</Link></li>
            <li><Link href="/services" className="hover:text-[var(--primary)]">Services</Link></li>
            <li><Link href="/about" className="hover:text-[var(--primary)]">About</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--primary)]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--fg-faint)]">
            Services
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-[var(--fg-muted)]">
            {serviceLinks.slice(0, 4).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--fg-faint)]">
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-[var(--fg-muted)]">
            <li className="flex items-start gap-2.5">
              <IconPin className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
              <span>Putalisadak, Kathmandu 44600, Nepal</span>
            </li>
            <li className="flex items-center gap-2.5">
              <IconMail className="h-4 w-4 flex-none text-[var(--primary)]" />
              <a href="mailto:hello@cloudastral.ltd" className="hover:text-[var(--primary)]">
                hello@cloudastral.ltd
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <IconPhone className="h-4 w-4 flex-none text-[var(--primary)]" />
              <a href="tel:+9779801234567" className="hover:text-[var(--primary)]">
                +977 980-1234567
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-[var(--border)]">
        <Container className="flex flex-col gap-4 py-6 text-xs text-[var(--fg-faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {YEAR} Cloudastral. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-[var(--primary)]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--primary)]">
              Terms of Service
            </Link>
            <span>Designed &amp; engineered in Nepal.</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
