import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the Cloudastral website.",
};

export default function TermsPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Terms of Service">
      <LegalSection title="Acceptance of terms">
        <p>
          By accessing or using this website, you agree to these terms. If
          you don&apos;t agree with any part of them, please don&apos;t use
          the site.
        </p>
      </LegalSection>

      <LegalSection title="Use of this website">
        <p>
          You agree to use this website only for lawful purposes. You may
          not attempt to disrupt the site, scrape or copy its content at
          scale, or use it in any way that could damage, disable, or impair
          its operation.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          The content on this website — including text, graphics, and the
          Cloudastral name and mark — belongs to Cloudastral unless
          otherwise noted. You may not reproduce or distribute it without
          our permission.
        </p>
      </LegalSection>

      <LegalSection title="No professional advice">
        <p>
          The information on this website is provided for general
          informational purposes and doesn&apos;t constitute professional
          advice or a service agreement. Any actual engagement for cloud
          architecture, migration, or operations work is governed by a
          separate, signed agreement between you and Cloudastral.
        </p>
      </LegalSection>

      <LegalSection title="No warranty">
        <p>
          This website and its content are provided &quot;as is&quot;
          without warranties of any kind, express or implied. We don&apos;t
          guarantee that the site will be error-free, uninterrupted, or
          always available.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          To the fullest extent permitted by law, Cloudastral is not liable
          for any indirect, incidental, or consequential damages arising
          from your use of this website.
        </p>
      </LegalSection>

      <LegalSection title="External links">
        <p>
          This site may link to third-party websites for convenience. We
          don&apos;t control and aren&apos;t responsible for the content or
          practices of those sites.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These terms are governed by the laws of Nepal, without regard to
          conflict-of-law principles.
        </p>
      </LegalSection>

      <LegalSection title="Changes to these terms">
        <p>
          We may update these terms from time to time. Continued use of the
          website after changes are posted means you accept the revised
          terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact us">
        <p>
          Questions about these terms can be sent to{" "}
          <a
            href="mailto:hello@cloudastral.ltd"
            className="text-[var(--primary)] hover:underline"
          >
            hello@cloudastral.ltd
          </a>{" "}
          or Putalisadak, Kathmandu 44600, Nepal.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
