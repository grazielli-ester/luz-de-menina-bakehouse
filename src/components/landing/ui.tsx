import { useEffect, useRef, type ReactNode } from "react";
import { whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const base =
  "group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const variants = {
  solid: "bg-primary text-primary-foreground hover:bg-coffee hover:shadow-soft",
  outline: "border border-primary/40 text-primary hover:border-gold hover:bg-offwhite",
  gold: "bg-gold text-espresso hover:bg-offwhite hover:shadow-soft",
  light: "border border-offwhite/40 text-offwhite hover:bg-offwhite hover:text-espresso",
};

export function CTA({ href, children, variant = "solid", external, className }: { href: string; children: ReactNode; variant?: keyof typeof variants; external?: boolean; className?: string }) {
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={cn(base, variants[variant], className)}>
      {children}
      <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
    </a>
  );
}

/** WhatsApp button: renders a real link only once the number is configured in src/config/site.ts. */
export function WhatsAppCTA({ children, variant = "solid", className }: { children: ReactNode; variant?: keyof typeof variants; className?: string }) {
  const href = whatsappLink();
  if (href) return <CTA href={href} external variant={variant} className={className}>{children}</CTA>;
  return (
    <a href="#contato" title="WhatsApp em breve" className={cn(base, variants[variant], className)}>
      {children}
      <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
    </a>
  );
}

export function Lamp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 40" fill="none" className={className} aria-hidden>
      <path d="M16 3a11 11 0 0 0-6.5 19.9c1.4 1 2.2 2.4 2.2 4V29h8.6v-2.1c0-1.6.8-3 2.2-4A11 11 0 0 0 16 3Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12.5 32.5h7M13.5 36h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M13 17c1.2 2 2 3.5 3 3.5S17.8 19 19 17" stroke="var(--gold)" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16 20.5V28" stroke="var(--gold)" strokeWidth="1.4" />
    </svg>
  );
}

export function Logo({ light }: { light?: boolean }) {
  return (
    <span className={cn("flex items-center gap-2.5", light ? "text-offwhite" : "text-espresso")}>
      <Lamp className="h-9 w-7" />
      <span className="flex flex-col leading-none">
        <span className="font-script text-2xl">Luz de Menina</span>
        <span className="mt-0.5 text-[0.6rem] font-semibold tracking-[0.4em]">CAFÉ</span>
      </span>
    </span>
  );
}

export function Divider() {
  return (
    <div className="flex items-center gap-3 text-gold" aria-hidden>
      <span className="h-px w-10 bg-gold/70" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
    </div>
  );
}
