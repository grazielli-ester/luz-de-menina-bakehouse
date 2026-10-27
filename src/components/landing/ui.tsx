import { useEffect, useRef, type ReactNode } from "react";
import { whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/logo.png.asset.json";


export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => { if (entries[0]?.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } },
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

export function CTA({ href, children, variant = "solid", external, className }: { href: string; children: ReactNode; variant?: keyof typeof variants; external?: boolean; className?: string | undefined }) {
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={cn(base, variants[variant], className)}>
      {children}
      <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
    </a>
  );
}

/** WhatsApp button: renders a real link only once the number is configured in src/config/site.ts. */
export function WhatsAppCTA({ children, variant = "solid", className }: { children: ReactNode; variant?: keyof typeof variants; className?: string | undefined }) {
  const href = whatsappLink();
  if (href) return <CTA href={href} external variant={variant} className={className}>{children}</CTA>;
  return (
    <a href="#contato" title="WhatsApp em breve" className={cn(base, variants[variant], className)}>
      {children}
      <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
    </a>
  );
}

/** The brand's real logo: round badge with the light bulb, the name and "Ateliê & Café". */
export function Logo({ light, className }: { light?: boolean; className?: string | undefined }) {
  return (
    <img
      src={logoAsset.url}
      alt="Luz de Menina Ateliê & Café"
      width={72}
      height={72}
      className={cn(
        "aspect-square rounded-full object-cover shadow-soft",
        light ? "ring-1 ring-offwhite/25" : "ring-1 ring-espresso/10",
        className,
      )}
    />
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
