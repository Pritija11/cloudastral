import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Cloudastral collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy">
      <LegalSection title="Overview">
        <p>
          Cloudastral (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
          operates this website to share information about our cloud
          infrastructure and engineering services. This policy explains what
          information we collect through the site, how we use it, and the
          choices you have.
        </p>
      </LegalSection>

      <LegalSection title="Information we collect">
        <p>
          If you use the contact form on this site, we collect the
          information you choose to submit — typically your name, email
          address, company name, and the contents of your message. We only
          collect this information when you voluntarily provide it to reach
          out to us.
        </p>
        <p>
          We do not require account creation to use this website, and we do
          not collect payment information through it.
        </p>
      </LegalSection>

      <LegalSection title="Cookies and analytics">
        <p>
          This website does not currently use tracking cookies or
          third-party analytics services. If that changes in the future —
          for example, to understand how visitors use the site — we will
          update this policy to reflect it.
        </p>
      </LegalSection>

      <LegalSection title="How we use your information">
        <p>
          We use the information you submit to respond to your inquiry,
          evaluate whether we&apos;re a good fit for your project, and
          communicate with you about a potential or ongoing engagement. We
          do not sell your information, and we do not share it with third
          parties except where necessary to provide a service you&apos;ve
          requested, or where required by law.
        </p>
      </LegalSection>

      <LegalSection title="Data retention">
        <p>
          We retain the information you submit for as long as it&apos;s
          reasonably necessary to respond to your inquiry and maintain our
          own business records. You can ask us to delete your information
          at any time by contacting us directly.
        </p>
      </LegalSection>

      <LegalSection title="Data security">
        <p>
          We take reasonable technical and organizational measures to
          protect the information you share with us. That said, no method
          of transmission over the internet is completely secure, and we
          can&apos;t guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="Third-party links">
        <p>
          This website may link to third-party platforms — such as cloud
          providers we work with — that are outside our control and not
          covered by this policy. We encourage you to review the privacy
          practices of any site you visit.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          Depending on where you&apos;re located, you may have the right to
          request access to, correction of, or deletion of the personal
          information we hold about you. To make a request, email us at{" "}
          <a
            href="mailto:hello@cloudastral.ltd"
            className="text-[var(--primary)] hover:underline"
          >
            hello@cloudastral.ltd
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Children's privacy">
        <p>
          This website is not directed at children, and we do not knowingly
          collect personal information from anyone under the age of 16.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          We may update this policy from time to time. If we make material
          changes, we&apos;ll update the &quot;last updated&quot; date at
          the top of this page.
        </p>
      </LegalSection>

      <LegalSection title="Contact us">
        <p>
          If you have questions about this policy or how we handle your
          information, reach out at{" "}
          <a
            href="mailto:hello@cloudastral.ltd"
            className="text-[var(--primary)] hover:underline"
          >
            hello@cloudastral.ltd
          </a>{" "}
          or write to us at Putalisadak, Kathmandu 44600, Nepal.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
