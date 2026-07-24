import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  GraduationCap,
  HardHat,
  HeartPulse,
  Home,
  Landmark,
  Megaphone,
  Scale,
  Truck,
  UserSearch,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { YanovixLogo } from "@/components/yanovix-logo";
import { getIndustryBySlug, INDUSTRIES, type IndustryDetail } from "@/data/industries";
import { getServiceBySlug } from "@/data/services";

const ICONS = {
  health: HeartPulse,
  home: Home,
  law: Scale,
  finance: Landmark,
  marketing: Megaphone,
  education: GraduationCap,
  recruitment: UserSearch,
  construction: HardHat,
  logistics: Truck,
} as const;

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = getIndustryBySlug(params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData }) => {
    const industry = loaderData?.industry;
    if (!industry) return {};
    return {
      meta: [
        { title: `${industry.title} AI & Automation - YANOVIX` },
        { name: "description", content: industry.short },
        { property: "og:title", content: `${industry.title} - YANOVIX` },
        { property: "og:description", content: industry.short },
      ],
    };
  },
  component: IndustryPage,
});

function IndustryNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "py-3" : "py-5")}>
      <div className="container-x">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full border px-5 py-3 transition-all",
            scrolled
              ? "border-ink/10 bg-white/80 shadow-[0_10px_40px_-20px_rgba(14,14,12,0.2)] backdrop-blur-xl"
              : "border-transparent",
          )}
        >
          <YanovixLogo toHome size="nav" />
          <div className="flex items-center gap-2">
            <Link
              to="/"
              hash="industries"
              className="hidden rounded-full px-4 py-2 text-sm text-ink/70 transition hover:text-ink sm:inline-flex"
            >
              All industries
            </Link>
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2 text-xs font-medium text-ivory transition hover:bg-ember"
            >
              Let's talk <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

function IndustryPage() {
  const { industry } = Route.useLoaderData();
  const Icon = ICONS[industry.icon];
  const related = INDUSTRIES.filter((i) => i.slug !== industry.slug);
  const services = industry.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <IndustryNav />
      <main className="pb-24 pt-32">
        <div className="container-x">
          <Link
            to="/"
            hash="industries"
            className="inline-flex items-center gap-2 text-sm text-ink/50 transition hover:text-ember"
          >
            <ArrowLeft className="h-4 w-4" /> Back to industries
          </Link>

          {/* Hero */}
          <div className="relative mt-10 overflow-hidden rounded-[32px] border border-ink/10 bg-ink p-8 text-ivory md:p-12">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-50 blur-3xl"
              style={{ background: `radial-gradient(closest-side, ${industry.accent}aa, transparent)` }}
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/5 text-ember">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-ivory/50">
                    Industry
                  </span>
                </div>
                <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl md:text-6xl">{industry.title}</h1>
                <p className="mt-4 max-w-2xl text-serif text-2xl text-ivory/80 sm:text-3xl">{industry.hero}</p>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ivory/55 md:text-base">{industry.overview}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/"
                    hash="contact"
                    className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-medium text-ivory transition hover:bg-white hover:text-ink"
                  >
                    Talk about your stack <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {industry.satisfaction.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="text-serif text-2xl text-ember md:text-3xl">{s.value}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-widest text-ivory/40">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <section className="mt-12">
            <h2 className="text-[11px] uppercase tracking-widest text-ink/40">What we build here</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {industry.capabilities.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink/75"
                >
                  {c}
                </span>
              ))}
            </div>
          </section>

          {/* Pains + Solutions */}
          <section className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-ink/10 bg-white p-8">
              <h2 className="text-serif text-3xl text-ink">What operators feel</h2>
              <ul className="mt-6 space-y-5">
                {industry.pains.map((p) => (
                  <li key={p.title}>
                    <div className="font-medium text-ink">{p.title}</div>
                    <p className="mt-1 text-sm leading-relaxed text-ink/55">{p.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[28px] border border-ink/10 bg-white p-8">
              <h2 className="text-serif text-3xl text-ink">How we help</h2>
              <ul className="mt-6 space-y-5">
                {industry.solutions.map((s) => (
                  <li key={s.title} className="flex gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-ember" />
                    <div>
                      <div className="font-medium text-ink">{s.title}</div>
                      <p className="mt-1 text-sm leading-relaxed text-ink/55">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Quote */}
          <section className="mt-16 overflow-hidden rounded-[28px] border border-ink/10 bg-white p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-widest text-ink/40">Client satisfaction</p>
            <blockquote className="mt-5 max-w-3xl text-serif text-2xl leading-snug text-ink md:text-3xl">
              &ldquo;{industry.quote.text}&rdquo;
            </blockquote>
            <div className="mt-6 text-sm text-ink/55">
              <span className="font-medium text-ink">{industry.quote.name}</span>
              <span className="mx-2 text-ink/25">/</span>
              {industry.quote.role}
            </div>
          </section>

          {/* Process + compliance */}
          <section className="mt-16 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <h2 className="text-serif text-3xl text-ink">How engagements run</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {industry.process.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-2xl border border-ink/10 bg-white p-5"
                  >
                    <div className="text-xs text-ink/35">{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="mt-2 text-base font-medium text-ink">{step.title}</h3>
                    <p className="mt-1.5 text-sm text-ink/55">{step.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <aside className="rounded-[28px] border border-ink/10 bg-ink p-7 text-ivory">
              <h2 className="text-serif text-2xl">Trust & controls</h2>
              <ul className="mt-5 space-y-3">
                {industry.compliance.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-ivory/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                    {c}
                  </li>
                ))}
              </ul>
            </aside>
          </section>

          {/* Related services */}
          {services.length > 0 && (
            <section className="mt-16">
              <h2 className="text-serif text-3xl text-ink">Services we pair with this</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((s) =>
                  s ? (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="group rounded-2xl border border-ink/10 bg-white p-5 transition hover:border-ember/40"
                    >
                      <h3 className="text-serif text-xl text-ink">{s.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-ink/55">{s.short}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs text-ink/40 group-hover:text-ember">
                        Details <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  ) : null,
                )}
              </div>
            </section>
          )}

          {/* Related industries */}
          <section className="mt-16">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-serif text-3xl text-ink">Other industries</h2>
              <Link to="/" hash="industries" className="text-sm text-ink/50 hover:text-ember">
                View all
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((ind) => (
                <RelatedIndustry key={ind.slug} industry={ind} />
              ))}
            </div>
          </section>

          <section className="mt-16 overflow-hidden rounded-[32px] border border-ink/10 bg-ink px-8 py-12 text-ivory md:px-12">
            <p className="text-[11px] uppercase tracking-widest text-ivory/40">Next step</p>
            <h2 className="mt-3 max-w-xl text-serif text-3xl sm:text-4xl">
              Running {industry.title.toLowerCase()} ops that need to move faster?
            </h2>
            <p className="mt-4 max-w-lg text-sm text-ivory/55">
              Tell us where time and money leak today. We will map a practical path - not a slide deck.
            </p>
            <Link
              to="/"
              hash="contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-medium text-ivory transition hover:bg-white hover:text-ink"
            >
              Book a discovery call <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

function RelatedIndustry({ industry }: { industry: IndustryDetail }) {
  const Icon = ICONS[industry.icon];
  return (
    <Link
      to="/industries/$slug"
      params={{ slug: industry.slug }}
      className="group rounded-2xl border border-ink/10 bg-white p-6 transition hover:border-ember/40 hover:shadow-[0_24px_50px_-30px_rgba(14,14,12,0.28)]"
    >
      <div className="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 bg-ivory text-ember transition group-hover:border-ember group-hover:bg-ember group-hover:text-ivory">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="mt-4 text-serif text-xl text-ink">{industry.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-ink/55">{industry.short}</p>
    </Link>
  );
}
