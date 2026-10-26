// Central place for all editable brand data.
import schiacciata from "@/assets/schiacciata.png.asset.json";
import bowls from "@/assets/bowls.png.asset.json";
import sunflower from "@/assets/sunflower.png.asset.json";
import focaccia from "@/assets/focaccia.png.asset.json";
import cookies from "@/assets/cookies.png.asset.json";
import cinnamon from "@/assets/cinnamon.png.asset.json";
import cookiePlate from "@/assets/cookie_plate.png.asset.json";
import brookie from "@/assets/brookie.png.asset.json";
import cafe from "@/assets/cafe.jpg";
import mesa from "@/assets/mesa.jpg";

export const site = {
  name: "Luz de Menina Ateliê & Café",
  /** WhatsApp number with country + area code, digits only (e.g. "5518999999999"). Leave empty until confirmed. */
  whatsapp: "",
  whatsappMessage: "Olá! Conheci a Luz de Menina pelo site e gostaria de saber mais.",
  instagramUrl: "https://www.instagram.com/luzdemeninacafe/",
  instagramHandle: "@luzdemeninacafe",
  city: "Valparaíso – SP",
  address: "Rua Luiz Augusto de Arruda, 158",
  hours: [
    { days: "Terça a sexta-feira", time: "10h às 12h e 13h às 18h" },
    { days: "Sábado", time: "9h às 16h" },
  ],
};

export function whatsappLink(): string | null {
  if (!site.whatsapp) return null;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
}

export const photos = {
  schiacciata: schiacciata.url,
  bowls: bowls.url,
  sunflower: sunflower.url,
  focaccia: focaccia.url,
  cookies: cookies.url,
  cinnamon: cinnamon.url,
  cookiePlate: cookiePlate.url,
  brookie: brookie.url,
  cafe,
  mesa,
};

/** Provisional prices taken from the Instagram menu — confirm with the owner. */
export const menu = [
  { group: "Cafés", items: [
    { name: "Espresso", price: "R$ 4,50" },
    { name: "Cappuccino tradicional", price: "R$ 12,00" },
    { name: "Iced Vanilla Latte", price: "R$ 12,90" },
  ]},
  { group: "Salgados", items: [
    { name: "Schiacciata de frango desfiado", price: "R$ 10,50" },
  ]},
  { group: "Doces", items: [
    { name: "Cookie tradicional", price: "R$ 17,00" },
    { name: "Brookie", price: "R$ 16,00" },
    { name: "Cinnamon roll tradicional", price: "R$ 14,00" },
  ]},
];

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Nossa essência", href: "#essencia" },
  { label: "Delícias artesanais", href: "#delicias" },
  { label: "Cerâmica", href: "#ceramica" },
  { label: "Contato", href: "#contato" },
];
