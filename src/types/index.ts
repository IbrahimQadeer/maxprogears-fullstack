/** Shared types — extend when Supabase schemas are added */

export type NavLink = {
  label: string;
  href: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: string;
};

export type ProductSpec = {
  key: string;
  value: string;
};

/** Full product record for detail pages — maps to future Supabase `products` table */
export type Product = {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  category: string;
  customizationOptions: string[];
  suitableFor: string[];
  features: string[];
  specs: ProductSpec[];
  pricingNote: string;
  relatedSlugs: string[];
};

export type WhyChooseItem = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type GalleryItem = {
  id: string;
  label: string;
  icon: string;
  gradient: string;
  variant?: "default" | "tall" | "wide";
};

export type GallerySection = {
  id: string;
  title: string;
  tag: string;
  items: GalleryItem[];
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type CustomizationOption = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type HeroHighlight = {
  value: string;
  label: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  location: string;
  instagram: string;
  instagramHandle: string;
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
};
