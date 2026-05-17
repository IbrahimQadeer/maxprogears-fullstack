import type { Metadata } from "next";
import { getProductCategories } from "@/lib/products";
import { CTASection } from "@/components/shared/CTASection";
import { CategoryCard } from "@/components/shared/CategoryCard";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Custom BJJ gis, rashguards, fight shorts, and team apparel for academies and fight teams.",
};

export default function ProductsPage() {
  const categories = getProductCategories();

  return (
    <>
      <PageHero
        tag="Full Product Range"
        title={
          <>
            Everything Your <em className="text-gold italic">Academy</em> Wears
          </>
        }
        description="Customizable product types across fight gear and team apparel. All made to your exact specifications."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />

      <section className="section-padding bg-charcoal">
        <Container>
          <div className="grid grid-cols-2 gap-px bg-gold/12 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.id}
                name={cat.name}
                href={cat.href}
                icon={cat.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        tag="Need Something Else?"
        title="Can't Find What You Need?"
        description="Contact us with your requirements — we manufacture a wide range of combat sports and team apparel."
      />
    </>
  );
}
