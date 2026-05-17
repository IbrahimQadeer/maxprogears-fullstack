import { allProducts } from "@/data/products";
import type { Product, ProductCategory } from "@/types";

export function getAllProducts(): Product[] {
  return allProducts;
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return allProducts.map((p) => p.slug);
}

export function getRelatedProducts(slug: string, limit = 3): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return allProducts.slice(0, limit);
  const related = product.relatedSlugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is Product => Boolean(p));
  if (related.length >= limit) return related.slice(0, limit);
  const extras = allProducts.filter(
    (p) => p.slug !== slug && !related.some((r) => r.slug === p.slug),
  );
  return [...related, ...extras].slice(0, limit);
}

/** Product categories for listing pages */
export function getProductCategories(): ProductCategory[] {
  return allProducts.map((p) => ({
    id: p.slug,
    name: p.name,
    description: p.shortDescription,
    href: `/products/${p.slug}`,
    icon: p.icon,
  }));
}
