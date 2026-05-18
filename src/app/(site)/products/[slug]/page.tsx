import type { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { whatsappUrl } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PublicProductDetailView } from "@/components/shared/PublicProductDetailView";
import { PublicProductCard } from "@/components/shared/PublicProductCard";
import type { ProductRecord } from "@/types";

export const dynamic = "force-dynamic";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const { data: product } = await supabase
    .from("products")
    .select("name, short_description")
    .eq("slug", slug)
    .eq("active", true)
    .maybeSingle();

  return {
    title: product?.name ?? "MAXPROGEARS Product",
    description:
      product?.short_description ??
      "Explore premium custom combat sports products from MAXPROGEARS.",
  };
}

function ProductNotFound({ slug }: { slug: string }) {
  return (
    <main className="text-white">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950/90 p-10 shadow-2xl shadow-black/40">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
              Product not found
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white">
              We couldn’t find that product
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-base leading-7 text-zinc-400">
              The page for <span className="font-semibold text-white">{slug}</span> does not exist or the product is no longer active.
              Explore other premium MAXPROGEARS products below.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/products" variant="outline" className="w-full sm:w-auto">
              View products
            </Button>
            <Button href={`${whatsappUrl}?text=${encodeURIComponent(
              "Hi MAXPROGEARS, I’m interested in a product but it appears to be unavailable."
            )}`} variant="whatsapp" className="w-full sm:w-auto">
              WhatsApp support
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = params;
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .eq("active", true)
    .maybeSingle();

  if (error || !product) {
    return <ProductNotFound slug={slug} />;
  }

  const { data: relatedProducts = [] } = await supabase
    .from("products")
    .select("*")
    .eq("category", product.category)
    .eq("active", true)
    .neq("id", product.id)
    .limit(3);

  return (
    <main className="text-white">
      <PageHero
        tag={product.category ?? "Premium Product"}
        title={<span>{product.name}</span>}
        description={product.short_description ?? "Premium combat sports product."}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />

      <PublicProductDetailView
        product={product as ProductRecord}
        relatedProducts={relatedProducts as ProductRecord[]}
      />

      <section className="section-padding bg-black">
        <Container>
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950/80 p-8 shadow-2xl shadow-black/30">
            <h2 className="text-3xl font-semibold tracking-tight text-white">Need help selecting the best product?</h2>
            <p className="mt-4 text-zinc-400">
              Contact our team for custom sizing, branding, or bulk order guidance. We provide full support for every arena-ready kit.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/quote" showArrow className="w-full sm:w-auto">
                Get a quote
              </Button>
              <Button
                href={`${whatsappUrl}?text=${encodeURIComponent(
                  `Hi MAXPROGEARS, I’m interested in ${product.name} and would like more information.`
                )}`}
                variant="whatsapp"
                className="w-full sm:w-auto"
              >
                WhatsApp us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
