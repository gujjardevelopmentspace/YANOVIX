import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import yanovixIcon from "@/assets/yanovix-icon.png";

type YanovixLogoProps = {
  size?: "nav" | "footer" | "compact";
  href?: string;
  toHome?: boolean;
  className?: string;
  onClick?: () => void;
};

const SIZES = {
  compact: { mark: "h-8 w-8", text: "text-base" },
  nav: { mark: "h-9 w-9", text: "text-lg" },
  footer: { mark: "h-11 w-11", text: "text-xl" },
} as const;

export function YanovixLogo({
  size = "nav",
  href = "#top",
  toHome = false,
  className,
  onClick,
}: YanovixLogoProps) {
  const s = SIZES[size];
  const inner = (
    <>
      <img
        src={yanovixIcon}
        alt=""
        width={44}
        height={44}
        decoding="async"
        className={cn(s.mark, "rounded-lg object-cover shadow-[0_1px_0_rgba(10,10,10,0.06)] transition-transform duration-500 group-hover:rotate-1")}
      />
      <span className={cn("text-serif tracking-tight text-ink", s.text)}>YANOVIX</span>
    </>
  );

  const classes = cn("group inline-flex items-center gap-2.5", className);

  if (toHome) {
    return (
      <Link to="/" className={classes} onClick={onClick} aria-label="YANOVIX home">
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} onClick={onClick} aria-label="YANOVIX home">
      {inner}
    </a>
  );
}
