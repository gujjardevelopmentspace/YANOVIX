import { Link, createFileRoute } from "@tanstack/react-router";
import { CONTACT_EMAIL, CONTACT_MAIL_URL } from "@/lib/send-contact";
import { YanovixLogo } from "@/components/yanovix-logo";

export const Route = createFileRoute("/security")({
  component: SecurityPage,
  head: () => ({
    meta: [
      { title: "Security - YANOVIX" },
      { name: "description", content: "How YANOVIX approaches security in production systems and how to report issues." },
    ],
  }),
});

function SecurityPage() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <header className="border-b border-ink/10 bg-white/70 backdrop-blur-xl">
        <div className="container-x flex items-center justify-between py-4">
          <YanovixLogo toHome size="nav" />
          <Link to="/" hash="contact" className="rounded-full bg-ink px-5 py-2 text-xs font-medium text-ivory transition hover:bg-ink/85">
            Contact
          </Link>
        </div>
      </header>
      <main className="container-x py-16 md:py-24">
        <p className="text-[11px] uppercase tracking-widest text-ink/40">Trust</p>
        <h1 className="mt-3 text-4xl text-ink md:text-5xl">Security</h1>
        <p className="mt-3 text-sm text-ink/50">Last updated July 23, 2026</p>
        <div className="mt-12 max-w-3xl space-y-10">
          <section>
            <h2 className="text-xl font-medium text-ink">How we build</h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink/65">
              <p>
                Production systems we deliver typically include role-based access, encryption in transit, audit logging,
                and environment separation (dev / staging / prod) as scoped in the project.
              </p>
              <p>We work with your security and compliance questionnaires and can support SSO / IdP integration when required.</p>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-medium text-ink">Reporting an issue</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              If you believe you have found a security issue related to a YANOVIX system, email {CONTACT_EMAIL} with
              details. Please do not disclose publicly until we have had a reasonable chance to investigate.
            </p>
          </section>
        </div>
        <a
          href={CONTACT_MAIL_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-14 inline-flex rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm font-medium text-ink transition hover:border-ink"
        >
          Report or ask: {CONTACT_EMAIL}
        </a>
      </main>
    </div>
  );
}
