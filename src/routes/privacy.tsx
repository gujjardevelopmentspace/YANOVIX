import { Link, createFileRoute } from "@tanstack/react-router";
import { CONTACT_EMAIL, CONTACT_MAIL_URL, CONTACT_LOCATION } from "@/lib/send-contact";
import { YanovixLogo } from "@/components/yanovix-logo";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy - YANOVIX" },
      { name: "description", content: "How YANOVIX collects and uses information from inquiries and projects." },
    ],
  }),
});

function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="July 23, 2026">
      <Section heading="What we collect">
        <p>When you use our contact form or email us, we collect the details you send - name, email, company, and message content.</p>
        <p>We do not sell personal data. We use it to reply to your inquiry and, if we work together, to deliver the project.</p>
      </Section>
      <Section heading="How we use it">
        <p>Inquiries are routed to our team (and email providers such as Gmail / Web3Forms when configured).</p>
        <p>Project work may involve processing your business data under a separate agreement or DPA.</p>
      </Section>
      <Section heading="Contact">
        <p>
          Questions about privacy: {CONTACT_EMAIL}. Our office reference location is {CONTACT_LOCATION}.
        </p>
      </Section>
    </LegalShell>
  );
}

function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <header className="border-b border-ink/10 bg-white/70 backdrop-blur-xl">
        <div className="container-x flex items-center justify-between py-4">
          <YanovixLogo toHome size="nav" />
          <div className="flex items-center gap-2">
            <Link to="/" hash="contact" className="rounded-full bg-ink px-5 py-2 text-xs font-medium text-ivory transition hover:bg-ink/85">
              Contact
            </Link>
          </div>
        </div>
      </header>
      <main className="container-x py-16 md:py-24">
        <p className="text-[11px] uppercase tracking-widest text-ink/40">Legal</p>
        <h1 className="mt-3 text-4xl text-ink md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-ink/50">Last updated {updated}</p>
        <div className="mt-12 max-w-3xl space-y-10">{children}</div>
        <a
          href={CONTACT_MAIL_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-14 inline-flex rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm font-medium text-ink transition hover:border-ink"
        >
          Email {CONTACT_EMAIL}
        </a>
      </main>
    </div>
  );
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-medium text-ink">{heading}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink/65">{children}</div>
    </section>
  );
}
