// Central place for all editable brand data.
import schiacciata from "@/assets/schiacciata.png.asset.json";
import bowls from "@/assets/bowls.png.asset.json";
import sunflower from "@/assets/sunflower.png.asset.json";
import cookies from "@/assets/cookies.png.asset.json";
import cinnamon from "@/assets/cinnamon.png.asset.json";
import cookiePlate from "@/assets/cookie_plate.png.asset.json";
import brookie from "@/assets/brookie.png.asset.json";
import cafe from "@/assets/cafe.jpg";

export const site = {
  name: "Luz de Menina Ateliê & Café",
  whatsapp: "5518991455004",
  whatsappDisplay: "(18) 99145-5004",
  whatsappMessage: "Olá! Conheci a Luz de Menina pelo Instagram e gostaria de saber mais.",
  instagramUrl: "https://www.instagram.com/luzdemeninacafe/",
  instagramHandle: "@luzdemeninacafe",
  city: "Valparaíso – SP",
  address: "Rua Luiz Augusto de Arruda, 158",
  hours: [
    { days: "Terça a sexta-feira", time: "10h às 12h e 13h às 18h" },
    { days: "Sábado", time: "9h às 16h" },
  ],
};

export function whatsappLink(): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
}

export const photos = {
  schiacciata: schiacciata.url,
  bowls: bowls.url,
  sunflower: sunflower.url,
  cookies: cookies.url,
  cinnamon: cinnamon.url,
  cookiePlate: cookiePlate.url,
  brookie: brookie.url,
  cafe,
};

/** Cardápio sem preços — valores são informados pelo WhatsApp. */
export const menu = [
  { group: "Cafés", items: ["Espresso", "Cappuccino tradicional", "Iced Vanilla Latte"] },
  { group: "Salgados", items: ["Schiacciata de frango desfiado"] },
  { group: "Doces", items: ["Cookie tradicional", "Brookie", "Cinnamon roll tradicional"] },
];

/** Reels do Instagram incorporados no site (só o código do reel). */
export const reels = [
  { id: "De21u4zRFfN", title: "Receita da Luz de Menina" },
  { id: "DcCFbXvJ_g3", title: "Receita da Luz de Menina" },
  { id: "DbEMAKIxi5-", title: "Receita da Luz de Menina" },
];

export const nav = [
  { label: "Cardápio", href: "#cardapio" },
  { label: "Receitas", href: "#receitas" },
  { label: "Cerâmica", href: "#ceramica" },
  { label: "Contato", href: "#contato" },
];
