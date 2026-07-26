import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  animate,
  useMotionValue,
} from "motion/react";
import {
  Bot,
  Phone,
  MessagesSquare,
  Users,
  Code2,
  Building2,
  Workflow,
  LineChart,
  Cloud,
  Database,
  Cpu,
  Clock,
  HeartPulse,
  Home,
  Scale,
  Landmark,
  Megaphone,
  GraduationCap,
  UserSearch,
  HardHat,
  Truck,
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Globe,
  Mail,
  Linkedin,
  Play,
  Plus,
  Loader2,
  MapPin,
  Menu,
  ChevronLeft,
  ChevronRight,
  Pause,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import visualMark from "@/assets/visual-mark-glow.png";
import visualVoiceLive from "@/assets/visual-voice-live.jpg";
import visualLiveSystems from "@/assets/visual-live-systems.jpg";
import solutionHealthcare from "@/assets/solution-healthcare.jpg";
import solutionRealestate from "@/assets/solution-realestate.jpg";
import solutionSales from "@/assets/solution-sales.jpg";
import solutionSaas from "@/assets/solution-saas.jpg";
import solutionRecruiting from "@/assets/solution-recruiting.png";
import solutionEcommerce from "@/assets/solution-ecommerce.jpg";
import solutionEnterprise from "@/assets/solution-enterprise.jpg";
import solutionLogistics from "@/assets/solution-logistics.jpg";
import solutionEducation from "@/assets/solution-education.jpg";
import reviewerAmelia from "@/assets/reviewer-amelia.jpg";
import reviewerMarcus from "@/assets/reviewer-marcus.jpg";
import reviewerPriya from "@/assets/reviewer-priya.jpg";
import testimonialHelixBg from "@/assets/testimonial-helix-bg.jpg";
import whySecurity from "@/assets/why-security.png";
import whyWeMove from "@/assets/why-we-move.png";
import whyRealTeam from "@/assets/why-real-team.png";
import whyAroundClock from "@/assets/why-around-clock.png";
import whyBuiltToGrow from "@/assets/why-built-to-grow.png";
import whyNoBlackBoxes from "@/assets/why-no-black-boxes.png";
import whyKnowAi from "@/assets/why-know-ai.png";
import whyCloudFluent from "@/assets/why-cloud-fluent.png";
import {
  CONTACT_EMAIL,
  CONTACT_MAIL_URL,
  CONTACT_WHATSAPP_URL,
  CONTACT_LOCATION,
  CONTACT_MAPS_URL,
  CONTACT_MAPS_EMBED,
  CONTACT_SERVICES,
  CONTACT_LINKEDIN_URL,
  sendContactEmail,
  isContactConfigured,
} from "@/lib/send-contact";
import { SERVICES as SERVICE_CATALOG } from "@/data/services";
import { INDUSTRIES as INDUSTRY_CATALOG } from "@/data/industries";
import { RegionFlags, FOOTER_FLAGS, CONTACT_FLAGS } from "@/components/flags";
import { YanovixLogo } from "@/components/yanovix-logo";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "sonner";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import introVideo from "../assets/video/intro.mp4";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "YANOVIX - AI that actually ships" },
      {
        name: "description",
        content:
          "We build AI agents, voice systems, and custom software for teams tired of demos that never make it to production.",
      },
      { property: "og:title", content: "YANOVIX - AI that actually ships" },
      {
        property: "og:description",
        content:
          "AI agents, voice AI, and custom software - built by senior engineers, owned end to end.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

/* -------------------- primitives -------------------- */

function Reveal({
  children,
  delay = 0,
  y = 30,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.9, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SplitWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={cn("inline", className)}>
      {text.split(" ").map((w, i) => (
        <span key={`${w}-${i}`}>
          {i > 0 ? " " : null}
          <span className="inline-block overflow-hidden align-baseline">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: delay + i * 0.06, ease: [0.2, 0.9, 0.2, 1] }}
              className="inline-block"
            >
              {w}
            </motion.span>
          </span>
        </span>
      ))}
    </span>
  );
}

function Counter({
  to,
  suffix = "",
  duration = 2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => c.stop();
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function MagneticButton({
  children,
  tone = "ink",
  className,
  type = "button",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { tone?: "ink" | "ember" | "ghost" }) {
  const ref = useRef<HTMLButtonElement>(null);
  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px, ${(e.clientY - r.top - r.height / 2) * 0.28}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  return (
    <button
      ref={ref}
      type={type}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "group relative inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-[transform,box-shadow] duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
        tone === "ink" && "bg-ink text-ivory hover:shadow-[0_20px_50px_-20px_rgba(10,10,10,0.5)]",
        tone === "ember" && "btn-ember",
        tone === "ghost" && "border border-ink/15 text-ink hover:bg-ink hover:text-ivory",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-ink/70 backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
      {children}
    </span>
  );
}

function SectionHeader({
  eyebrow,
  title,
  sub,
  italic,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  italic?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <h2 className="mt-6 text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl">
        <SplitWords text={title} />
        {italic && (
          <>
            {" "}
            <span className="text-italic-serif text-ember">{italic}</span>
          </>
        )}
      </h2>
      {sub && (
        <Reveal delay={0.15}>
          <p className="mx-auto mt-5 max-w-2xl text-base text-ink/60">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

/* -------------------- global effects -------------------- */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-ember"
    />
  );
}

function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);
  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[500px] w-[500px] rounded-full opacity-60 blur-[120px] md:block"
    >
      <div
        className="h-full w-full rounded-full"
        style={{ background: "radial-gradient(circle, rgba(10,10,10,0.25), transparent 60%)" }}
      />
    </motion.div>
  );
}

/** Soft ember/sage orbs that sit behind the whole page */
function SiteGlow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="glow-ember absolute -left-24 top-24 h-[420px] w-[420px] animate-glow-drift" />
      <div
        className="glow-sage absolute -right-16 top-[40%] h-[380px] w-[380px] animate-glow-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="glow-ember absolute bottom-10 left-1/3 h-[320px] w-[320px] animate-glow-drift opacity-60"
        style={{ animationDelay: "5s" }}
      />
    </div>
  );
}

function VisualFrame({
  src,
  alt,
  className,
  glow = true,
}: {
  src: string;
  alt: string;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-8 opacity-70 blur-2xl"
          style={{
            background: "radial-gradient(closest-side, rgba(10,10,10,0.35), transparent 70%)",
          }}
        />
      )}
      <img src={src} alt={alt} className="relative h-full w-full object-cover" loading="lazy" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
    </div>
  );
}

function SectionGlow({ tone = "ember" }: { tone?: "ember" | "sage" | "both" }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {(tone === "ember" || tone === "both") && (
        <div className="glow-ember absolute -top-24 left-1/4 h-64 w-64 animate-glow-pulse" />
      )}
      {(tone === "sage" || tone === "both") && (
        <div className="glow-sage absolute -bottom-16 right-1/5 h-56 w-56 animate-glow-drift" />
      )}
    </div>
  );
}

/* -------------------- nav -------------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Services", "services"],
    ["Industries", "industries"],
    ["Solutions", "solutions"],
    ["Process", "process"],
    ["Work", "case-studies"],
    ["FAQ", "faq"],
    ["Contact", "contact"],
  ] as const;

  const go = (id: string) => {
    setOpen(false);
    requestAnimationFrame(() => scrollToId(id));
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.9, 0.2, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="container-x">
        <nav
          aria-label="Primary"
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-2.5 transition-all sm:px-5 sm:py-3",
            scrolled
              ? "border-ink/10 bg-white/80 shadow-[0_10px_40px_-20px_rgba(14,14,12,0.2)] backdrop-blur-xl"
              : "border-transparent",
          )}
        >
          <YanovixLogo size="nav" />
          <div className="hidden items-center gap-1 lg:flex">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(id);
                }}
                className="group relative rounded-full px-4 py-2 text-sm text-ink/70 transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
              >
                <span className="relative">
                  {label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-ink transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                </span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <MagneticButton
              tone="ink"
              className="hidden px-5 py-2 text-xs sm:inline-flex"
              onClick={() => scrollToId("contact")}
            >
              Let's talk{" "}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </MagneticButton>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white text-ink transition hover:border-ink lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
                  aria-label="Open menu"
                >
                  <Menu className="h-4 w-4" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="flex h-full w-[min(100%,20rem)] flex-col border-ink/10 bg-ivory p-0"
              >
                <SheetHeader className="border-b border-ink/10 px-6 py-5 text-left">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <YanovixLogo size="compact" onClick={() => setOpen(false)} />
                </SheetHeader>
                <div className="flex flex-col gap-1 px-3 py-4">
                  {links.map(([label, id]) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => go(id)}
                      className="rounded-xl px-4 py-3 text-left text-base text-ink/80 transition hover:bg-white hover:text-ink"
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <div className="mt-auto border-t border-ink/10 p-5">
                  <MagneticButton
                    tone="ember"
                    className="w-full justify-center"
                    onClick={() => go("contact")}
                  >
                    Let's talk <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}

/* -------------------- hero -------------------- */

function AiSystemVisual() {
  return (
    <div className="card-ink relative w-full overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] min-h-[220px]">
      {/* ambient grid + glows, reusing your existing tokens */}
      <div className="grid-ink pointer-events-none absolute inset-0 opacity-40" />
      <div className="glow-sage absolute -left-[8%] -top-[6%] h-[75%] w-[46%] animate-glow-drift" />
      <div
        className="glow-ember absolute -right-[10%] -top-[4%] h-[85%] w-[52%] animate-glow-pulse opacity-70"
        style={{ animationDelay: "2s" }}
      />

      {/* connecting beams — stays visible at every size, reads as an ambient energy field even with panels hidden on mobile */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 429"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="yvLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F3EFE7" stopOpacity="0" />
            <stop offset="50%" stopColor="#F3EFE7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#E8753D" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        <path id="yvVoice" className="yv-conn" d="M195,105 Q400,58 596,214" />
        <path id="yvAgent" className="yv-conn" d="M143,213 Q380,210 596,214" />
        <path id="yvFlow" className="yv-conn" d="M220,310 Q420,296 596,222" />
        <path id="yvDash" className="yv-conn" d="M792,92 Q690,150 606,205" />
        <path id="yvCloud" className="yv-conn" d="M815,300 Q710,268 610,225" />
        <path id="yvAnalytics" className="yv-conn" d="M605,358 Q605,290 602,232" />

        <path className="yv-pulse" d="M195,105 Q400,58 596,214" />
        <path
          className="yv-pulse"
          d="M143,213 Q380,210 596,214"
          style={{ animationDelay: "-1.4s" }}
        />
        <path
          className="yv-pulse"
          d="M220,310 Q420,296 596,222"
          style={{ animationDelay: "-2.6s" }}
        />
        <path
          className="yv-pulse"
          d="M792,92 Q690,150 606,205"
          style={{ animationDelay: "-0.8s" }}
        />
        <path
          className="yv-pulse"
          d="M815,300 Q710,268 610,225"
          style={{ animationDelay: "-3.4s" }}
        />
        <path
          className="yv-pulse"
          d="M605,358 Q605,290 602,232"
          style={{ animationDelay: "-2s" }}
        />

        <circle r="2.4" fill="#F3EFE7">
          <animateMotion dur="6s" repeatCount="indefinite">
            <mpath href="#yvVoice" />
          </animateMotion>
        </circle>
        <circle r="2.4" fill="#F3EFE7">
          <animateMotion dur="7s" repeatCount="indefinite" begin="-2s">
            <mpath href="#yvAgent" />
          </animateMotion>
        </circle>
        <circle r="2.4" fill="#E8753D">
          <animateMotion dur="6.5s" repeatCount="indefinite" begin="-3s">
            <mpath href="#yvFlow" />
          </animateMotion>
        </circle>
        <circle r="2.4" fill="#F3EFE7">
          <animateMotion dur="5.5s" repeatCount="indefinite" begin="-1s">
            <mpath href="#yvDash" />
          </animateMotion>
        </circle>
        <circle r="2.4" fill="#7E9C82">
          <animateMotion dur="7.5s" repeatCount="indefinite" begin="-4s">
            <mpath href="#yvCloud" />
          </animateMotion>
        </circle>
        <circle r="2.4" fill="#E8753D">
          <animateMotion dur="5s" repeatCount="indefinite" begin="-2.5s">
            <mpath href="#yvAnalytics" />
          </animateMotion>
        </circle>
      </svg>

      {/* floating ember dust */}
      {[
        { l: "20%", b: "10%", dur: "9s", delay: "0s" },
        { l: "35%", b: "15%", dur: "11s", delay: "2s" },
        { l: "48%", b: "8%", dur: "10s", delay: "4s" },
        { l: "65%", b: "20%", dur: "12s", delay: "1s" },
        { l: "72%", b: "6%", dur: "9.5s", delay: "5s" },
        { l: "28%", b: "30%", dur: "13s", delay: "3s" },
      ].map((p, i) => (
        <span
          key={i}
          className="yv-particle absolute h-[3px] w-[3px] rounded-full bg-ember"
          style={{ left: p.l, bottom: p.b, animationDuration: p.dur, animationDelay: p.delay }}
        />
      ))}

      {/* core: real YANOVIX mark, forced white so it reads on the dark card, wordmark aligned under it */}
      <div
        className="absolute left-1/2 top-1/2 aspect-square w-[46%] -translate-x-1/2 -translate-y-1/2
                   sm:w-[32%] lg:left-[60%] lg:w-[19%]"
      >
        <div className="absolute inset-0 rounded-full border border-ivory/10" />
        <div className="absolute inset-[14%] rounded-full border border-ember/20" />
        <div className="absolute inset-[28%] rounded-full border border-sage/20" />
        <div className="yv-breathe absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(232,117,61,0.42)_0%,rgba(232,117,61,0.10)_45%,transparent_72%)] blur-[6px]" />

        <div className="yv-breathe absolute inset-[20%] flex flex-col items-center justify-center gap-1.5">
          <div className="w-[56%] drop-shadow-[0_0_14px_rgba(232,117,61,0.55)] [&_svg]:h-auto [&_svg]:w-full [&_svg]:[filter:brightness(0)_invert(1)]">
            <YanovixLogo size="nav" />
          </div>
          <span className="text-[9px] font-medium uppercase leading-none tracking-[0.28em] text-ivory sm:text-[10px]">
            Yanovix
          </span>
        </div>

        <div className="yv-orbit-slow absolute -inset-[8%] rounded-full">
          <span className="absolute left-1/2 top-0 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ivory shadow-[0_0_6px_1px_rgba(232,117,61,0.35)]" />
        </div>
        <div className="yv-orbit-rev absolute inset-[8%] rounded-full">
          <span className="absolute left-1/2 top-0 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember shadow-[0_0_6px_1px_rgba(232,117,61,0.35)]" />
        </div>
      </div>

      {/* voice agent — hidden below lg, no room for legible text on phones */}
      <div className="yv-float-a absolute left-[10%] top-[16%] hidden w-[14%] rounded-[13px] border border-ivory/8 bg-white/[0.03] p-3 backdrop-blur-md lg:block">
        <div className="mb-1.5 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.13em] text-ivory/55">
          <span className="h-[5px] w-[5px] rounded-full bg-ember shadow-[0_0_6px_var(--tw-shadow-color)] shadow-ember/70 animate-pulse" />
          <Phone className="h-2.5 w-2.5" /> Voice Agent
        </div>
        <div className="flex h-6 items-end gap-[3px]">
          {[40, 70, 30, 85, 50, 65, 35].map((h, i) => (
            <span
              key={i}
              className="yv-bar w-[3px] rounded-sm bg-gradient-to-b from-ember to-ember/20"
              style={{ animationDelay: `${i * 0.15}s`, ["--yv-h" as string]: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* autonomous agent node — small, icon-only, safe to keep on all sizes */}
      <div className="absolute left-[7%] top-[47%] hidden aspect-square w-[4.6%] sm:block">
        <div className="yv-breathe-rev absolute inset-0 rounded-full border border-sage/30" />
        <div className="yv-breathe absolute inset-[20%] rounded-full bg-[radial-gradient(circle,rgba(126,156,130,0.9),rgba(126,156,130,0.15)_60%,transparent_80%)] shadow-[0_0_16px_4px_rgba(126,156,130,0.35)]" />
      </div>

      {/* workflow automation — hidden below lg */}
      <div className="yv-float-b absolute left-[11%] top-[70%] hidden w-[17%] lg:block">
        <div className="mb-1.5 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.13em] text-ivory/55">
          <Workflow className="h-2.5 w-2.5" /> Workflow
        </div>
        <div className="flex items-center gap-[9px]">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-[9px]">
              <span
                className="yv-wnode relative h-[7px] w-[7px] rounded-full bg-ivory/25"
                style={{ animationDelay: `${i * 0.7}s` }}
              />
              {i < 3 && <span className="h-px w-5 bg-ivory/15" />}
            </div>
          ))}
        </div>
      </div>

      {/* enterprise dashboard — hidden below lg */}
      <div className="yv-float-a absolute right-[8%] top-[13%] hidden w-[17%] rounded-[13px] border border-ivory/8 bg-white/[0.03] p-3 backdrop-blur-md lg:block">
        <div className="mb-1.5 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.13em] text-ivory/55">
          <span className="h-[5px] w-[5px] rounded-full bg-ember animate-pulse" />
          <Building2 className="h-2.5 w-2.5" /> Enterprise
        </div>
        <div className="grid grid-cols-2 gap-x-2.5 gap-y-1.5">
          <div>
            <div className="text-sm font-semibold text-ivory">1,284</div>
            <div className="text-[8px] uppercase tracking-wide text-ivory/40">Active Agents</div>
            <div className="text-[9px] text-ember">+12.4%</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-ivory">97%</div>
            <div className="text-[8px] uppercase tracking-wide text-ivory/40">Automations</div>
            <div className="text-[9px] text-ember">+2.3%</div>
          </div>
        </div>
      </div>

      {/* cloud infra — icon-only, safe to keep from sm up */}
      <div className="absolute right-[7%] top-[64%] hidden aspect-[1.3/1] w-[10.5%] sm:block">
        <div className="yv-breathe absolute inset-0 flex items-center justify-center border border-ivory/18 bg-white/[0.03] [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0%_50%)]">
          <Cloud className="h-3.5 w-3.5 text-ivory/50" />
        </div>
      </div>

      {/* analytics — hidden below lg */}
      <div className="yv-float-a absolute left-[52%] top-[76%] hidden w-[15%] lg:block">
        <div className="mb-1 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.13em] text-ivory/55">
          <LineChart className="h-2.5 w-2.5" /> Analytics
        </div>
        <svg className="yv-spark h-[22px] w-full" viewBox="0 0 120 22">
          <path
            d="M0,16 L15,9 L30,13 L45,4 L60,11 L75,5 L90,15 L105,7 L120,11"
            fill="none"
            stroke="#E8753D"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            className="drop-shadow-[0_0_3px_rgba(232,117,61,0.6)]"
          />
        </svg>
      </div>

      {/* scoped keyframes */}
      <style>{`
        .yv-conn{fill:none;stroke:url(#yvLineGrad);stroke-width:1.3;opacity:.32;}
        .yv-pulse{fill:none;stroke:#E8753D;stroke-width:1.5;stroke-dasharray:6 220;opacity:.9;
          filter:drop-shadow(0 0 3px #E8753D);animation:yvFlow 5s linear infinite;}
        @keyframes yvFlow{from{stroke-dashoffset:0;}to{stroke-dashoffset:-226;}}

        .yv-particle{opacity:0;box-shadow:0 0 6px 1px rgba(232,117,61,.35);animation:yvRise linear infinite;}
        @keyframes yvRise{0%{opacity:0;transform:translateY(0) scale(.6);}10%{opacity:.8;}85%{opacity:.4;}100%{opacity:0;transform:translateY(-120px) scale(1);}}

        .yv-breathe{animation:yvBreathe 6s ease-in-out infinite;}
        .yv-breathe-rev{animation:yvBreathe 5s ease-in-out infinite reverse;}
        @keyframes yvBreathe{0%,100%{transform:scale(1);opacity:.94;}50%{transform:scale(1.07);opacity:1;}}

        .yv-orbit-slow{animation:yvSpin 15s linear infinite;}
        .yv-orbit-rev{animation:yvSpin 23s linear infinite reverse;}
        @keyframes yvSpin{to{transform:rotate(360deg);}}

        .yv-float-a{animation:yvFloatA 9s ease-in-out infinite;}
        .yv-float-b{animation:yvFloatB 10s ease-in-out infinite;}
        @keyframes yvFloatA{0%,100%{transform:translateY(0);}50%{transform:translateY(-7px);}}
        @keyframes yvFloatB{0%,100%{transform:translateY(0);}50%{transform:translateY(8px);}}

        .yv-bar{height:20%;animation:yvBar 1.8s ease-in-out infinite;}
        @keyframes yvBar{0%,100%{height:20%;}50%{height:var(--yv-h,80%);}}

        .yv-wnode::after{content:'';position:absolute;inset:-4px;border-radius:9999px;background:#E8753D;opacity:0;animation:yvSeq 3.6s linear infinite;}
        @keyframes yvSeq{0%{opacity:0;transform:scale(.5);}10%{opacity:.9;transform:scale(1);}30%,100%{opacity:0;}}

        .yv-spark path{animation:yvFlow 4s linear infinite;}

        @media (prefers-reduced-motion: reduce){
          .yv-conn,.yv-pulse,.yv-particle,.yv-breathe,.yv-breathe-rev,.yv-orbit-slow,.yv-orbit-rev,
          .yv-float-a,.yv-float-b,.yv-bar,.yv-wnode::after,.yv-spark path{animation:none !important;}
        }
      `}</style>
    </div>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 120]);
  const y2 = useTransform(scrollY, [0, 600], [0, -80]);

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24">
      <SectionGlow tone="both" />
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute inset-0 grid-paper" />
      <motion.div
        aria-hidden
        style={{
          y: y2,
          background: "radial-gradient(closest-side, rgba(10,10,10,0.4), transparent)",
        }}
        className="pointer-events-none absolute -top-20 right-[10%] h-72 w-72 rounded-full opacity-70 blur-3xl animate-float"
      />
      <motion.div
        aria-hidden
        style={{
          y: y1,
          background: "radial-gradient(closest-side, rgba(82,82,82,0.4), transparent)",
        }}
        className="pointer-events-none absolute top-1/3 -left-16 h-80 w-80 rounded-full opacity-50 blur-3xl"
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow>Building with AI since 2019</Eyebrow>
          </Reveal>
          <h1 className="mt-8 text-5xl leading-[1.01] text-ink sm:text-6xl md:text-7xl lg:text-[92px]">
            <SplitWords text="AI agents. Voice AI." />
            <br />
            <SplitWords text="Software that" delay={0.35} />{" "}
            <span className="text-italic-serif text-ember">
              <SplitWords text="ships." delay={0.5} />
            </span>
          </h1>
          <Reveal delay={0.9}>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-ink/60">
              From chatbots and AI SDRs to CRM automations, WhatsApp flows, and custom SaaS - one
              senior team that builds it and stays past launch.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton
                tone="ember"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Talk to us <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton
                tone="ghost"
                onClick={() =>
                  document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Play className="h-3.5 w-3.5" /> See our work
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        {/* hero visual banner — now a live AI system instead of a video */}
        <Reveal delay={0.2} className="relative mx-auto mt-16 max-w-5xl">
          <div className="glow-ring overflow-hidden rounded-[28px] relative group">
            <AiSystemVisual />

            {/* Brand Badge – bottom right, unchanged */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 border border-white/10">
              <YanovixLogo size="nav" />
            </div>
          </div>
        </Reveal>

        {/* dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.2, 0.9, 0.2, 1] }}
          className="relative mx-auto mt-10 max-w-6xl"
          style={{ perspective: 1200 }}
        >
          <div className="rounded-[28px] border border-ink/10 bg-white p-2 shadow-[0_40px_120px_-40px_rgba(14,14,12,0.35)]">
            <div className="card-ink rounded-[22px] p-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-1.5">
                  {["#0A0A0A", "#525252", "#A3A3A3"].map((c) => (
                    <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
                  ))}
                </div>
                <div className="text-xs text-ivory/40">yanovix.ai / enterprise</div>
                <div className="flex items-center gap-1.5 text-xs text-ivory/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" /> Live
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  { label: "Active Agents", val: 1284, s: "", d: "+12.4%" },
                  { label: "Voice Calls / hr", val: 3420, s: "", d: "+8.1%" },
                  { label: "Automations", val: 97, s: "%", d: "+2.3%" },
                  { label: "MRR Impact", val: 1.4, s: "M", d: "+24%" },
                ].map((k, i) => (
                  <motion.div
                    key={k.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="rounded-xl border border-white/5 bg-white/[0.03] p-4"
                  >
                    <div className="text-[11px] uppercase tracking-widest text-ivory/40">
                      {k.label}
                    </div>
                    <div className="mt-2 text-2xl text-serif text-ivory">
                      {typeof k.val === "number" && k.val < 10 ? (
                        `$${k.val}${k.s}`
                      ) : (
                        <>
                          <Counter to={k.val as number} suffix={k.s} />
                        </>
                      )}
                    </div>
                    <div className="mt-1 text-xs text-ember">{k.d}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-5 md:col-span-2">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-sm text-ivory/70">Automation ROI</div>
                    <div className="text-xs text-ivory/40">Last 30 days</div>
                  </div>
                  <svg viewBox="0 0 400 140" className="h-32 w-full">
                    <defs>
                      <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#0A0A0A" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#525252" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
                      d="M0,110 C60,90 90,40 140,55 C190,70 220,20 270,32 C320,44 360,12 400,18"
                      stroke="#0A0A0A"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <motion.path
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 2.4 }}
                      d="M0,110 C60,90 90,40 140,55 C190,70 220,20 270,32 C320,44 360,12 400,18 L400,140 L0,140 Z"
                      fill="url(#lg)"
                    />
                  </svg>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-5">
                  <div className="text-sm text-ivory/70">Agent Activity</div>
                  <div className="mt-4 space-y-2.5">
                    {[
                      ["Sales AI", 84],
                      ["Voice AI", 92],
                      ["Support AI", 76],
                      ["SDR AI", 88],
                    ].map(([n, v], i) => (
                      <div
                        key={n as string}
                        className="flex items-center justify-between gap-3 text-xs"
                      >
                        <span className="text-ivory/60">{n as string}</span>
                        <div className="h-1 w-24 overflow-hidden rounded-full bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${v}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 1 + i * 0.15, ease: "easeOut" }}
                            className="h-full bg-ember"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="pointer-events-none absolute -left-4 top-1/4 hidden animate-float rounded-2xl border border-ink/10 bg-white p-4 shadow-[0_20px_50px_-20px_rgba(14,14,12,0.25)] lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-ink text-ivory">
                <Phone className="h-4 w-4" />
                <span className="absolute inset-0 rounded-xl animate-ping-soft border border-ember" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-ink/40">Voice Agent</div>
                <div className="text-sm text-ink">On a live call</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4 }}
            style={{ animationDelay: "1s" }}
            className="pointer-events-none absolute -right-4 bottom-1/4 hidden animate-float rounded-2xl border border-ink/10 bg-white p-4 shadow-[0_20px_50px_-20px_rgba(14,14,12,0.25)] lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-ember/10">
                <Bot className="h-4 w-4 text-ember" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-ink/40">AI SDR</div>
                <div className="text-sm text-ink">24 meetings booked today</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* stats */}
        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-4">
          {[
            { n: 500, s: "+", l: "Projects shipped" },
            { n: 98, s: "%", l: "Clients who stay" },
            { n: 24, s: "/7", l: "Support coverage" },
            { n: 15, s: "+", l: "Industries we know" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group relative bg-ivory p-8 text-center transition-colors hover:bg-white"
            >
              <div className="text-serif text-5xl text-ink md:text-6xl">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-ink/50">{s.l}</div>
              <span className="absolute inset-x-4 bottom-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- trusted -------------------- */

const LOGOS = [
  { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe" },
  { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github" },
  { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
  { name: "Notion", logo: "https://cdn.simpleicons.org/notion" },
  { name: "Linear", logo: "https://cdn.simpleicons.org/linear" },
  { name: "Tailwind", logo: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase" },
  { name: "Prisma", logo: "https://cdn.simpleicons.org/prisma" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
];

function Trusted() {
  const row = [...LOGOS, ...LOGOS];
  return (
    <section className="border-y border-ink/10 bg-white/40 py-14 backdrop-blur">
      <div className="container-x">
        <Reveal>
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-ink/40">
            The stack we build with
          </p>
        </Reveal>
      </div>
      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ivory to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ivory to-transparent" />
        <div className="flex w-max animate-marquee gap-14 px-8">
          {row.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 whitespace-nowrap text-serif text-2xl text-ink/50 transition hover:text-ink"
            >
              <div className="relative h-7 w-7 overflow-hidden rounded-md border border-ink/15 bg-white p-1 shadow-sm flex items-center justify-center">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- services -------------------- */

const SERVICE_ICONS = {
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

const SERVICES = SERVICE_CATALOG.map((s) => ({
  ...s,
  icon: SERVICE_ICONS[s.icon],
  desc: s.short,
}));

function ServiceCard({ s, i }: { s: (typeof SERVICES)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 15 });
  const sry = useSpring(ry, { stiffness: 150, damping: 15 });
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current!.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 8);
    rx.set(-py * 8);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };
  return (
    <Link to="/services/$slug" params={{ slug: s.slug }} className="block h-full">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
        className="group relative h-full overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(14,14,12,0.3)] hover:glow-ring"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-ember/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative">
          <div className="flex items-center justify-between">
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-ink/10 bg-ivory transition-colors duration-500 group-hover:border-ember group-hover:bg-ember group-hover:text-ivory">
              <s.icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <span className="text-xs text-ink/30">{String(i + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="mt-5 text-serif text-2xl text-ink">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/55">{s.desc}</p>
          <div className="mt-5 inline-flex items-center gap-1 text-xs text-ink/50 transition group-hover:text-ember">
            <span>Tell me more</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-32">
      <SectionGlow tone="ember" />
      <div className="container-x relative">
        <SectionHeader
          eyebrow="Services"
          title="What we actually"
          italic="build."
          sub="Voice agents, chatbots, custom SaaS, automations - one senior team that stays with you past launch."
        />
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- industries -------------------- */

const INDUSTRY_ICONS = {
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

const INDUSTRIES = INDUSTRY_CATALOG.map((ind) => ({
  ...ind,
  icon: INDUSTRY_ICONS[ind.icon],
  items: ind.capabilities,
}));

function Industries() {
  const featured = INDUSTRIES[0];
  const rest = INDUSTRIES.slice(1);

  return (
    <section id="industries" className="relative overflow-hidden py-32">
      <SectionGlow tone="sage" />
      <div
        className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(10,10,10,0.35), transparent)" }}
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Industries</Eyebrow>
          </Reveal>
          <h2 className="mt-6 text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl">
            <SplitWords text="Built for teams that" />{" "}
            <span className="text-italic-serif text-ember">can't wait.</span>
          </h2>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-xl text-base text-ink/60">
              Same senior builders. Playbooks tuned to how your industry actually operates - and how
              clients score the outcome.
            </p>
          </Reveal>
        </div>

        {/* Featured */}
        <Link
          to="/industries/$slug"
          params={{ slug: featured.slug }}
          className="group relative mt-14 block overflow-hidden rounded-[32px] border border-ink/10 bg-ink text-ivory"
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-90"
            style={{
              background: `radial-gradient(closest-side, ${featured.accent}99, transparent)`,
            }}
          />
          <div className="relative grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-10 lg:gap-12">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/5 text-ember">
                  <featured.icon className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-ivory/50">
                  Featured industry
                </span>
              </div>
              <h3 className="mt-6 text-serif text-4xl md:text-5xl">{featured.title}</h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ivory/60">
                {featured.short}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.items.slice(0, 4).map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-ivory/65"
                  >
                    {x}
                  </span>
                ))}
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-sm text-ember transition group-hover:gap-3">
                Explore {featured.title.toLowerCase()} <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 self-end">
              {featured.satisfaction.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <div className="text-serif text-2xl text-ember">{s.value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-ivory/40">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Link>

        {/* All industries */}
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((ind, i) => (
            <Link
              key={ind.slug}
              to="/industries/$slug"
              params={{ slug: ind.slug }}
              className="block h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (i % 3) * 0.05, duration: 0.55 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-ink/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ember/30 hover:shadow-[0_30px_60px_-35px_rgba(14,14,12,0.35)]"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
                  style={{
                    background: `radial-gradient(closest-side, ${ind.accent}66, transparent)`,
                  }}
                />
                <div className="relative flex items-start justify-between gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-ink/10 bg-ivory text-ember transition-colors duration-500 group-hover:border-ember group-hover:bg-ember group-hover:text-ivory">
                    <ind.icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-ink/25 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember" />
                </div>
                <h3 className="relative mt-5 text-serif text-2xl text-ink">{ind.title}</h3>
                <p className="relative mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-ink/50">
                  {ind.short}
                </p>
                <ul className="relative mt-4 space-y-1.5">
                  {ind.items.map((x) => (
                    <li key={x} className="flex items-center gap-2 text-xs text-ink/55">
                      <Check className="h-3 w-3 shrink-0 text-ember" />
                      {x}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-5 border-t border-ink/8 pt-4 text-[11px] uppercase tracking-widest text-ink/35 transition group-hover:text-ember">
                  See playbook
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- solutions -------------------- */
/* -------------------- solutions -------------------- */

const SOLUTIONS = [
  {
    title: "After-hours patient intake & booking",
    client: "Multi-location outpatient clinic network",
    desc: "Replaced after-hours voicemail with intelligent voice intake. Patients book appointments, verify insurance, and triage symptoms – all integrated directly into the clinic's EHR.",
    challenge: "Missed calls and no-shows were affecting capacity utilization.",
    tag: "Healthcare",
    stack: ["EHR Integration", "Twilio Voice", "HL7", "PostgreSQL"],
    metric: "12k+ hrs",
    metricLabel: "staff time saved annually",
    metricNote: "Projected from post-launch call volume.",
    year: "2024",
    visual: "healthcare",
  },
  {
    title: "Speed-to-lead for portal inquiries",
    client: "Regional residential brokerage",
    desc: "Reduced lead response time from hours to seconds using an AI layer that qualifies buyers and schedules tours without agent involvement.",
    challenge: "Agents were losing leads to slow response times.",
    tag: "Real Estate",
    stack: ["HubSpot", "AI Scoring", "n8n", "MLS API"],
    metric: "2.3x",
    metricLabel: "more showings booked",
    metricNote: "90-day window vs. prior quarter.",
    year: "2025",
    visual: "realestate",
  },
  {
    title: "Outbound voice for appointment setting",
    client: "B2B software sales team",
    desc: "Deployed an AI voice agent to qualify enterprise leads and book meetings directly into the CRM, increasing conversion while reducing manual dialing.",
    challenge: "SDRs were spending too much time on unqualified calls.",
    tag: "Sales Ops",
    stack: ["CRM API", "Salesforce", "Deepgram", "Redis"],
    metric: "+35%",
    metricLabel: "meetings booked per dial-hour",
    metricNote: "Compared to manual SDR pod.",
    year: "2024",
    visual: "salesops",
  },
  {
    title: "CRM copilot for account executives",
    client: "Mid-market SaaS account team",
    desc: "Embedded an AI assistant inside the CRM that drafts account briefs, suggests next steps, and automates follow-up tasks, giving AEs more time to sell.",
    challenge: "AEs spent too much time on data entry and prep.",
    tag: "B2B SaaS",
    stack: ["Salesforce LWC", "Claude API", "MCP", "React"],
    metric: "~4 hrs",
    metricLabel: "saved per AE weekly",
    metricNote: "Measured over a 6-week rollout.",
    year: "2025",
    visual: "saas",
  },
  {
    title: "High-volume resume screen + scheduling",
    client: "High-volume hiring team",
    desc: "Automated resume screening and interview scheduling for high-volume roles, reducing time-to-first-screen from days to hours while maintaining human oversight on borderline cases.",
    challenge: "Recruiters were overwhelmed by application volume.",
    tag: "Recruiting",
    stack: ["ATS API", "Node/React", "Embeddings", "AWS"],
    metric: "< 24h",
    metricLabel: "time to first screen",
    metricNote: "For priority roles.",
    year: "2024",
    visual: "recruiting",
  },
  {
    title: "WhatsApp storefront & support desk",
    client: "DTC apparel brand",
    desc: "Launched a conversational commerce layer on WhatsApp, integrating product catalog, abandoned cart recovery, and order tracking directly with the storefront.",
    challenge: "High cart abandonment and fragmented support.",
    tag: "E-commerce",
    stack: ["WhatsApp Cloud", "Shopify", "Make", "Zendesk"],
    metric: "1.9x",
    metricLabel: "cart recovery rate",
    metricNote: "Vs. email-only recovery.",
    year: "2025",
    visual: "ecommerce",
  },
  {
    title: "Order-to-cash exception automation",
    client: "Industrial distributor",
    desc: "Automated invoice matching and exception handling across ERP systems, reducing reconciliation time and improving audit trails.",
    challenge: "Manual reconciliation was causing payment delays.",
    tag: "Enterprise Ops",
    stack: ["ERP API", "NetSuite", "n8n", "Okta"],
    metric: "-60%",
    metricLabel: "cycle time reduction",
    metricNote: "Touch time from receipt to posted.",
    year: "2024",
    visual: "enterprise",
  },
  {
    title: "Dispatch alerts & shipment status desk",
    client: "Regional freight carrier",
    desc: "Replaced manual tracking inquiries with proactive SMS/email alerts, automated exception handling, and a self-serve tracking portal.",
    challenge: "Support tickets for 'Where is my freight?' were overwhelming.",
    tag: "Logistics",
    stack: ["TMS Webhooks", "Twilio SMS", "n8n", "Tableau"],
    metric: "-38%",
    metricLabel: "reduction in status-check tickets",
    metricNote: "8 weeks post-launch.",
    year: "2025",
    visual: "logistics",
  },
  {
    title: "Admissions Q&A and application status",
    client: "Private college admissions office",
    desc: "Deployed a RAG-based assistant to answer admissions FAQs and provide application status, deflecting a majority of repetitive counselor inquiries.",
    challenge: "Counselors were overwhelmed with repetitive deadline/document questions.",
    tag: "Education",
    stack: ["RAG", "Web Chat", "SIS API", "Slack"],
    metric: "~55%",
    metricLabel: "deflection rate",
    metricNote: "During peak enrollment months.",
    year: "2024",
    visual: "education",
  },
];

/* ---- animated per-category card visual (replaces the picsum photo) ---- */

function SolutionVisual({ kind }: { kind: string }) {
  const common =
    "absolute inset-0 flex items-center justify-center overflow-hidden bg-[linear-gradient(150deg,#0A0A0A_0%,#141412_60%,#0A0A0A_100%)]";

  return (
    <div className={common}>
      <div className="pointer-events-none absolute inset-0 grid-ink opacity-30" />
      <div className="glow-ember absolute -right-10 -top-10 h-40 w-40 opacity-50 transition-opacity duration-500 group-hover:opacity-90" />
      <div className="glow-sage absolute -bottom-10 -left-10 h-36 w-36 opacity-30 transition-opacity duration-500 group-hover:opacity-60" />

      {kind === "healthcare" && (
        <svg viewBox="0 0 200 100" className="relative h-2/3 w-2/3">
          <path
            d="M0,50 L40,50 L52,20 L64,80 L76,35 L88,50 L200,50"
            fill="none"
            stroke="#E8753D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sv-pulse-line"
          />
          <circle cx="88" cy="50" r="3.5" fill="#F3EFE7" className="sv-dot" />
        </svg>
      )}

      {kind === "realestate" && (
        <svg viewBox="0 0 100 100" className="relative h-1/2 w-1/2">
          <circle
            cx="50"
            cy="40"
            r="26"
            fill="none"
            stroke="#7E9C82"
            strokeWidth="1.5"
            className="sv-ring"
          />
          <path
            d="M50 20 C64 20 74 31 74 44 C74 62 50 82 50 82 C50 82 26 62 26 44 C26 31 36 20 50 20 Z"
            fill="none"
            stroke="#E8753D"
            strokeWidth="2"
          />
          <circle cx="50" cy="44" r="6" fill="#E8753D" className="sv-dot" />
        </svg>
      )}

      {kind === "salesops" && (
        <svg viewBox="0 0 120 100" className="relative h-2/3 w-2/3">
          <circle
            cx="60"
            cy="50"
            r="20"
            fill="none"
            stroke="#E8753D"
            strokeWidth="2"
            className="sv-ring-fast"
          />
          <circle
            cx="60"
            cy="50"
            r="32"
            fill="none"
            stroke="#F3EFE7"
            strokeWidth="1"
            opacity="0.25"
            className="sv-ring-fast"
            style={{ animationDelay: "-.6s" }}
          />
          <circle cx="60" cy="50" r="4" fill="#F3EFE7" />
        </svg>
      )}

      {kind === "saas" && (
        <svg viewBox="0 0 160 100" className="relative h-2/3 w-3/4">
          {[20, 45, 70, 95, 120].map((x, i) => (
            <rect
              key={x}
              x={x}
              y={70 - [30, 55, 20, 45, 60][i]}
              width="10"
              height={[30, 55, 20, 45, 60][i]}
              rx="2"
              fill={i % 2 ? "#E8753D" : "#F3EFE7"}
              opacity={i % 2 ? 0.9 : 0.3}
              className="sv-bar"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      )}

      {kind === "recruiting" && (
        <svg viewBox="0 0 140 100" className="relative h-2/3 w-3/4">
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              cx={40 + i * 30}
              cy="50"
              r="12"
              fill="none"
              stroke={i === 1 ? "#E8753D" : "#F3EFE7"}
              strokeOpacity={i === 1 ? 1 : 0.35}
              strokeWidth="2"
              className="sv-check"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </svg>
      )}

      {kind === "ecommerce" && (
        <svg viewBox="0 0 100 100" className="relative h-1/2 w-1/2">
          <rect
            x="25"
            y="35"
            width="50"
            height="45"
            rx="4"
            fill="none"
            stroke="#E8753D"
            strokeWidth="2"
          />
          <path
            d="M35 35 L35 25 A15 15 0 0 1 65 25 L65 35"
            fill="none"
            stroke="#F3EFE7"
            strokeWidth="2"
            opacity="0.5"
          />
          <circle cx="50" cy="57" r="6" fill="#7E9C82" className="sv-dot" />
        </svg>
      )}

      {kind === "enterprise" && (
        <svg viewBox="0 0 140 100" className="relative h-2/3 w-3/4">
          <rect
            x="15"
            y="30"
            width="45"
            height="40"
            rx="4"
            fill="none"
            stroke="#F3EFE7"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <rect
            x="80"
            y="30"
            width="45"
            height="40"
            rx="4"
            fill="none"
            stroke="#F3EFE7"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <path
            d="M60 50 H80"
            stroke="#E8753D"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="sv-flow"
          />
          <circle cx="60" cy="50" r="3" fill="#E8753D" />
          <circle cx="80" cy="50" r="3" fill="#E8753D" />
        </svg>
      )}

      {kind === "logistics" && (
        <svg viewBox="0 0 160 100" className="relative h-2/3 w-3/4">
          <path d="M10,70 H150" stroke="#F3EFE7" strokeWidth="1" opacity="0.2" />
          <circle cx="10" cy="70" r="3" fill="#F3EFE7" opacity="0.5" />
          <circle cx="150" cy="70" r="5" fill="#7E9C82" />
          <circle r="4" fill="#E8753D" className="sv-move">
            <animateMotion dur="3.2s" repeatCount="indefinite" path="M10,70 H150" />
          </circle>
        </svg>
      )}

      {kind === "education" && (
        <svg viewBox="0 0 100 100" className="relative h-1/2 w-1/2">
          <path
            d="M50 25 L85 40 L50 55 L15 40 Z"
            fill="none"
            stroke="#E8753D"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M30 46 V64 Q50 74 70 64 V46"
            fill="none"
            stroke="#F3EFE7"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <circle cx="50" cy="40" r="2.5" fill="#F3EFE7" className="sv-dot" />
        </svg>
      )}

      <style>{`
        .sv-pulse-line{stroke-dasharray:260;stroke-dashoffset:260;animation:svDraw 3.4s ease-in-out infinite;}
        @keyframes svDraw{0%{stroke-dashoffset:260;}55%{stroke-dashoffset:0;}100%{stroke-dashoffset:-260;}}
        .sv-dot{animation:svBlink 2s ease-in-out infinite;}
        @keyframes svBlink{0%,100%{opacity:.4;transform:scale(1);}50%{opacity:1;transform:scale(1.4);}}
        .sv-ring{animation:svBreathe 4s ease-in-out infinite;transform-origin:center;}
        @keyframes svBreathe{0%,100%{transform:scale(1);opacity:.6;}50%{transform:scale(1.12);opacity:1;}}
        .sv-ring-fast{animation:svSpin 6s linear infinite;transform-origin:center;}
        @keyframes svSpin{to{transform:rotate(360deg);}}
        .sv-bar{animation:svGrow 2.4s ease-in-out infinite;transform-origin:bottom;}
        @keyframes svGrow{0%,100%{transform:scaleY(.75);}50%{transform:scaleY(1);}}
        .sv-check{stroke-dasharray:80;stroke-dashoffset:80;animation:svCheck 3s ease-in-out infinite;}
        @keyframes svCheck{0%{stroke-dashoffset:80;}40%,60%{stroke-dashoffset:0;}100%{stroke-dashoffset:-80;}}
        .sv-flow{animation:svFlow 1.6s linear infinite;}
        @keyframes svFlow{to{stroke-dashoffset:-16;}}
        @media (prefers-reduced-motion: reduce){
          .sv-pulse-line,.sv-dot,.sv-ring,.sv-ring-fast,.sv-bar,.sv-check,.sv-flow{animation:none !important;}
        }
      `}</style>
    </div>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="relative py-32">
      <SectionGlow tone="both" />
      <div className="container-x relative">
        <SectionHeader
          eyebrow="Featured projects"
          title="Work that held up"
          italic="in production."
          sub="Client names withheld by request in some cases — the constraints, stacks, and measured outcomes are from real engagement patterns."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(14,14,12,0.3)] hover:glow-ring"
            >
              <div className="relative w-full overflow-hidden aspect-video">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <SolutionVisual kind={s.visual} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />
                <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/20 bg-white/85 px-3 py-1 text-[11px] uppercase tracking-widest text-ink/70 backdrop-blur">
                    {s.tag}
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/85 px-3 py-1 text-[11px] text-ink/50 backdrop-blur">
                    {s.year}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-14">
                  <div className="text-serif text-3xl leading-none text-ember">{s.metric}</div>
                  <div className="mt-1 text-xs leading-snug text-ivory/80">{s.metricLabel}</div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <div className="text-[11px] uppercase tracking-widest text-ink/40">{s.client}</div>
                <h3 className="mt-2 text-serif text-2xl leading-snug text-ink">{s.title}</h3>
                <p className="mt-3 text-xs font-medium text-ink/45">
                  Starting point: <span className="font-normal text-ink/55">{s.challenge}</span>
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">{s.desc}</p>
                <p className="mt-4 text-[11px] italic text-ink/40">{s.metricNote}</p>
                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-ink/8 pt-4">
                  {s.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-ink/10 bg-ivory px-2.5 py-1 text-[10px] uppercase tracking-wider text-ink/55"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- visual break -------------------- */

function VisualBreak() {
  // Video ref and state
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <section className="relative py-10 md:py-16">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          <Reveal className="md:col-span-7">
            <div className="group relative overflow-hidden rounded-[28px]">
              <div className="glow-ring overflow-hidden rounded-[28px]">
                {/* hero visual banner */}
                <Reveal delay={0.2} className="relative mx-auto mt-16 max-w-5xl">
                  <div className="glow-ring overflow-hidden rounded-[28px] relative group">
                    {/* Video */}
                    <video
                      ref={videoRef}
                      className="aspect-[21/9] min-h-[180px] w-full object-cover"
                    >
                      <source src={introVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Overlay – dark gradient + play button on hover */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center cursor-pointer"
                      onClick={togglePlay}
                    >
                      {/* Centered Play/Pause button */}
                      <div className="bg-white/20 backdrop-blur-md rounded-full p-2 shadow-xl hover:scale-110 transition-transform duration-300">
                        {isPlaying ? (
                          <Pause className="h-7 w-7 text-white fill-white" />
                        ) : (
                          <Play className="h-7 w-7 text-white fill-white ml-1" />
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-ivory/60">
                    Live systems
                  </div>
                  <div className="mt-1 text-serif text-2xl text-ivory md:text-3xl">
                    Voice, agents, ops
                  </div>
                </div>
                <Link
                  to="/"
                  hash="case-studies"
                  className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-ivory backdrop-blur-md transition hover:bg-ember translate-y-3"
                >
                  See outcomes <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <div className="relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden rounded-[28px] border border-ink/10 bg-ink p-8 text-ivory">
              <div className="glow-ember absolute -right-10 -top-10 h-40 w-40 animate-glow-pulse" />
              <div className="glow-sage absolute -bottom-16 -left-10 h-36 w-36 opacity-60" />
              <div className="relative">
                <Eyebrow>In the wild</Eyebrow>
                <p className="mt-5 text-serif text-3xl leading-snug text-ivory md:text-[2.1rem]">
                  Agents that answer. Workflows that move. Dashboards your team actually opens.
                </p>
              </div>
              <div className="relative mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="overflow-hidden rounded-2xl ring-2 ring-ember/40 bg-white w-16 h-14 flex items-center justify-center">
                    <img src={visualMark} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="text-sm leading-snug text-ivory/55">
                    Built for operators who measure outcomes, not slide decks.
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { to: "healthcare", label: "Healthcare" },
                    { to: "real-estate", label: "Real Estate" },
                    { to: "logistics", label: "Logistics" },
                  ].map((x) => (
                    <Link
                      key={x.to}
                      to="/industries/$slug"
                      params={{ slug: x.to }}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-ivory/60 transition hover:border-ember hover:text-ivory"
                    >
                      {x.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------- case studies -------------------- */

const CASES = [
  {
    client: "Multi-clinic outpatient network",
    project: "Patient intake & booking",
    industry: "Healthcare",
    summary:
      "Replaced after-hours voicemail with voice and web intake across 14 clinics. Bookings write into the live schedule; clinical edge cases warm-transfer with context. Compliance reviewed logging and access before go-live.",
    kpis: [
      { l: "Staff hours redirected", v: "~11k/yr" },
      { l: "After-hours coverage", v: "24/7" },
      { l: "Go-live", v: "7 wks" },
    ],
  },
  {
    client: "Regional residential brokerage",
    project: "Portal lead response layer",
    industry: "Real Estate",
    summary:
      "Instant qualification on portal leads, listing-aware answers, and HubSpot handoff so agents only talk to tour-ready buyers. Nights and weekends no longer go cold.",
    kpis: [
      { l: "Showings from same volume", v: "2.4x" },
      { l: "First response", v: "seconds" },
      { l: "Window measured", v: "90 days" },
    ],
  },
  {
    client: "Mid-market litigation practice",
    project: "Matter intake & consult booking",
    industry: "Law",
    summary:
      "Structured intake by practice area, conflict notes for attorney review, and consult scheduling that stopped reinventing the questionnaire in email every time.",
    kpis: [
      { l: "Complete intakes", v: "up" },
      { l: "Time to consult", v: "faster" },
      { l: "Attorney review", v: "required" },
    ],
  },
  {
    client: "Industrial distributor",
    project: "Order-to-cash exceptions",
    industry: "Enterprise",
    summary:
      "Routine invoice matches clear across SAP and NetSuite; breaks land in a queue with context and an audit trail. Okta SSO and roles from the first environment.",
    kpis: [
      { l: "Matched invoice cycle", v: "-61%" },
      { l: "Exception queue", v: "live" },
      { l: "Audit trail", v: "full" },
    ],
  },
];
function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Case Studies"
          title="Results you can"
          italic="point to."
          sub="Engagements we owned from the first workshop through go-live - and stuck around to tune."
        />
        <div className="mt-16 space-y-5">
          {CASES.map((c, i) => (
            <motion.article
              key={c.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="group card-ink overflow-hidden rounded-3xl p-8 md:p-10"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-ivory/40">
                    {c.industry}
                  </div>
                  <h3 className="mt-3 text-serif text-4xl text-ivory">{c.client}</h3>
                  <div className="mt-2 text-sm font-medium text-ember">{c.project}</div>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/60">{c.summary}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-ember transition hover:gap-3"
                  >
                    Want something like this? <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-3">
                  {c.kpis.map((k, ki) => (
                    <motion.div
                      key={k.l}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + ki * 0.1 }}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 text-center transition-colors group-hover:bg-white/[0.06]"
                    >
                      <div className="text-serif text-4xl text-ivory">{k.v}</div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                        {k.l}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- process -------------------- */

const STEPS = [
  {
    n: "01",
    t: "Discovery",
    d: "We sit with your team, map how work actually gets done, and find the bottlenecks.",
  },
  {
    n: "02",
    t: "Strategy",
    d: "A clear plan: what we build first, how we measure success, and how it fits your stack.",
  },
  {
    n: "03",
    t: "Design",
    d: "Flows, prompts, and interfaces sketched so everyone agrees before we write a lot of code.",
  },
  {
    n: "04",
    t: "Development",
    d: "We build in short cycles, demo weekly, and ship with CI/CD from the start.",
  },
  {
    n: "05",
    t: "Deployment",
    d: "Careful rollout, real integrations, load checks, then go-live with eyes on the metrics.",
  },
  {
    n: "06",
    t: "Support",
    d: "We keep watching, fixing, and improving after launch - not vanishing after the invoice.",
  },
];
function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 40%"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section id="process" className="relative bg-white/40 py-32">
      <div className="container-x">
        <SectionHeader eyebrow="Our Process" title="How we work," italic="without the fluff." />
        <div ref={ref} className="relative mx-auto mt-20 max-w-4xl">
          <div className="absolute left-6 top-0 h-full w-px bg-ink/10 md:left-1/2" />
          <motion.div
            style={{ height }}
            className="absolute left-6 top-0 w-px bg-ember md:left-1/2"
          />
          <div className="space-y-14">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={cn(
                  "relative grid grid-cols-1 gap-6 md:grid-cols-2",
                  i % 2 && "md:[&>*:first-child]:col-start-2",
                )}
              >
                <div className={cn(i % 2 ? "md:pl-14" : "md:pr-14 md:text-right")}>
                  <div className="rounded-2xl border border-ink/10 bg-white p-6 transition-shadow duration-500 hover:shadow-[0_20px_50px_-20px_rgba(14,14,12,0.25)]">
                    <div className="text-serif text-3xl text-ember">{s.n}</div>
                    <h3 className="mt-1 text-serif text-2xl text-ink">{s.t}</h3>
                    <p className="mt-2 text-sm text-ink/55">{s.d}</p>
                  </div>
                </div>
                <div className="absolute left-6 top-8 z-10 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-ember ring-4 ring-ivory md:left-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- technologies -------------------- */

const TECH = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "TypeScript",
  "Python",
  "FastAPI",
  "LangChain",
  "OpenAI",
  "Anthropic",
  "Google Gemini",
  "Pinecone",
  "Supabase",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "n8n",
  "Zapier",
  "Make",
];
function Technologies() {
  return (
    <section className="relative py-32">
      <div className="container-x">
        <SectionHeader eyebrow="Technologies" title="Tools we use" italic="every day." />
        <div className="mt-14 flex flex-wrap justify-center gap-2.5">
          {TECH.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="rounded-full border border-ink/10 bg-white px-5 py-2.5 text-sm text-ink/75 transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- clients reviews -------------------- */
const REVIEWS = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "Cloudveil",
    quote:
      "Yanovix took our vague idea and turned it into a production-ready system in weeks. Their team actually understood our stack and didn't try to sell us things we didn't need.",
    avatarUrl: "https://i.pravatar.cc/150?img=1", // female
  },
  {
    name: "Marcus Rivera",
    role: "Head of Operations",
    company: "Northwind",
    quote:
      "We were drowning in manual data entry. Their automation cut our processing time by 70% and the team was a pleasure to work with.",
    avatarUrl: "https://i.pravatar.cc/150?img=2", // male
  },
  {
    name: "Aisha Patel",
    role: "Product Director",
    company: "Meridian",
    quote:
      "The voice AI they built for our customer support is indistinguishable from our best human agents. Our CSAT scores actually went up.",
    avatarUrl: "https://i.pravatar.cc/150?img=3", // female
  },
  {
    name: "James Okafor",
    role: "CTO",
    company: "Helix Health",
    quote:
      "Security and compliance were non-negotiable for us. Yanovix delivered both without slowing down. They're now our go-to for AI projects.",
    avatarUrl: "https://i.pravatar.cc/150?img=4", // male
  },
  {
    name: "Elena Vogt",
    role: "VP of Sales",
    company: "Ironclad",
    quote:
      "Our SDR team was skeptical about AI, but the agent they built booked more meetings than any human in the first month. Now we can't imagine working without it.",
    avatarUrl: "https://i.pravatar.cc/150?img=5", // female
  },
  {
    name: "David Kim",
    role: "Supply Chain Lead",
    company: "Apex Logistics",
    quote:
      "They connected our TMS and ERP in ways we thought were impossible. The ROI was visible within 30 days.",
    avatarUrl: "https://i.pravatar.cc/150?img=6", // male
  },
  {
    name: "Lina Westerberg",
    role: "Head of People",
    company: "Quorum",
    quote:
      "The recruitment automation they built saved our talent team 15 hours a week. We've already extended our contract.",
    avatarUrl: "https://i.pravatar.cc/150?img=7", // female
  },
  {
    name: "Tomás Silva",
    role: "VP of Product",
    company: "Orbit Realty",
    quote:
      "Portal leads now get a response in seconds, not hours. Our agents love the quality of the handoff. It's a game changer.",
    avatarUrl: "https://i.pravatar.cc/150?img=8", // male
  },
];

function ClientReviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  return (
    <section className="relative py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Client Reviews"
          title="What our clients"
          italic="say."
          sub="Real feedback from teams that shipped with us. No fluff, just results."
        />

        <div className="relative mt-16">
          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {REVIEWS.map((review, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="h-full rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
                  >
                    <div className="flex items-start gap-4">
                      {/* Avatar Image with Fallback */}
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-ink/5">
                        <img
                          src={review.avatarUrl}
                          alt={review.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            // Fallback to initials on error
                            const target = e.currentTarget;
                            target.style.display = "none";
                            const parent = target.parentElement!;
                            const fallback = document.createElement("span");
                            fallback.className =
                              "flex h-full w-full items-center justify-center text-lg font-medium text-ink/70";
                            fallback.textContent = review.name
                              .split(" ")
                              .map((word) => word[0])
                              .join("")
                              .slice(0, 2)
                              .toUpperCase();
                            parent.appendChild(fallback);
                          }}
                        />
                      </div>
                      <div>
                        <div className="font-medium text-ink">{review.name}</div>
                        <div className="text-sm text-ink/55">
                          {review.role}, {review.company}
                        </div>
                      </div>
                    </div>
                    <blockquote className="mt-4 text-sm leading-relaxed text-ink/75">
                      “{review.quote}”
                    </blockquote>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full border border-ink/10 bg-white p-2 text-ink/60 shadow-md transition hover:border-ink hover:bg-ink hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 md:-translate-x-6"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full border border-ink/10 bg-white p-2 text-ink/60 shadow-md transition hover:border-ink hover:bg-ink hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 md:translate-x-6"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === selectedIndex ? "w-6 bg-ink" : "w-2 bg-ink/20 hover:bg-ink/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- why -------------------- */

const WHY = [
  {
    icon: whySecurity,
    t: "Security that checks out",
    d: "SSO, roles, encryption, and logs your security team can review.",
  },
  {
    icon: whyWeMove,
    t: "We move",
    d: "You see something working in weeks, not a deck in three months.",
  },
  {
    icon: whyRealTeam,
    t: "A real team",
    d: "Senior people you can Slack - not a rotating cast of juniors.",
  },
  {
    icon: whyAroundClock,
    t: "Around-the-clock help",
    d: "Someone is awake when something breaks - wherever you are.",
  },
  {
    icon: whyBuiltToGrow,
    t: "Built to grow",
    d: "Architecture that does not fall over when usage spikes.",
  },
  {
    icon: whyNoBlackBoxes,
    t: "No black boxes",
    d: "Shared Slack, weekly demos, and dashboards you can open anytime.",
  },
  {
    icon: whyKnowAi,
    t: "People who know AI",
    d: "Not generalists guessing prompts - people who ship this for a living.",
  },
  {
    icon: whyCloudFluent,
    t: "Cloud-fluent",
    d: "AWS, Azure, and GCP experience when your infra needs it.",
  },
];
function Why() {
  return (
    <section className="relative py-32">
      <div className="container-x">
        <SectionHeader eyebrow="Why YANOVIX" title="Why teams stick" italic="with us." />
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => (
            <motion.div
              key={w.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.06 }}
              className="group bg-white p-7 transition-colors hover:bg-ivory-2"
            >
              <img
                src={w.icon}
                alt=""
                className="h-8 w-8 object-contain transition-transform duration-500 group-hover:-rotate-6"
                loading="lazy"
              />
              <h3 className="mt-5 text-serif text-xl text-ink">{w.t}</h3>
              <p className="mt-1.5 text-sm text-ink/55">{w.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- testimonials -------------------- */

const TESTIMONIALS = [
  {
    q: "We had a 22-person phone bank drowning in intake calls. Yanovix rebuilt that with voice AI in six weeks. Booking conversion roughly tripled. I still get stopped in the hallway and asked how we pulled it off.",
    n: "Dr. Amelia Rowe",
    r: "COO",
    company: "Helix Health Network",
    context: "Patient intake / Voice AI",
    metric: "3x",
    metricLabel: "booking conversion",
    timeframe: "Shipped in 6 weeks",
    accent: "#0A0A0A",
    photo: reviewerAmelia,
    bg: testimonialHelixBg,
  },
  {
    q: "I'll be honest - I didn't believe an AI SDR could outperform our best reps. Six weeks in, it was booking more qualified meetings than anyone on the floor. I was skeptical. I'm not anymore.",
    n: "Marcus Chen",
    r: "VP of Growth",
    company: "Northwind",
    context: "Outbound sales / AI SDR",
    metric: "+41%",
    metricLabel: "qualified meetings",
    timeframe: "Live in production",
    accent: "#525252",
    photo: reviewerMarcus,
  },
  {
    q: "Most vendors talk like a startup and deliver like a mess - or they move like a giant consultancy. Yanovix somehow does neither. Enterprise security, actual velocity. That combo is rare. We keep extending the retainer.",
    n: "Priya Ramanathan",
    r: "CTO",
    company: "Meridian Industrial",
    context: "Ops automation / SAP / NetSuite",
    metric: "9.4x",
    metricLabel: "automation ROI",
    timeframe: "Ongoing partnership",
    accent: "#171717",
    photo: reviewerPriya,
  },
];

function Testimonials() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 bg-white/50" />
      <div
        className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(10,10,10,0.25), transparent)" }}
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Client stories</Eyebrow>
          </Reveal>
          <h2 className="mt-6 text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl">
            <SplitWords text="Don't take our word" />{" "}
            <span className="text-italic-serif text-ember">for it.</span>
          </h2>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-xl text-base text-ink/60">
              Real operators. Real timelines. The kind of feedback you only get after something
              actually ships.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Featured */}
          <motion.figure
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.2, 0.9, 0.2, 1] }}
            className="group relative flex flex-col overflow-hidden rounded-[28px] border border-ink/10 bg-ink p-8 text-ivory md:p-10 lg:col-span-7 lg:row-span-2 lg:min-h-[520px]"
          >
            <img
              src={TESTIMONIALS[0].bg}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ink/92 via-ink/88 to-ink/70" />
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-50 blur-3xl transition-opacity duration-700 group-hover:opacity-80"
              style={{
                background: `radial-gradient(closest-side, ${TESTIMONIALS[0].accent}88, transparent)`,
              }}
            />
            <div className="relative flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-ivory/55 backdrop-blur-sm">
                {TESTIMONIALS[0].context}
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-ivory/45 backdrop-blur-sm">
                {TESTIMONIALS[0].timeframe}
              </span>
            </div>
            <blockquote className="relative mt-8 flex-1 text-serif text-2xl leading-snug text-ivory sm:text-3xl md:text-[2.1rem] md:leading-[1.25]">
              &ldquo;{TESTIMONIALS[0].q}&rdquo;
            </blockquote>
            <div className="relative mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-8">
              <figcaption className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl ring-2 ring-ember/40 ring-offset-2 ring-offset-ink">
                  <img
                    src={TESTIMONIALS[0].photo}
                    alt={TESTIMONIALS[0].n}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-base font-medium text-ivory">{TESTIMONIALS[0].n}</div>
                  <div className="text-sm text-ivory/50">
                    {TESTIMONIALS[0].r}, {TESTIMONIALS[0].company}
                  </div>
                </div>
              </figcaption>
              <div className="text-right">
                <div className="text-serif text-4xl text-ember">{TESTIMONIALS[0].metric}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                  {TESTIMONIALS[0].metricLabel}
                </div>
              </div>
            </div>
          </motion.figure>

          {/* Side cards */}
          {TESTIMONIALS.slice(1).map((t, i) => (
            <motion.figure
              key={t.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.7 }}
              className="group relative flex flex-col overflow-hidden rounded-[28px] border border-ink/10 bg-white p-7 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(14,14,12,0.28)] lg:col-span-5"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-ink/10 bg-ivory px-3 py-1 text-[11px] uppercase tracking-widest text-ink/50">
                  {t.context}
                </span>
              </div>
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-ink/80">
                &ldquo;{t.q}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-ink/8 pt-5">
                <figcaption className="flex min-w-0 items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl ring-2 ring-ink/10">
                    <img
                      src={t.photo}
                      alt={t.n}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium text-ink">{t.n}</div>
                    <div className="truncate text-xs text-ink/45">
                      {t.r}, {t.company}
                    </div>
                  </div>
                </figcaption>
                <div className="shrink-0 text-right">
                  <div className="text-serif text-2xl text-ink">{t.metric}</div>
                  <div className="text-[9px] uppercase tracking-widest text-ink/35">
                    {t.metricLabel}
                  </div>
                </div>
              </div>
              <div className="mt-3 text-[11px] text-ink/35">{t.timeframe}</div>
            </motion.figure>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm text-ink/45">
            Names and roles match the teams we worked with. Numbers come from their post-launch
            reviews.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- faq -------------------- */

const FAQS = [
  {
    cat: "Timeline",
    q: "How fast can you ship something real?",
    a: "Most engagements hit a first production release in 4 to 8 weeks - not a slide deck. Week one is discovery and success metrics; weeks two through four are build and weekly demos; then we harden, integrate, and go live.",
    points: [
      "Pilot scope locked in the first week",
      "Weekly demos so stakeholders see progress",
      "CI/CD and monitoring from the first deploy",
    ],
  },
  {
    cat: "Engagement",
    q: "How do you typically engage with a team?",
    a: "Two common paths: a fixed-scope pilot when you want proof fast, or a dedicated senior pod when you need ongoing delivery. Either way you get a named lead, shared Slack, and a living roadmap - not a rotating bench of juniors.",
    points: [
      "Fixed-scope pilots for a clear first win",
      "Retainer pods for continuous shipping",
      "Direct access to the people writing the code",
    ],
  },
  {
    cat: "Process",
    q: "Can you work with our legal and procurement process?",
    a: "Yes. We regularly clear NDAs, DPAs, MSAs, vendor onboarding, and security questionnaires for enterprise and regulated teams. Share your packet early and we will work to your timeline instead of fighting it.",
  },
  {
    cat: "Coverage",
    q: "Where do you work, and who is awake when something breaks?",
    a: "We support teams across the US, Canada, UK, Australia, Germany, Netherlands, Singapore, and the UAE. Coverage is built for follow-the-sun support - someone is available when production needs attention, not only during one office's business hours.",
  },
  {
    cat: "Stack",
    q: "Do we have to rip out our current tools?",
    a: "Usually no. We integrate with the CRM, telephony, messaging, and cloud you already run - HubSpot, Salesforce, WhatsApp, Twilio, AWS, Azure, GCP, and similar. We replace systems only when they are clearly blocking the outcome.",
    points: [
      "APIs and webhooks over forced migrations",
      "Works alongside your existing data model",
      "Clear ownership of what we touch vs what stays yours",
    ],
  },
  {
    cat: "Security",
    q: "How do you handle security and compliance?",
    a: "SSO, role-based access, encryption in transit and at rest, and audit logs are the default baseline. We design to the bar your industry needs - healthcare, finance, legal, or internal IT review - and document decisions so your security team can evaluate the system.",
  },
  {
    cat: "Ownership",
    q: "Who owns the code and the IP when we are done?",
    a: "You do. Production code, prompts, configs, and documentation for work we deliver under the engagement belong to you. We do not lock you into a black-box platform you cannot leave.",
  },
  {
    cat: "Pricing",
    q: "How does pricing work?",
    a: "Pilots are scoped and priced upfront. Ongoing work is typically a dedicated team retainer. We share ranges on a discovery call once we understand volume, integrations, and compliance needs - no bait-and-switch quotes, no pressure to sign the same day.",
  },
  {
    cat: "After launch",
    q: "What happens after go-live?",
    a: "We stay. Post-launch means monitoring, prompt and flow tuning, incident response, and the next iteration on the roadmap. Launch is a milestone, not the end of the relationship.",
  },
];

const FAQ_FACTS = [
  { label: "Typical first ship", value: "4–8 weeks" },
  { label: "Regions covered", value: "8+" },
  { label: "Post-launch", value: "We stay on" },
];

function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.2, 0.9, 0.2, 1] }}
        className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-ink/[0.03] blur-3xl"
      />
      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow>FAQ</Eyebrow>
            </Reveal>
            <h2 className="mt-6 text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl">
              <SplitWords text="Questions we" />{" "}
              <span className="text-italic-serif text-ember">
                <SplitWords text="get a lot." delay={0.2} />
              </span>
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink/60">
                Straight answers on timeline, security, ownership, and how we actually work with
                your team - before you book a call.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-3 border-y border-ink/10 py-6">
              {FAQ_FACTS.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.7, ease: [0.2, 0.9, 0.2, 1] }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.08, duration: 0.5 }}
                    className="text-serif text-xl text-ink sm:text-2xl"
                  >
                    {f.value}
                  </motion.div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-ink/40">
                    {f.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <Reveal delay={0.28}>
              <motion.div className="mt-8" whileHover="hover" initial="rest">
                <p className="text-sm text-ink/55">Still deciding if we are the right fit?</p>
                <motion.button
                  type="button"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-ink"
                  variants={{
                    rest: { x: 0 },
                    hover: { x: 4 },
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  Talk to a senior engineer
                  <motion.span
                    variants={{
                      rest: { x: 0 },
                      hover: { x: 4 },
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </motion.button>
              </motion.div>
            </Reveal>
          </div>

          <div className="space-y-3">
            <Accordion type="single" collapsible defaultValue="i-0" className="space-y-3">
              {FAQS.map((f, i) => (
                <motion.div
                  key={f.q}
                  initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: Math.min(i * 0.06, 0.36),
                    duration: 0.65,
                    ease: [0.2, 0.9, 0.2, 1],
                  }}
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  >
                    <AccordionItem
                      value={`i-${i}`}
                      className="group overflow-hidden rounded-2xl border border-ink/10 bg-white/90 px-5 transition-[border-color,box-shadow,background-color] duration-300 data-[state=open]:border-ink/20 data-[state=open]:bg-white data-[state=open]:shadow-[0_24px_48px_-28px_rgba(14,14,12,0.28)] sm:px-6"
                    >
                      <AccordionTrigger className="gap-4 py-5 text-left hover:no-underline [&>svg]:hidden">
                        <span className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4">
                          <motion.span
                            className="mt-0.5 hidden w-8 shrink-0 text-serif text-sm text-ink/25 sm:block"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.05 }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </motion.span>
                          <span className="min-w-0 flex-1">
                            <span className="mb-2 inline-block rounded-full border border-ink/10 bg-ivory px-2.5 py-0.5 text-[10px] uppercase tracking-[0.16em] text-ink/45 transition-colors duration-300 group-data-[state=open]:border-ink/20 group-data-[state=open]:bg-ink group-data-[state=open]:text-ivory">
                              {f.cat}
                            </span>
                            <span className="block text-base font-medium leading-snug text-ink sm:text-[1.05rem]">
                              {f.q}
                            </span>
                          </span>
                        </span>
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/10 bg-ivory text-ink transition-all duration-500 group-data-[state=open]:rotate-45 group-data-[state=open]:border-ink group-data-[state=open]:bg-ink group-data-[state=open]:text-ivory group-hover:border-ink/25">
                          <Plus className="h-4 w-4" />
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 pl-0 text-ink/60 sm:pl-12">
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, ease: [0.2, 0.9, 0.2, 1] }}
                        >
                          <p className="max-w-2xl text-sm leading-relaxed sm:text-[0.95rem]">
                            {f.a}
                          </p>
                          {f.points && (
                            <ul className="mt-4 space-y-2 border-t border-ink/8 pt-4">
                              {f.points.map((p, pi) => (
                                <motion.li
                                  key={p}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: 0.08 + pi * 0.06,
                                    duration: 0.4,
                                    ease: [0.2, 0.9, 0.2, 1],
                                  }}
                                  className="flex items-start gap-2.5 text-sm text-ink/70"
                                >
                                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink" />
                                  <span>{p}</span>
                                </motion.li>
                              ))}
                            </ul>
                          )}
                        </motion.div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- contact -------------------- */

function Contact() {
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const configured = isContactConfigured();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setPending(true);
    try {
      await sendContactEmail({
        name: String(fd.get("name") || ""),
        email: String(fd.get("email") || ""),
        company: String(fd.get("company") || ""),
        service: String(fd.get("service") || ""),
        message: String(fd.get("message") || ""),
        botcheck: String(fd.get("botcheck") || ""),
      });
      setSent(true);
      form.reset();
      toast.success("Got it", {
        description: `We'll reply from ${CONTACT_EMAIL} within a business day.`,
      });
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : typeof err === "object" && err && "message" in err
            ? String((err as { message: unknown }).message)
            : `Could not send. Please email ${CONTACT_EMAIL}`;
      toast.error("Could not send", {
        description: msg,
        duration: 10000,
        action: {
          label: "Email us",
          onClick: () => {
            window.open(CONTACT_MAIL_URL, "_blank", "noopener,noreferrer");
          },
        },
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <section id="contact" className="relative py-32">
      <SectionGlow tone="both" />
      <div className="container-x relative">
        <div className="card-ink relative overflow-hidden rounded-[36px] p-8 md:p-14 lg:p-16 glow-ring">
          <div
            className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
            style={{
              background: "radial-gradient(closest-side, rgba(10,10,10,0.55), transparent)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 grid-ink opacity-40" />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div>
              <Reveal>
                <Eyebrow>Contact</Eyebrow>
              </Reveal>
              <h2 className="mt-6 text-4xl leading-[1.05] text-ivory sm:text-5xl md:text-6xl">
                <SplitWords text="Got a project in mind?" />
                <br />
                <span className="text-italic-serif text-ember">
                  <SplitWords text="Let's sort it out." delay={0.35} />
                </span>
              </h2>
              <Reveal delay={0.5}>
                <p className="mt-6 max-w-md text-ivory/60">
                  Drop a few details. A senior engineer will reply with a practical next step -
                  usually within a business day.
                </p>
              </Reveal>
              <Reveal delay={0.65}>
                <div className="mt-8 space-y-4 text-sm text-ivory/70">
                  <a
                    href={CONTACT_MAIL_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 transition hover:text-ivory"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-ivory/15 bg-white/5">
                      <Mail className="h-4 w-4 text-ember" />
                    </span>
                    {CONTACT_EMAIL}
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-ivory/15 bg-white/5">
                      <Clock className="h-4 w-4 text-ember" />
                    </span>
                    We usually reply within a day
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-ivory/15 bg-white/5">
                      <Globe className="h-4 w-4 text-ember" />
                    </span>
                    <RegionFlags regions={CONTACT_FLAGS} />
                  </div>
                </div>
              </Reveal>
            </div>

            <div>
              <Reveal delay={0.2}>
                {sent ? (
                  <div className="rounded-3xl border border-ivory/10 bg-white/[0.04] p-6 backdrop-blur md:p-8">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-ember/20 text-ember">
                      <Check className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-serif text-3xl text-ivory">Got it</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                      Thanks - we will reply from{" "}
                      <span className="text-ivory">{CONTACT_EMAIL}</span> within a business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-6 text-sm text-ember transition hover:underline"
                    >
                      Send another
                    </button>
                  </div>
                ) : !configured ? (
                  <div className="rounded-3xl border border-ivory/10 bg-white/[0.04] p-6 backdrop-blur md:p-8">
                    <h3 className="text-serif text-2xl text-ivory">Prefer email?</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ivory/65">Write us here:</p>
                    <a
                      href={CONTACT_MAIL_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ember mt-6 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium"
                    >
                      <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
                    </a>
                  </div>
                ) : (
                  <form
                    onSubmit={onSubmit}
                    className="rounded-3xl border border-ivory/10 bg-white/[0.04] p-6 backdrop-blur md:p-8"
                    noValidate
                  >
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-1.5 block text-[11px] uppercase tracking-widest text-ivory/45">
                          Name *
                        </span>
                        <input
                          name="name"
                          required
                          minLength={2}
                          placeholder="Alex Rivera"
                          className="w-full rounded-xl border border-ivory/15 bg-ink/40 px-4 py-3 text-sm text-ivory outline-none placeholder:text-ivory/30 focus:border-ember focus-visible:ring-2 focus-visible:ring-ivory/20"
                        />
                      </label>
                      <label className="block">
                        <span className="mb-1.5 block text-[11px] uppercase tracking-widest text-ivory/45">
                          Work email *
                        </span>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="alex@company.com"
                          className="w-full rounded-xl border border-ivory/15 bg-ink/40 px-4 py-3 text-sm text-ivory outline-none placeholder:text-ivory/30 focus:border-ember focus-visible:ring-2 focus-visible:ring-ivory/20"
                        />
                      </label>
                      <label className="block">
                        <span className="mb-1.5 block text-[11px] uppercase tracking-widest text-ivory/45">
                          Company
                        </span>
                        <input
                          name="company"
                          placeholder="Acme Inc."
                          className="w-full rounded-xl border border-ivory/15 bg-ink/40 px-4 py-3 text-sm text-ivory outline-none placeholder:text-ivory/30 focus:border-ember focus-visible:ring-2 focus-visible:ring-ivory/20"
                        />
                      </label>
                      <label className="block">
                        <span className="mb-1.5 block text-[11px] uppercase tracking-widest text-ivory/45">
                          Service interest
                        </span>
                        <select
                          name="service"
                          defaultValue=""
                          className="w-full rounded-xl border border-ivory/15 bg-ink/40 px-4 py-3 text-sm text-ivory outline-none focus:border-ember focus-visible:ring-2 focus-visible:ring-ivory/20"
                        >
                          <option value="" disabled className="bg-ink text-ivory">
                            Select a service
                          </option>
                          {CONTACT_SERVICES.map((s) => (
                            <option key={s} value={s} className="bg-ink text-ivory">
                              {s}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <label className="mt-4 block">
                      <span className="mb-1.5 block text-[11px] uppercase tracking-widest text-ivory/45">
                        Project details *
                      </span>
                      <textarea
                        name="message"
                        required
                        minLength={10}
                        rows={5}
                        placeholder="What are you using today, and what would make this a win?"
                        className="w-full resize-y rounded-xl border border-ivory/15 bg-ink/40 px-4 py-3 text-sm text-ivory outline-none placeholder:text-ivory/30 focus:border-ember focus-visible:ring-2 focus-visible:ring-ivory/20"
                      />
                    </label>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs text-ivory/40">
                        Delivers to <span className="text-ivory/70">{CONTACT_EMAIL}</span>
                      </p>
                      <MagneticButton
                        type="submit"
                        tone="ember"
                        disabled={pending}
                        className="justify-center disabled:opacity-60"
                      >
                        {pending ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                          </>
                        ) : (
                          <>
                            Send <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </MagneticButton>
                    </div>
                  </form>
                )}
              </Reveal>

              {/* WhatsApp quick-contact card */}
              <Reveal delay={0.3}>
                <a
                  href={CONTACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 flex items-center gap-4 rounded-3xl border border-ivory/10 bg-white/[0.04] p-5 backdrop-blur transition-colors hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory/20 md:p-6"
                >
                  <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-ivory/15 bg-white/5 text-ember transition-colors group-hover:border-ember/40">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-ember shadow-[0_0_0_2px_rgba(10,10,10,1)]">
                      <span className="absolute inset-0 rounded-full bg-ember animate-ping-soft" />
                    </span>
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2 text-sm font-medium text-ivory">
                      Message us on WhatsApp
                    </span>
                    <span className="mt-0.5 block text-xs text-ivory/50">
                      Faster for quick questions — usually a reply within the hour.
                    </span>
                  </span>

                  <ArrowUpRight className="h-4 w-4 shrink-0 text-ivory/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- footer -------------------- */

function FooterLink({
  children,
  className,
  ...props
}: { children: React.ReactNode; className?: string } & (
  | { to: "/privacy" | "/terms" | "/security"; hash?: never; params?: never }
  | { to: "/services/$slug" | "/industries/$slug"; params: { slug: string }; hash?: never }
  | { to: "/"; hash: string; params?: never }
)) {
  const classes = cn(
    "group inline-flex items-center gap-1 text-sm text-ink/75 transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30",
    className,
  );
  const label = (
    <span className="relative">
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-ink transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
    </span>
  );

  if (props.to === "/services/$slug" || props.to === "/industries/$slug") {
    return (
      <Link to={props.to} params={props.params} className={classes}>
        {label}
      </Link>
    );
  }

  if (props.to === "/" && props.hash) {
    return (
      <Link to="/" hash={props.hash} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <Link to={props.to} className={classes}>
      {label}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-ink/10 bg-white/40 pt-20">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_2fr_1.5fr]">
          <div>
            <YanovixLogo size="footer" />
            <p className="mt-5 max-w-xs text-serif text-2xl text-ink/80">
              We build software that helps companies{" "}
              <span className="text-italic-serif text-ember">move faster</span> without hiring for
              every task.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={CONTACT_MAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Email ${CONTACT_EMAIL}`}
                className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 bg-white transition hover:border-ink hover:bg-ink hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
              >
                <Mail className="h-4 w-4" />
              </a>
              {CONTACT_LINKEDIN_URL ? (
                <a
                  href={CONTACT_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 bg-white transition hover:border-ink hover:bg-ink hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              ) : null}
              <a
                href={CONTACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 bg-white transition hover:border-ink hover:bg-ink hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Globe className="h-3.5 w-3.5 text-ink/45" />
              <RegionFlags regions={FOOTER_FLAGS} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-ink/40">Company</div>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <FooterLink to="/" hash="contact">
                    Contact
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="/" hash="process">
                    Process
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="/" hash="faq">
                    FAQ
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="/security">Security</FooterLink>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-ink/40">Services</div>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <FooterLink to="/services/$slug" params={{ slug: "ai-agents" }}>
                    AI Agents
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="/services/$slug" params={{ slug: "voice-ai-agents" }}>
                    Voice AI
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="/services/$slug" params={{ slug: "custom-saas" }}>
                    Custom SaaS
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="/services/$slug" params={{ slug: "workflow-automation" }}>
                    Automation
                  </FooterLink>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-ink/40">Industries</div>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <FooterLink to="/industries/$slug" params={{ slug: "healthcare" }}>
                    Healthcare
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="/industries/$slug" params={{ slug: "real-estate" }}>
                    Real Estate
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="/industries/$slug" params={{ slug: "law-firms" }}>
                    Law Firms
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="/industries/$slug" params={{ slug: "logistics" }}>
                    Logistics
                  </FooterLink>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-ink/40">Legal</div>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <FooterLink to="/privacy">Privacy</FooterLink>
                </li>
                <li>
                  <FooterLink to="/terms">Terms</FooterLink>
                </li>
                <li>
                  <FooterLink to="/security">Security</FooterLink>
                </li>
                <li>
                  <FooterLink to="/" hash="case-studies">
                    Case Studies
                  </FooterLink>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-widest text-ink/40">Get in touch</div>
            <p className="mt-4 text-sm text-ink/60">Projects, partnerships, or just a question.</p>
            <a
              href={CONTACT_MAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink transition hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
            >
              <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
            </a>
            <a
              href={CONTACT_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-start gap-2 text-sm font-medium text-ink transition hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{CONTACT_LOCATION}</span>
            </a>
            <Link to="/" hash="contact" className="mt-4 block">
              <span className="btn-ember inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium">
                Contact form <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-[28px] border border-ink/10 bg-white shadow-[0_24px_50px_-36px_rgba(7,17,31,0.35)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/8 px-5 py-4">
            <div className="flex items-center gap-2 text-sm text-ink/70">
              <MapPin className="h-4 w-4 text-ember" />
              <span>{CONTACT_LOCATION}</span>
            </div>
            <a
              href={CONTACT_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-ember transition hover:underline"
            >
              Open in Google Maps <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <iframe
            title="YANOVIX location - Johar Town Phase 2, Lahore"
            src={CONTACT_MAPS_EMBED}
            className="h-64 w-full border-0 md:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="mt-24 overflow-hidden">
          <div
            className="text-serif leading-none tracking-tighter text-ink/[0.06]"
            style={{ fontSize: "clamp(80px, 22vw, 300px)" }}
          >
            YANOVIX
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink/10 py-8 text-xs text-ink/50 md:flex-row">
          <div>&copy; {new Date().getFullYear()} YANOVIX. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
            >
              Terms
            </Link>
            <Link
              to="/security"
              className="transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
            >
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------- page -------------------- */

function Landing() {
  return (
    <div className="relative min-h-screen bg-ivory text-ink">
      <SiteGlow />
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Trusted />
        <Services />
        <Industries />
        <VisualBreak />
        <Solutions />
        <CaseStudies />
        <Process />
        <Technologies />
        <ClientReviews />
        <Why />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
