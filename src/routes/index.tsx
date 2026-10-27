import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, Clock, MessageCircle } from "lucide-react";
import { site, photos, menu, nav, reels, whatsappLink } from "@/config/site";
import { Header } from "@/components/landing/Header";
import { CTA, Divider, Logo, Reveal, WhatsAppCTA } from "@/components/landing/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luz de Menina Ateliê & Café — Valparaíso – SP" },
      { name: "description", content: "Cafés, doces artesanais e cerâmica pintada à mão em Valparaíso – SP. Fale com a gente pelo WhatsApp." },
      { property: "og:title", content: "Luz de Menina Ateliê & Café" },
      { property: "og:description", content: "Sabores que acolhem. Detalhes que encantam. Delícias e cerâmica artesanal em Valparaíso – SP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Img({ src, alt, className, eager }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} className={`h-full w-full scale-[1.1] object-cover ${className ?? ""}`} />;
}

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cardapio />
        <Receitas />
        <Ceramica />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 lg:pt-40">
      <div className="mx-auto max-w-3xl px-6 pb-20 text-center lg:pb-28">
        <Reveal>
          <div className="flex justify-center"><Logo className="h-28 w-28" /></div>
          <p className="eyebrow mt-8">Ateliê &amp; Café — Valparaíso – SP</p>
          <div className="mt-6 flex justify-center"><Divider /></div>
          <h1 className="mt-6 text-5xl leading-[1.05] text-espresso sm:text-6xl">
            Pequenos momentos merecem <em className="text-coffee">grandes sabores.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-coffee">
            Cafés, doces artesanais e peças de cerâmica feitas à mão para deixar os momentos simples ainda mais especiais.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <WhatsAppCTA>Falar no WhatsApp</WhatsAppCTA>
            <CTA href="#cardapio" variant="outline">Ver cardápio</CTA>
          </div>
          <p className="mt-10 font-script text-2xl text-coffee">Feito com amor e carinho.</p>
        </Reveal>
      </div>
      <Reveal delay={120} className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          <div className="aspect-[3/4] overflow-hidden rounded-sm photo-zoom"><Img src={photos.cinnamon} alt="Cinnamon rolls com cobertura de doce de leite" /></div>
          <div className="aspect-[3/4] overflow-hidden rounded-sm photo-zoom sm:-mt-6"><Img src={photos.schiacciata} alt="Schiacciata recheada com frango desfiado" /></div>
          <div className="aspect-[3/4] overflow-hidden rounded-sm photo-zoom"><Img src={photos.brookie} alt="Brookie com fios de chocolate" /></div>
        </div>
      </Reveal>
    </section>
  );
}

function Cardapio() {
  return (
    <section id="cardapio" className="bg-sand/50 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Nosso cardápio</p>
          <h2 className="mt-5 text-4xl text-espresso sm:text-5xl">Algumas das nossas delícias.</h2>
          <p className="mx-auto mt-5 max-w-md text-coffee">Sabores artesanais para acompanhar seu café e tornar qualquer pausa mais gostosa.</p>
        </Reveal>
        <Reveal delay={100} className="mt-12 rounded-sm border border-border bg-offwhite p-8 shadow-soft sm:p-12">
          {menu.map((g) => (
            <div key={g.group} className="mb-10 last:mb-0">
              <h3 className="font-script text-3xl text-coffee">{g.group}</h3>
              <ul className="mt-4 space-y-3">
                {g.items.map((i) => (
                  <li key={i} className="flex items-baseline gap-3">
                    <span className="font-serif text-xl text-espresso">{i}</span>
                    <span className="flex-1 border-b border-dotted border-coffee/40" aria-hidden />
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="mt-10 text-xs italic text-coffee">Cardápio completo, disponibilidade e valores: fale com a gente pelo WhatsApp.</p>
          <WhatsAppCTA className="mt-8 w-full sm:w-auto">Pedir pelo WhatsApp</WhatsAppCTA>
        </Reveal>
      </div>
    </section>
  );
}

function Receitas() {
  return (
    <section id="receitas" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Receitas no Instagram</p>
          <h2 className="mt-5 text-4xl text-espresso sm:text-5xl">Venha cozinhar com a gente.</h2>
          <p className="mt-5 text-coffee">No nosso Instagram você encontra vídeos de receitas e bastidores do ateliê.</p>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reels.map((r, i) => (
            <Reveal key={r.id} delay={i * 100} className="mx-auto w-full max-w-sm">
              <div className="overflow-hidden rounded-sm border border-border bg-offwhite shadow-soft">
                <iframe
                  src={`https://www.instagram.com/reel/${r.id}/embed`}
                  title={r.title}
                  className="h-[580px] w-full"
                  loading="lazy"
                  allowFullScreen
                  allow="encrypted-media; clipboard-write"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150} className="mt-12 text-center">
          <CTA href={site.instagramUrl} external variant="outline">Ver mais no Instagram</CTA>
        </Reveal>
      </div>
    </section>
  );
}

function Ceramica() {
  return (
    <section id="ceramica" className="bg-sand/50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <div className="aspect-[4/5] overflow-hidden rounded-t-full photo-zoom"><Img src={photos.sunflower} alt="Pratos e canecas de cerâmica com girassóis pintados à mão" /></div>
            <span className="absolute -right-2 top-8 rotate-6 font-script text-2xl text-gold">feito à mão ✦</span>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">Cerâmica artesanal</p>
          <h2 className="mt-5 text-4xl leading-tight text-espresso sm:text-5xl">Arte que ganha forma <em>nas mãos.</em></h2>
          <div className="mt-6"><Divider /></div>
          <p className="mt-7 leading-relaxed text-coffee">
            Além dos sabores, a Luz de Menina também expressa sua criatividade na cerâmica: peças pintadas à mão, com cores e detalhes que carregam personalidade.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CTA href={site.instagramUrl} external>Conhecer as criações</CTA>
            <WhatsAppCTA variant="outline">Encomendar uma peça</WhatsAppCTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="bg-offwhite py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="flex justify-center"><Divider /></div>
          <h2 className="mt-6 text-4xl text-espresso sm:text-5xl">Vamos compartilhar algo especial?</h2>
          <p className="mx-auto mt-5 max-w-md text-coffee">Faça seu pedido, tire dúvidas ou encomende uma peça de cerâmica — é só chamar.</p>
          <WhatsAppCTA variant="gold" className="mt-9">Conversar pelo WhatsApp</WhatsAppCTA>
        </Reveal>
        <Reveal delay={120} className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border text-left sm:grid-cols-3">
          <div className="bg-offwhite p-7">
            <MessageCircle className="h-5 w-5 text-gold" />
            <p className="mt-4 font-serif text-xl text-espresso">WhatsApp</p>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-coffee underline decoration-gold underline-offset-4">{site.whatsappDisplay}</a>
          </div>
          <div className="bg-offwhite p-7">
            <MapPin className="h-5 w-5 text-gold" />
            <p className="mt-4 font-serif text-xl text-espresso">Onde estamos</p>
            <p className="mt-2 text-sm text-coffee">{site.address}<br />{site.city}</p>
          </div>
          <div className="bg-offwhite p-7">
            <Clock className="h-5 w-5 text-gold" />
            <p className="mt-4 font-serif text-xl text-espresso">Horários</p>
            <ul className="mt-2 space-y-1 text-sm text-coffee">
              {site.hours.map((h) => <li key={h.days}><strong className="font-semibold">{h.days}:</strong> {h.time}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-espresso py-14 text-offwhite">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
        <Logo light className="h-16 w-16" />
        <p className="font-script text-2xl text-gold">Feito com amor e carinho.</p>
        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-offwhite/80">
            {nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-gold">{n.label}</a></li>)}
            <li><a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-gold"><Instagram className="h-4 w-4" />{site.instagramHandle}</a></li>
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp</a></li>
          </ul>
        </nav>
        <p className="border-t border-offwhite/15 pt-6 text-xs text-offwhite/60">
          © {new Date().getFullYear()} {site.name} — {site.city}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
