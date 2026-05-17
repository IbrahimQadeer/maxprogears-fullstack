import { whatsappUrl } from "@/lib/constants";
import { getRelatedProducts } from "@/lib/products";
import type { Product } from "@/types";
import { ProductCard } from "@/components/shared/ProductCard";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
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
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex aspect-square items-center justify-center border border-gold/20 bg-gradient-to-br from-charcoal to-black">
                <span className="text-[100px] opacity-20" aria-hidden>
                  {product.icon}
                </span>
              </div>
            </div>
            <div>
              <Tag className="mb-4">{product.tagline}</Tag>
              <h2 className="mb-5 font-display text-3xl text-off-white">
                {product.name}
              </h2>
              <p className="mb-7 text-[15px] leading-relaxed text-grey">
                {product.longDescription}
              </p>

              <h3 className="mb-3 font-condensed text-xs font-bold tracking-[0.15em] text-gold uppercase">
                Customization Options
              </h3>
              <ul className="mb-7 space-y-2">
                {product.customizationOptions.map((opt) => (
                  <li
                    key={opt}
                    className="flex gap-2 text-sm text-grey before:text-gold before:content-['•']"
                  >
                    {opt}
                  </li>
                ))}
              </ul>

              <h3 className="mb-3 font-condensed text-xs font-bold tracking-[0.15em] text-gold uppercase">
                Suitable For
              </h3>
              <ul className="mb-7 flex flex-wrap gap-2">
                {product.suitableFor.map((item) => (
                  <li
                    key={item}
                    className="border border-gold/20 px-3 py-1 text-xs text-grey-light"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="divide-y divide-gold/12">
                {product.specs.map((spec) => (
                  <div
                    key={spec.key}
                    className="flex justify-between gap-4 py-3 text-sm"
                  >
                    <span className="text-grey">{spec.key}</span>
                    <span className="text-right font-condensed font-semibold tracking-wide text-off-white">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border border-gold/20 bg-gold/5 p-6">
                <p className="text-sm leading-relaxed text-grey">
                  {product.pricingNote}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/quote" showArrow>
                  Request a Quote
                </Button>
                <Button href={whatsappUrl} variant="whatsapp">
                  <WhatsAppIcon size={18} />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="mb-4 font-condensed text-xs font-bold tracking-[0.15em] text-gold uppercase">
              Materials & Features
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="border border-gold/12 bg-black/40 px-4 py-3 text-sm text-grey"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {relatedCategories.length > 0 && (
        <section className="section-padding bg-black">
          <Container>
            <h2 className="mb-10 font-display text-3xl text-off-white">
              Related Products
            </h2>
            <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCategories.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
