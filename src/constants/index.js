import user from "../assets/svg/user.svg";
import shop from "../assets/svg/shop.svg";
import search from "../assets/svg/search.svg";
import heart from "../assets/svg/heart.svg";
import desktop1 from "../assets/desktop/banner-1.webp";
import desktop2 from "../assets/desktop/banner-2.webp";
import desktop3 from "../assets/desktop/banner-3.webp";
import desktop4 from "../assets/desktop/banner-4.webp";
import desktop5 from "../assets/desktop/banner-5.webp";
import mobile1 from "../assets/mobile/mobile-1.webp";
import mobile2 from "../assets/mobile/mobile-2.webp";
import mobile3 from "../assets/mobile/mobile-3.webp";
import mobile4 from "../assets/mobile/mobile-4.webp";
import mobile5 from "../assets/mobile/mobile-5.webp";
import donna from "../assets/carouselType/categoria_donna_hp.webp";
import uomo from "../assets/carouselType/categoria_uomo_hp.webp";
import cavallo from "../assets/carouselType/categoria_cavallo_hp.webp";
import selle from "../assets/carouselType/categoria_selle_hp.webp";

export const arrIcon = [search, heart, user, shop];

export const arrDrop = [
  "donna",
  "uomo",
  "junior",
  "cavallo",
  "eqode",
  "selleria",
];
export const arrDrop2 = ["saddle division", "eq universe", "about lorenzini"];

export const arrDesktop = [desktop1, desktop2, desktop3, desktop4, desktop5];
export const arrMobile = [mobile1, mobile2, mobile3, mobile4, mobile5];
export const btnText = [
  "contemporary donna",
  "glamour donna",
  "collezione uomo",
  "collezione cavallo",
  "donna, uomo, cavallo",
];

export const carouselTypeObj = [
  {
    id: 0,
    title: "donna",
    img: donna,
    text: "Scopri le categorie donna per allenamento, tempo libero e competizione. La sartorialità e il made in Italy si intrecciano con la ricerca di materiali e tessuti innovativi ed altamente performanti, per il massimo comfort e stile.",
  },
  {
    id: 1,
    title: "uomo",
    img: uomo,
    text: "Scopri tutte le categorie dell’abbigliamento maschile e gli articoli per allenamento e competizione. La ricerca di materiali innovativi e altamente performanti garantisce al cavaliere il massimo comfort unendo l'eleganza e lo stile del design italiano.",
  },
  {
    id: 2,
    title: "cavallo",
    img: cavallo,
    text: "Gli accessori per il cavallo Equiline nascono dal know-how di importanti campioni e dalla particolare attenzione al benessere del cavallo. Un’accurata ricerca di materiali di primissima qualità, forme e tecnologie sono il segreto che rende così esclusiva la nostra linea.",
  },
  {
    id: 3,
    title: "selleria",
    img: selle,
    text: "L’eleganza e lo stile del Made in Italy sono ancora una volta mixati dal nostro saper fare artigianale, sapiente e al contempo innovativo. “Una sella per due”, interante personalizzata, capace di coniugare il rispetto del cavallo e il comfort del cavaliere.",
  },
];
