import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  Check,
  Cloud,
  Code2,
  Cpu,
  Database,
  LineChart,
  Mail,
  MessagesSquare,
  Phone,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { YanovixLogo } from "@/components/yanovix-logo";
import { mailUrl } from "@/lib/send-contact";
import { getServiceBySlug, SERVICES, type ServiceDetail } from "@/data/services";

const ICONS = {
  bot: Bot,
  phone: Phone,
  chat: MessagesSquare,
  users: Users,
  code: Code2,
  building: Building2,
  workflow: Workflow,
  mail: Mail,
  chart: LineChart,
  database: Database,
  cpu: Cpu,
  cloud: Cloud,
  sparkles: Sparkles,
} as const;

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const service = loaderData?.service;
    if (!service) return {};
    return {
      meta: [
        { title: `${service.title} - YANOVIX` },
        { name: "description", content: service.short },
        { property: "og:title", content: `${service.title} - YANOVIX` },
        { property: "og:description", content: service.short },
      ],
    };
  },
  component: ServicePage,
});

function ServiceNav() {
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
              hash="services"
              className="hidden rounded-full px-4 py-2 text-sm text-ink/70 transition hover:text-ink sm:inline-flex"
            >
              All services
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

function ServicePage() {
  const { service } = Route.useLoaderData();
  const Icon = ICONS[service.icon];
  const index = SERVICES.findIndex((s) => s.slug === service.slug);
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(
    Math.max(0, index - 1),
    Math.max(0, index - 1) + 3,
  );
  const relatedList =
    related.length >= 3
      ? related
      : [...related, ...SERVICES.filter((s) => s.slug !== service.slug && !related.includes(s))].slice(0, 3);

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <ServiceNav />

      <main className="pt-32 pb-24">
        <div className="container-x">
          <Link
            to="/"
            hash="services"
            className="inline-flex items-center gap-2 text-sm text-ink/50 transition hover:text-ember"
          >
            <ArrowLeft className="h-4 w-4" /> Back to services
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-ink/10 bg-white text-ember">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-xs uppercase tracking-widest text-ink/40">
                  Service {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h1 className="mt-6 text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl">
                {service.title}
              </h1>
              <p className="mt-4 max-w-2xl text-serif text-2xl text-ink/70 sm:text-3xl">
                {service.hero}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">{service.overview}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/"
                  hash="contact"
                  className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-medium text-ivory transition hover:bg-ink"
                >
                  Start a project <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={mailUrl(`YANOVIX - ${service.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-medium text-ink transition hover:border-ink"
                >
                  Email us
                </a>
              </div>
            </div>

            <aside className="rounded-[28px] border border-ink/10 bg-white p-7 shadow-[0_30px_60px_-40px_rgba(14,14,12,0.35)]">
              <div className="text-[11px] uppercase tracking-widest text-ink/40">Typical timeline</div>
              <p className="mt-2 text-serif text-2xl text-ink">{service.timeline}</p>
              <div className="mt-6 border-t border-ink/8 pt-6">
                <div className="text-[11px] uppercase tracking-widest text-ink/40">Stack we often use</div>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {service.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-ink/10 bg-ivory px-3 py-1 text-xs text-ink/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 border-t border-ink/8 pt-6">
                <div className="text-[11px] uppercase tracking-widest text-ink/40">What changes</div>
                <ul className="mt-3 space-y-2.5">
                  {service.outcomes.map((o) => (
                    <li key={o} className="flex gap-2 text-sm text-ink/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <section className="mt-20 grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-ink/10 bg-white p-8">
              <h2 className="text-serif text-3xl text-ink">What you get</h2>
              <ul className="mt-6 space-y-4">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-sm leading-relaxed text-ink/65">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[28px] border border-ink/10 bg-ink p-8 text-ivory">
              <h2 className="text-serif text-3xl">Where it fits</h2>
              <ul className="mt-6 space-y-4">
                {service.useCases.map((u) => (
                  <li key={u} className="flex gap-3 text-sm leading-relaxed text-ivory/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-20">
            <h2 className="text-serif text-3xl text-ink sm:text-4xl">How we ship it</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-ink/10 bg-white p-6"
                >
                  <div className="text-xs text-ink/35">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-3 text-lg font-medium text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">{step.detail}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <h2 className="text-serif text-3xl text-ink sm:text-4xl">Questions we get</h2>
            <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {service.faqs.map((faq) => (
                <div key={faq.q} className="grid gap-3 py-6 md:grid-cols-[0.9fr_1.1fr]">
                  <h3 className="text-base font-medium text-ink">{faq.q}</h3>
                  <p className="text-sm leading-relaxed text-ink/60">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-serif text-3xl text-ink">Related services</h2>
              <Link to="/" hash="services" className="text-sm text-ink/50 transition hover:text-ember">
                View all
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {relatedList.map((s) => (
                <RelatedCard key={s.slug} service={s} />
              ))}
            </div>
          </section>

          <section className="mt-20 overflow-hidden rounded-[32px] border border-ink/10 bg-ink px-8 py-12 text-ivory md:px-12">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-widest text-ivory/40">Next step</p>
              <h2 className="mt-3 text-serif text-3xl sm:text-4xl">
                Want this built for your stack?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ivory/60">
                Tell us what you are running today and what a win looks like. We will come back with a
                clear path - timeline, scope, and whether we are the right fit.
              </p>
              <Link
                to="/"
                hash="contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-medium text-ivory transition hover:bg-white hover:text-ink"
              >
                Talk to Yanovix <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function RelatedCard({ service }: { service: ServiceDetail }) {
  const Icon = ICONS[service.icon];
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group rounded-2xl border border-ink/10 bg-white p-6 transition hover:border-ember/40 hover:shadow-[0_24px_50px_-30px_rgba(14,14,12,0.3)]"
    >
      <div className="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 bg-ivory transition group-hover:border-ember group-hover:bg-ember group-hover:text-ivory">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="mt-4 text-serif text-xl text-ink">{service.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm text-ink/55">{service.short}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-xs text-ink/45 transition group-hover:text-ember">
        Tell me more <ArrowUpRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
