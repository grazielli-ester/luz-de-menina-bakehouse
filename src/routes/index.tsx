import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, Clock } from "lucide-react";
import { site, photos, menu, nav, whatsappLink } from "@/config/site";
import { Header } from "@/components/landing/Header";
import { CTA, Divider, Logo, Reveal, WhatsAppCTA } from "@/components/landing/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luz de Menina Ateliê & Café — Doces, cafés e cerâmica artesanal em Valparaíso – SP" },
      { name: "description", content: "Cafés, doces, schiacciatas e cerâmica pintada à mão. Sabores que acolhem, detalhes que encantam — Luz de Menina, Valparaíso – SP." },
      { property: "og:title", content: "Luz de Menina Ateliê & Café" },
      { property: "og:description", content: "Sabores que acolhem. Detalhes que encantam. Delícias e cerâmica artesanal em Valparaíso – SP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Img({ src, alt, className, eager }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} className={`h-full w-full object-cover ${className ?? ""}`} />;
}

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Essencia />
        <Delicias />
        <Cardapio />
        <Ceramica />
        <Carinho />
        <InstagramSection />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-12 lg:px-10 lg:pb-28">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Luz de Menina Ateliê &amp; Café</p>
          <div className="mt-6"><Divider /></div>
          <h1 className="mt-6 text-5xl leading-[1.02] text-espresso sm:text-6xl xl:text-7xl">
            Pequenos momentos merecem <em className="text-coffee">grandes sabores.</em>
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-coffee">
            Uma combinação de sabores artesanais, doces irresistíveis e peças feitas à mão para deixar os momentos simples ainda mais especiais.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CTA href="#essencia">Conheça nossa essência</CTA>
            <WhatsAppCTA variant="outline">Fale conosco</WhatsAppCTA>
          </div>
          <p className="mt-10 font-script text-2xl text-coffee">Feito com amor e carinho, em Valparaíso – SP.</p>
        </Reveal>
        <Reveal className="relative lg:col-span-7" delay={150}>
          <div className="relative ml-auto aspect-[4/5] w-full max-w-xl overflow-hidden rounded-t-full shadow-soft sm:aspect-[5/6]">
            <Img src={photos.schiacciata} alt="Schiacciata recheada com frango desfiado, bacon, tomate e alface" eager className="object-[center_40%]" />
          </div>
          <div className="absolute -bottom-6 left-0 hidden w-44 overflow-hidden rounded-sm border-[6px] border-offwhite shadow-soft sm:block lg:-left-6 lg:w-56">
            <div className="aspect-square"><Img src={photos.cookies} alt="Cookies artesanais com cobertura de chocolate e pipoca" /></div>
          </div>
          <span className="absolute right-4 top-6 hidden rotate-6 font-script text-2xl text-gold sm:block lg:-right-2">feito à mão ✦</span>
        </Reveal>
      </div>
    </section>
  );
}

function Essencia() {
  return (
    <section id="essencia" className="bg-offwhite py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            <div className="aspect-[4/5] overflow-hidden rounded-sm photo-zoom">
              <Img src={photos.cookiePlate} alt="Cookie com caramelo e nozes-pecã servido em prato de cerâmica artesanal" />
            </div>
            <div className="absolute -right-5 -top-5 -z-0 h-full w-full rounded-sm border border-gold/60" aria-hidden />
          </div>
        </Reveal>
        <Reveal className="order-1 lg:order-2" delay={120}>
          <p className="eyebrow">Nossa essência</p>
          <h2 className="mt-5 text-4xl leading-tight text-espresso sm:text-5xl">Um universo feito de afeto e criatividade.</h2>
          <div className="mt-6"><Divider /></div>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-coffee">
            <p>A Luz de Menina Ateliê &amp; Café reúne o carinho pelos sabores artesanais e a beleza das criações feitas à mão.</p>
            <p>De cafés e doces que tornam o dia mais gostoso a peças de cerâmica que encantam pelos detalhes, cada criação faz parte de um universo que valoriza o cuidado, a criatividade e os pequenos prazeres da vida.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Delicias() {
  return (
    <section id="delicias" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Delícias artesanais</p>
          <h2 className="mt-5 text-4xl text-espresso sm:text-5xl">Feitos para despertar bons momentos.</h2>
          <p className="mt-5 text-coffee">Sabores especiais para acompanhar seu café da tarde e tornar qualquer pausa mais gostosa.</p>
        </Reveal>

        {/* Cafés — large portrait image left */}
        <div className="mt-20 grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="aspect-[4/5] overflow-hidden rounded-sm photo-zoom"><Img src={photos.cafe} alt="Iced latte e cappuccino em xícara de cerâmica pintada" /></div>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:pb-16" delay={100}>
            <span className="font-serif text-6xl text-gold/80">01</span>
            <h3 className="mt-2 text-4xl text-espresso">Cafés e bebidas</h3>
            <p className="mt-4 max-w-sm leading-relaxed text-coffee">Do café quentinho às combinações geladas, sabores para acompanhar os seus melhores momentos.</p>
            <a href="#cardapio" className="mt-6 inline-block border-b border-gold pb-1 text-sm font-semibold text-espresso">Ver cardápio</a>
          </Reveal>
        </div>

        {/* Doces — mosaic */}
        <div className="mt-28 grid gap-10 lg:grid-cols-12">
          <Reveal className="order-2 self-center lg:order-1 lg:col-span-4">
            <span className="font-serif text-6xl text-gold/80">02</span>
            <h3 className="mt-2 text-4xl text-espresso">Doces artesanais</h3>
            <p className="mt-4 max-w-sm leading-relaxed text-coffee">Doces preparados para conquistar nos detalhes, com combinações irresistíveis e aquele toque artesanal.</p>
            <a href="#cardapio" className="mt-6 inline-block border-b border-gold pb-1 text-sm font-semibold text-espresso">Ver cardápio</a>
          </Reveal>
          <Reveal className="order-1 grid grid-cols-2 gap-4 lg:order-2 lg:col-span-8" delay={100}>
            <div className="row-span-2 aspect-[3/5] overflow-hidden rounded-sm photo-zoom"><Img src={photos.cinnamon} alt="Cinnamon rolls com cobertura de doce de leite e chocolate branco" /></div>
            <div className="aspect-square overflow-hidden rounded-sm photo-zoom"><Img src={photos.brookie} alt="Brookie com fios de chocolate" /></div>
            <div className="aspect-square overflow-hidden rounded-sm photo-zoom"><Img src={photos.cookies} alt="Cookies recheados com cobertura de chocolate" /></div>
          </Reveal>
        </div>

        {/* Salgados — wide band */}
        <div className="mt-28 grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="grid grid-cols-5 gap-4 lg:col-span-7">
            <div className="col-span-3 aspect-[3/4] overflow-hidden rounded-sm photo-zoom"><Img src={photos.schiacciata} alt="Schiacciata de frango desfiado" /></div>
            <div className="col-span-2 mt-16 aspect-[3/4] overflow-hidden rounded-sm photo-zoom"><Img src={photos.focaccia} alt="Pão artesanal com queijo e tomate" /></div>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={100}>
            <span className="font-serif text-6xl text-gold/80">03</span>
            <h3 className="mt-2 text-4xl text-espresso">Sanduíches e salgados</h3>
            <p className="mt-4 max-w-sm leading-relaxed text-coffee">Opções saborosas para transformar uma pausa simples em um momento especial.</p>
            <a href="#contato" className="mt-6 inline-block border-b border-gold pb-1 text-sm font-semibold text-espresso">Fale com a gente</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Cardapio() {
  return (
    <section id="cardapio" className="bg-sand/50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Um pouco do nosso cardápio</p>
          <h2 className="mt-5 text-4xl text-espresso sm:text-5xl">Algumas das nossas delícias.</h2>
          <p className="mt-5 text-coffee">Conheça um pouquinho dos sabores que fazem parte do universo Luz de Menina.</p>
          <div className="mt-10 hidden aspect-[4/3] overflow-hidden rounded-sm lg:block photo-zoom"><Img src={photos.brookie} alt="Brookie artesanal" /></div>
        </Reveal>
        <Reveal className="rounded-sm border border-border bg-offwhite p-8 shadow-soft sm:p-12 lg:col-span-7" delay={100}>
          {menu.map((g) => (
            <div key={g.group} className="mb-10 last:mb-0">
              <h3 className="font-script text-3xl text-coffee">{g.group}</h3>
              <ul className="mt-4 space-y-4">
                {g.items.map((i) => (
                  <li key={i.name} className="flex items-baseline gap-3">
                    <span className="font-serif text-xl text-espresso">{i.name}</span>
                    <span className="flex-1 border-b border-dotted border-coffee/40" aria-hidden />
                    <span className="text-sm font-semibold text-espresso">{i.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="mt-10 text-xs italic text-coffee">Consulte a disponibilidade dos produtos e os valores atualizados diretamente com a marca.</p>
          <WhatsAppCTA className="mt-8">Quero conhecer o cardápio completo</WhatsAppCTA>
        </Reveal>
      </div>
    </section>
  );
}

function Ceramica() {
  return (
    <section id="ceramica" className="relative overflow-hidden bg-sand py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-soft photo-zoom sm:aspect-[5/6]"><Img src={photos.sunflower} alt="Pratos e canecas de cerâmica com girassóis pintados à mão" /></div>
          </Reveal>
          <div className="flex flex-col justify-between gap-12 lg:col-span-5">
            <Reveal delay={100}>
              <p className="eyebrow">Cerâmica artesanal</p>
              <h2 className="mt-5 text-5xl leading-tight text-espresso sm:text-6xl">Arte que ganha forma <em>nas mãos.</em></h2>
              <div className="mt-6"><Divider /></div>
              <div className="mt-7 space-y-5 leading-relaxed text-coffee">
                <p>Além dos sabores que despertam boas memórias, a Luz de Menina também expressa sua criatividade por meio da cerâmica artesanal.</p>
                <p>Peças feitas à mão, com formas, cores e detalhes que carregam personalidade e tornam cada criação especial.</p>
              </div>
              <CTA href={site.instagramUrl} external className="mt-9">Conheça nossas criações</CTA>
            </Reveal>
            <Reveal delay={200} className="ml-auto w-3/4">
              <div className="aspect-[4/5] overflow-hidden rounded-t-full border-[6px] border-offwhite photo-zoom"><Img src={photos.bowls} alt="Tigelas de cerâmica com estampas de onça e zebra" /></div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Carinho() {
  return (
    <section className="relative">
      <div className="relative h-[80vh] min-h-[520px] overflow-hidden">
        <Img src={photos.mesa} alt="Mesa de café da tarde com cinnamon roll em prato de cerâmica pintada" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/40 to-transparent" />
        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-6 lg:px-10">
          <Reveal className="max-w-lg text-offwhite">
            <span className="font-script text-3xl text-gold">feito com carinho</span>
            <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Os melhores momentos moram nos detalhes.</h2>
            <p className="mt-6 leading-relaxed text-offwhite/85">Uma pausa para o café, um doce compartilhado, uma peça artesanal que conquista o olhar.</p>
            <p className="mt-4 leading-relaxed text-offwhite/85">Acreditamos que são os pequenos detalhes que tornam os momentos cotidianos especiais. É essa inspiração que conecta os sabores e as criações da Luz de Menina.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  const g = [
    { src: photos.schiacciata, alt: "Schiacciata recheada" },
    { src: photos.brookie, alt: "Brookie" },
    { src: photos.sunflower, alt: "Cerâmica com girassóis" },
    { src: photos.cookies, alt: "Cookies artesanais" },
    { src: photos.cinnamon, alt: "Cinnamon rolls" },
    { src: photos.bowls, alt: "Tigelas de cerâmica pintadas" },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="eyebrow">{site.instagramHandle}</p>
            <h2 className="mt-5 text-4xl text-espresso sm:text-5xl">Nosso universo também está no Instagram.</h2>
            <p className="mt-5 text-coffee">Acompanhe as delícias, conheça nossas criações artesanais e descubra as novidades da Luz de Menina.</p>
          </div>
          <CTA href={site.instagramUrl} external variant="outline">Conheça nosso Instagram</CTA>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {g.map((p, i) => (
            <Reveal key={i} delay={i * 70} className={i % 2 ? "lg:mt-10" : ""}>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="group relative block aspect-[4/5] overflow-hidden rounded-sm photo-zoom" aria-label={`${p.alt} — ver no Instagram`}>
                <Img src={p.src} alt={p.alt} />
                <span className="absolute inset-0 flex items-center justify-center bg-espresso/0 text-offwhite opacity-0 transition-all duration-500 group-hover:bg-espresso/40 group-hover:opacity-100"><Instagram /></span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="bg-offwhite py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <Reveal>
          <div className="flex justify-center"><Divider /></div>
          <h2 className="mt-6 text-4xl text-espresso sm:text-6xl">Vamos compartilhar algo especial?</h2>
          <p className="mx-auto mt-6 max-w-xl text-coffee">Conheça nossos produtos, descubra nossas criações artesanais e entre em contato para saber mais.</p>
          <WhatsAppCTA variant="gold" className="mt-10">Conversar pelo WhatsApp</WhatsAppCTA>
          {!whatsappLink() && <p className="mt-3 text-xs text-coffee">Número do WhatsApp em breve.</p>}
        </Reveal>
        <Reveal delay={120} className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border text-left sm:grid-cols-3">
          <div className="bg-offwhite p-8">
            <MapPin className="h-5 w-5 text-gold" />
            <p className="mt-4 font-serif text-xl text-espresso">{site.name}</p>
            <p className="mt-2 text-sm text-coffee">{site.address}<br />{site.city}</p>
          </div>
          <div className="bg-offwhite p-8">
            <Clock className="h-5 w-5 text-gold" />
            <p className="mt-4 font-serif text-xl text-espresso">Horários divulgados</p>
            <ul className="mt-2 space-y-1 text-sm text-coffee">
              {site.hours.map((h) => <li key={h.days}><strong className="font-semibold">{h.days}:</strong> {h.time}</li>)}
            </ul>
          </div>
          <div className="bg-offwhite p-8">
            <Instagram className="h-5 w-5 text-gold" />
            <p className="mt-4 font-serif text-xl text-espresso">Instagram</p>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-coffee underline decoration-gold underline-offset-4">{site.instagramHandle}</a>
          </div>
        </Reveal>
        <p className="mt-6 text-xs italic text-coffee">Endereço e horários sujeitos a confirmação — fale com a marca antes de nos visitar.</p>
      </div>
    </section>
  );
}

function Footer() {
  const wa = whatsappLink();
  return (
    <footer className="bg-espresso py-16 text-offwhite">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3 lg:px-10">
        <div>
          <Logo light />
          <p className="mt-5 font-script text-2xl text-gold">Feito com amor e carinho.</p>
          <p className="mt-2 text-sm text-offwhite/70">{site.city}</p>
        </div>
        <nav aria-label="Rodapé">
          <ul className="space-y-2 text-sm text-offwhite/80">
            {nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-gold">{n.label}</a></li>)}
          </ul>
        </nav>
        <ul className="space-y-2 text-sm text-offwhite/80">
          <li><a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Instagram {site.instagramHandle}</a></li>
          {wa && <li><a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp</a></li>}
        </ul>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t border-offwhite/15 px-6 pt-6 text-xs text-offwhite/60 lg:px-10">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
