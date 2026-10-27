import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/config/site";
import { Logo, WhatsAppCTA } from "./ui";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled || open ? "bg-offwhite/90 shadow-soft backdrop-blur-md" : "bg-transparent")}>
      <div className={cn("mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-10", scrolled ? "py-3" : "py-5")}>
        <a href="#inicio" aria-label="Luz de Menina Ateliê & Café — início"><Logo className={cn("transition-all duration-500", scrolled ? "h-11 w-11" : "h-14 w-14")} /></a>


        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="relative text-sm text-espresso/80 transition-colors hover:text-espresso after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full">
              {n.label}
            </a>
          ))}
          <WhatsAppCTA className="px-5 py-2.5">Entre em contato</WhatsAppCTA>
        </nav>
        <button className="rounded-full p-2 text-espresso lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Menu móvel" className="border-t border-border px-6 pb-8 pt-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="font-serif text-2xl text-espresso">{n.label}</a></li>
            ))}
          </ul>
          <WhatsAppCTA className="mt-6 w-full">Entre em contato</WhatsAppCTA>
        </nav>
      )}
    </header>
  );
}
