import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FlagDef = { code: string; label: string };

const SVGS: Record<string, ReactNode> = {
  us: (
    <svg viewBox="0 0 60 42" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="60" height="42" fill="#B22234" />
      <path d="M0 3.23h60M0 9.69h60M0 16.15h60M0 22.62h60M0 29.08h60M0 35.54h60" stroke="#fff" strokeWidth="3.23" />
      <rect width="24" height="22.62" fill="#3C3B6E" />
    </svg>
  ),
  ca: (
    <svg viewBox="0 0 60 42" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="60" height="42" fill="#fff" />
      <rect width="15" height="42" fill="#FF0000" />
      <rect x="45" width="15" height="42" fill="#FF0000" />
      <path fill="#FF0000" d="M30 8l2.2 6.5h6.8l-5.5 4 2.1 6.5L30 21.5l-5.6 3.5 2.1-6.5-5.5-4h6.8z" />
    </svg>
  ),
  gb: (
    <svg viewBox="0 0 60 42" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="60" height="42" fill="#012169" />
      <path d="M0 0l60 42M60 0L0 42" stroke="#fff" strokeWidth="8" />
      <path d="M0 0l60 42M60 0L0 42" stroke="#C8102E" strokeWidth="4" />
      <path d="M30 0v42M0 21h60" stroke="#fff" strokeWidth="12" />
      <path d="M30 0v42M0 21h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  ),
  au: (
    <svg viewBox="0 0 60 42" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="60" height="42" fill="#012169" />
      <rect width="28" height="21" fill="#012169" />
      <path d="M0 0l28 21M28 0L0 21" stroke="#fff" strokeWidth="3.5" />
      <path d="M0 0l28 21M28 0L0 21" stroke="#C8102E" strokeWidth="1.8" />
      <path d="M14 0v21M0 10.5h28" stroke="#fff" strokeWidth="5.5" />
      <path d="M14 0v21M0 10.5h28" stroke="#C8102E" strokeWidth="2.8" />
      <circle cx="42" cy="14" r="1.6" fill="#fff" />
      <circle cx="50" cy="20" r="1.4" fill="#fff" />
      <circle cx="46" cy="28" r="1.5" fill="#fff" />
      <circle cx="38" cy="24" r="1.2" fill="#fff" />
      <circle cx="44" cy="34" r="1.3" fill="#fff" />
    </svg>
  ),
  de: (
    <svg viewBox="0 0 60 42" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="60" height="14" fill="#000" />
      <rect y="14" width="60" height="14" fill="#DD0000" />
      <rect y="28" width="60" height="14" fill="#FFCE00" />
    </svg>
  ),
  nl: (
    <svg viewBox="0 0 60 42" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="60" height="14" fill="#AE1C28" />
      <rect y="14" width="60" height="14" fill="#fff" />
      <rect y="28" width="60" height="14" fill="#21468B" />
    </svg>
  ),
  sg: (
    <svg viewBox="0 0 60 42" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="60" height="21" fill="#ED2939" />
      <rect y="21" width="60" height="21" fill="#fff" />
      <circle cx="14" cy="11" r="6" fill="#fff" />
      <circle cx="16.5" cy="11" r="5" fill="#ED2939" />
      <circle cx="22" cy="7" r="1.1" fill="#fff" />
      <circle cx="24.5" cy="9.5" r="1.1" fill="#fff" />
      <circle cx="24.5" cy="12.8" r="1.1" fill="#fff" />
      <circle cx="22" cy="15" r="1.1" fill="#fff" />
      <circle cx="19" cy="13.5" r="1.1" fill="#fff" />
    </svg>
  ),
  ae: (
    <svg viewBox="0 0 60 42" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="60" height="14" fill="#00732F" />
      <rect y="14" width="60" height="14" fill="#fff" />
      <rect y="28" width="60" height="14" fill="#000" />
      <rect width="16" height="42" fill="#FF0000" />
    </svg>
  ),
  eu: (
    <svg viewBox="0 0 60 42" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="60" height="42" fill="#039" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = ((i * 30 - 90) * Math.PI) / 180;
        const cx = 30 + Math.cos(a) * 11;
        const cy = 21 + Math.sin(a) * 11;
        return <circle key={i} cx={cx} cy={cy} r="1.4" fill="#FC0" />;
      })}
    </svg>
  ),
};

export function Flag({ code, label, className }: FlagDef & { className?: string }) {
  const svg = SVGS[code];
  if (!svg) return null;
  return (
    <span
      title={label}
      aria-label={label}
      className={cn(
        "inline-flex h-[16px] w-[22px] shrink-0 overflow-hidden rounded-[3px] ring-1 ring-black/15 [&_svg]:h-full [&_svg]:w-full",
        className,
      )}
    >
      {svg}
    </span>
  );
}

export function RegionFlags({
  regions,
  className,
}: {
  regions: FlagDef[];
  className?: string;
}) {
  return (
    <span className={cn("inline-flex flex-wrap items-center gap-1.5", className)} role="list">
      {regions.map((r) => (
        <Flag key={r.code} code={r.code} label={r.label} />
      ))}
    </span>
  );
}

export const FOOTER_FLAGS: FlagDef[] = [
  { code: "us", label: "United States" },
  { code: "ca", label: "Canada" },
  { code: "gb", label: "United Kingdom" },
  { code: "au", label: "Australia" },
  { code: "de", label: "Germany" },
  { code: "nl", label: "Netherlands" },
  { code: "sg", label: "Singapore" },
  { code: "ae", label: "UAE" },
];

export const CONTACT_FLAGS: FlagDef[] = [
  { code: "us", label: "United States" },
  { code: "ca", label: "Canada" },
  { code: "gb", label: "United Kingdom" },
  { code: "au", label: "Australia" },
  { code: "eu", label: "European Union" },
  { code: "ae", label: "UAE" },
  { code: "sg", label: "Singapore" },
];
