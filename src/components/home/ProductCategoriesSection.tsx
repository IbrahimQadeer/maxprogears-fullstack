import { productCategories } from "@/data/home";
import { ProductCard } from "@/components/shared/ProductCard";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProductCategoriesSection() {
  return (
    <section className="section-padding bg-charcoal">
      <Container>
        <SectionHeader
          tag="Product Range"
          title="Everything Your Academy Needs"
          description="From competition rashguards to full academy kits. Every product crafted to your exact specifications."
          centered
        />
        <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              ctaLabel={
                product.id === "custom-teamwear"
                  ? "View All Products"
                  : "Explore"
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
