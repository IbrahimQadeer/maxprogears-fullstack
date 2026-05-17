import { productCategories } from "@/data/home";
import { IMAGE_ALT, IMAGES } from "@/lib/images";
import { ProductCard } from "@/components/shared/ProductCard";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionImageBlock } from "@/components/ui/SectionImageBlock";

export function ProductCategoriesSection() {
  return (
    <section className="section-padding bg-charcoal">
      <Container>
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            tag="Product Range"
            title="Everything Your Academy Needs"
            description="Build a complete academy kit with custom combat sports gear made around your colors, artwork, labels, and product requirements."
            className="mb-0"
          />
          <p className="max-w-[560px] text-sm leading-7 text-grey lg:justify-self-end">
            Keep the range focused or build a full drop across no-gi, gi, fight
            wear, and branded team apparel. Each category is a starting point for
            custom production.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <SectionImageBlock
            src={IMAGES.products}
            alt={IMAGE_ALT.products}
            aspectClass="aspect-[4/3] md:aspect-[16/10] lg:h-full lg:min-h-[520px]"
            sizes="(max-width: 1024px) 100vw, 48vw"
            objectFit="contain"
            overlay="gold"
            className="rounded-sm bg-[linear-gradient(135deg,#070707,#17130a)]"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {productCategories.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                premium
                ctaLabel={
                  product.id === "custom-teamwear"
                    ? "View All Products"
                    : "Explore"
                }
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
