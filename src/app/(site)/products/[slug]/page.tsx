import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllProductSlugs,
  getProductBySlug,
} from "@/lib/products";
import { ProductDetailView } from "@/components/shared/ProductDetailView";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/ui/PageHero";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <PageHero
        tag={product.tagline}
        title={
          <span>
            {product.name.replace(/\//g, " / ")}
          </span>
        }
        description={product.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />
      <ProductDetailView product={product} />
      <CTASection
        title={`Order Custom ${product.name} for Your Academy`}
        description="Tell us your design, quantity, and requirements. We will respond with a quote and mockup options."
        premium
      />
    </>
  );
}
