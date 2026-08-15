/**
 * Compact global hero banner config — shown on every page via root layout.
 * Distinct from full-bleed PageHero (homepage / page-level heroes).
 */

export type GlobalHeroConfig = {
  src: string;
  alt: string;
  tagline: string;
  phoneDisplay?: string;
  phoneTel?: string;
};

export const GLOBAL_HERO: GlobalHeroConfig = {
  // Compressed JPEG (~259KB); next/image serves AVIF/WebP variants.
  src: "/images/global-hero/heyberkshire.jpg",
  alt: "Corona del Mar and Orange County coastal real estate with Dr. Gene Boyle",
  tagline: "eugeneboyle.com — Corona del Mar & Orange County by Dr. Gene Boyle",
  phoneDisplay: "(702) 222-1964",
  phoneTel: "tel:+17022221964",
};
