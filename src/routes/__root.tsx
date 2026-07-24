import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import faviconAsset from "../assets/favicon.png";
import ogImage from "../assets/yanovix-icon.png";
import { YanovixLogo } from "@/components/yanovix-logo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ivory px-6 text-ink">
      <YanovixLogo toHome size="nav" />
      <h1 className="mt-12 text-serif text-7xl tracking-tight text-ink">404</h1>
      <h2 className="mt-4 text-xl text-ink/80">Page not found</h2>
      <p className="mt-2 max-w-sm text-center text-sm text-ink/55">
        That URL does not exist. Head home or jump to contact if you came looking for us.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-ivory transition hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
        >
          Go home
        </Link>
        <Link
          to="/"
          hash="contact"
          className="inline-flex items-center rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm font-medium text-ink transition hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ivory px-6 text-ink">
      <YanovixLogo toHome size="nav" />
      <h1 className="mt-12 text-serif text-3xl tracking-tight text-ink">This page didn't load</h1>
      <p className="mt-3 max-w-sm text-center text-sm text-ink/55">
        Something went wrong on our end. Try again, or go home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-ivory transition hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
        >
          Try again
        </button>
        <a
          href="/"
          className="inline-flex items-center rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm font-medium text-ink transition hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "YANOVIX - AI that actually ships" },
      {
        name: "description",
        content:
          "YANOVIX builds AI agents, voice systems, and custom software for teams tired of demos that never make it to production.",
      },
      { name: "author", content: "YANOVIX" },
      { name: "theme-color", content: "#0A0A0A" },
      { property: "og:title", content: "YANOVIX - AI that actually ships" },
      {
        property: "og:description",
        content: "AI agents, voice AI, and custom software - built by senior engineers, owned end to end.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "YANOVIX" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "YANOVIX - AI that actually ships" },
      {
        name: "twitter:description",
        content: "AI agents, voice AI, and custom software for real production workloads.",
      },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: faviconAsset },
      { rel: "apple-touch-icon", href: faviconAsset },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-ivory"
        >
          Skip to content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster position="top-center" closeButton />
    </QueryClientProvider>
  );
}
