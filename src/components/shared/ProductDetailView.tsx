import { whatsappUrl } from "@/lib/constants";
import { getRelatedProducts } from "@/lib/products";
import { IMAGE_ALT, IMAGES } from "@/lib/images";
import type { Product } from "@/types";
import { ProductCard } from "@/components/shared/ProductCard";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ShowcaseImage } from "@/components/ui/ShowcaseImage";
import { Tag } from "@/components/ui/Tag";

type ProductDetailViewProps = {
  product: Product;
};

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const related = getRelatedProducts(product.slug);
  const relatedCategories = related.map((p) => ({
    id: p.slug,
    name: p.name,
    description: p.shortDescription,
    href: `/products/${p.slug}`,
    icon: p.icon,
  }));

  return (
    <>
      <section className="section-padding bg-charcoal">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <ShowcaseImage
                src={IMAGES.products}
                alt={`${IMAGE_ALT.products} - ${product.name}`}
                aspectClass="aspect-[4/3] md:aspect-[16/10] lg:aspect-square"
                objectFit="contain"
                overlay="gold"
                glow
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="rounded-sm bg-[linear-gradient(135deg,#060606,#171207)]"
              />
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Button href="/quote" showArrow className="w-full">
                  Request a Quote
                </Button>
                <Button href={whatsappUrl} variant="whatsapp" className="w-full px-5">
                  <WhatsAppIcon size={18} />
                  WhatsApp
                </Button>
              </div>
            </div>

            <div>
              <Tag className="mb-4">{product.category}</Tag>
              <h2 className="mb-5 font-display text-[clamp(2rem,4vw,3.75rem)] leading-tight font-semibold text-off-white">
                Custom {product.name}
              </h2>
              <p className="mb-8 max-w-[680px] text-base leading-8 text-grey-light">
                {product.longDescription}
              </p>

              <div className="mb-8 border border-gold/12 bg-black/30 p-6">
                <h3 className="mb-3 font-condensed text-xs font-bold tracking-[0.15em] text-gold uppercase">
                  Built For
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {product.suitableFor.map((item) => (
                    <li
                      key={item}
                      className="border border-gold/20 bg-gold/5 px-3 py-1.5 text-xs text-grey-light"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <section className="border border-gold/12 bg-black/30 p-6">
                  <h3 className="mb-5 font-condensed text-xs font-bold tracking-[0.15em] text-gold uppercase">
                    Customization Options
                  </h3>
                  <ul className="space-y-3">
                    {product.customizationOptions.map((opt) => (
                      <li
                        key={opt}
                        className="flex gap-3 text-sm leading-6 text-grey before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:bg-gold before:content-['']"
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="border border-gold/12 bg-black/30 p-6">
                  <h3 className="mb-5 font-condensed text-xs font-bold tracking-[0.15em] text-gold uppercase">
                    Materials & Features
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-sm leading-6 text-grey before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:bg-gold before:content-['']"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="mt-6 border border-gold/12 bg-black/30 p-6">
                <h3 className="mb-5 font-condensed text-xs font-bold tracking-[0.15em] text-gold uppercase">
                  Product Details
                </h3>
                <div className="divide-y divide-gold/12">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.key}
                      className="grid grid-cols-[0.8fr_1.2fr] gap-4 py-3 text-sm"
                    >
                      <span className="text-grey">{spec.key}</span>
                      <span className="text-right font-condensed font-semibold tracking-wide text-off-white">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <div className="mt-6 border border-gold/20 bg-gold/5 p-6">
                <p className="text-sm leading-7 text-grey-light">
                  {product.pricingNote}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Button href="/quote" showArrow className="w-full sm:w-auto">
                  Request a Quote
                </Button>
                <Button href={whatsappUrl} variant="whatsapp" className="w-full sm:w-auto">
                  <WhatsAppIcon size={18} />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {relatedCategories.length > 0 && (
        <section className="section-padding bg-black">
          <Container>
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <Tag className="mb-4">Related Products</Tag>
                <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight font-semibold text-off-white">
                  Complete the Kit
                </h2>
              </div>
              <Button href="/products" variant="outline">
                View More Products
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCategories.map((p) => (
                <ProductCard key={p.id} product={p} premium />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
