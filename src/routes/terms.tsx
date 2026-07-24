import { Link, createFileRoute } from "@tanstack/react-router";
import { CONTACT_EMAIL, CONTACT_MAIL_URL } from "@/lib/send-contact";
import { YanovixLogo } from "@/components/yanovix-logo";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Use - YANOVIX" },
      { name: "description", content: "Terms for using the YANOVIX website and engaging our team." },
    ],
  }),
});

function TermsPage() {
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
        <p className="text-[11px] uppercase tracking-widest text-ink/40">Legal</p>
        <h1 className="mt-3 text-4xl text-ink md:text-5xl">Terms of Use</h1>
        <p className="mt-3 text-sm text-ink/50">Last updated July 23, 2026</p>
        <div className="mt-12 max-w-3xl space-y-10">
          <section>
            <h2 className="text-xl font-medium text-ink">The site</h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink/65">
              <p>This website describes YANOVIX services. Content is for information only and may change without notice.</p>
              <p>Engagements are governed by a written statement of work or MSA - not by marketing copy alone.</p>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-medium text-ink">Acceptable use</h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink/65">
              <p>Do not misuse the contact form (spam, abuse, or automated scraping that harms the service).</p>
              <p>Case studies and metrics may be anonymized or aggregated where clients require it.</p>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-medium text-ink">Contact</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">For commercial terms or questions: {CONTACT_EMAIL}.</p>
          </section>
        </div>
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
