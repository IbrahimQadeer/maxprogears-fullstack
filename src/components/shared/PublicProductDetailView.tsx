import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { whatsappUrl } from "@/lib/constants";
import type { ProductRecord } from "@/types";
import { PublicProductCard } from "@/components/shared/PublicProductCard";
import { Container } from "@/components/ui/Container";

type PublicProductDetailViewProps = {
  product: ProductRecord;
  relatedProducts?: ProductRecord[];
};

export function PublicProductDetailView({
  product,
  relatedProducts = [],
}: PublicProductDetailViewProps) {
  const gallery = product.gallery_images ?? [];
  const whatsappMessage = encodeURIComponent(
    `Hi MAXPROGEARS, I’m interested in ${product.name} and would like more information.`,
  );

  return (
    <>
      <section className="section-padding bg-charcoal">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/30">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="h-full w-full min-h-[420px] object-cover"
                />
              ) : (
                <div className="flex h-96 items-center justify-center bg-zinc-900 text-zinc-500">
                  No product image available
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Tag>{product.category}</Tag>
                {product.featured && (
                  <span className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                    Featured
                  </span>
                )}
              </div>

              <div>
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
                  {product.short_description ?? "Premium combat sports product from MAXPROGEARS."}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-zinc-800 bg-black/30 p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">MOQ</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{product.moq ?? "—"}</p>
                </div>
                <div className="rounded-3xl border border-zinc-800 bg-black/30 p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Lead time</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{product.lead_time ?? "—"}</p>
                </div>
              </div>

              <div className="grid gap-4 rounded-[2rem] border border-zinc-800 bg-black/30 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">Product category</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">{product.category}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">Production details</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">
                    {product.full_description ?? "Designed for high performance and custom team orders."}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">Customization support</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">
                    Full artwork, logo placement, fabric choice, sizing and finishing support available for every order.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Button href="/quote" className="w-full">
                  Get a quote
                </Button>
                <Button
                  href={`${whatsappUrl}?text=${whatsappMessage}`}
                  variant="whatsapp"
                  className="w-full"
                >
                  WhatsApp inquiry
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-black">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950/80 p-8 shadow-2xl shadow-black/30">
              <h2 className="text-3xl font-semibold tracking-tight text-white">Full description</h2>
              <p className="mt-5 text-base leading-8 text-zinc-300">
                {product.full_description ?? product.short_description ?? "No additional product details are available."}
              </p>
            </div>

            <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950/80 p-8 shadow-2xl shadow-black/30">
              <h3 className="text-xl font-semibold tracking-tight text-white">Key details</h3>
              <div className="mt-5 grid gap-4">
                <div className="rounded-3xl border border-zinc-800 bg-black/30 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Category</p>
                  <p className="mt-3 text-lg font-semibold text-white">{product.category}</p>
                </div>
                <div className="rounded-3xl border border-zinc-800 bg-black/30 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">MOQ</p>
                  <p className="mt-3 text-lg font-semibold text-white">{product.moq ?? "—"}</p>
                </div>
                <div className="rounded-3xl border border-zinc-800 bg-black/30 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Lead time</p>
                  <p className="mt-3 text-lg font-semibold text-white">{product.lead_time ?? "—"}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {gallery.length > 0 && (
        <section className="section-padding bg-charcoal">
          <Container>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">Gallery</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-off-white">Product images</h2>
              </div>
              <p className="text-sm leading-6 text-zinc-400">Responsive gallery for your product showcase.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="overflow-hidden rounded-[1.75rem] border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/20 transition-transform duration-300 hover:-translate-y-1"
                >
                  <img
                    src={image}
                    alt={`${product.name} gallery ${index + 1}`}
                    className="h-64 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {relatedProducts.length > 0 && (
        <section className="section-padding bg-black">
          <Container>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">Related products</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-off-white">Complete the kit</h2>
              </div>
              <Button href="/products" variant="outline">
                View all products
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedProducts.map((related) => (
                <PublicProductCard key={related.id} product={related} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
