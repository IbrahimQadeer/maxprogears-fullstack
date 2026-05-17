import type { Metadata } from "next";
import { getProductCategories } from "@/lib/products";
import { IMAGE_ALT, IMAGES } from "@/lib/images";
import { CTASection } from "@/components/shared/CTASection";
import { CategoryCard } from "@/components/shared/CategoryCard";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShowcaseImage } from "@/components/ui/ShowcaseImage";

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
            Custom Gear for <em className="text-gold italic">Every Academy</em>{" "}
            Program
          </>
        }
        description="A premium catalog of custom fight gear and team apparel for BJJ academies, MMA gyms, teams, clubs, and combat sports brands."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />

      <section className="bg-charcoal pb-[72px] md:pb-[100px]">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight font-semibold text-off-white">
                Build a Complete{" "}
                <em className="text-gold italic">Custom Kit</em>
              </h2>
              <p className="mt-5 max-w-[620px] text-base leading-8 text-grey">
                Select the product type, share your design direction, and build
                a consistent academy collection across gis, no-gi gear, fight
                shorts, and branded team apparel.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3 border-y border-gold/12 py-6">
                {["Fight Gear", "Team Apparel", "Custom Branding"].map((item) => (
                  <span
                    key={item}
                    className="font-condensed text-[11px] font-bold tracking-[0.14em] text-gold uppercase"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <ShowcaseImage
              src={IMAGES.products}
              alt={IMAGE_ALT.products}
              aspectClass="aspect-[4/3] md:aspect-[16/10]"
              objectFit="contain"
              overlay="gold"
              glow
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="rounded-sm bg-[linear-gradient(135deg,#060606,#171207)]"
            />
          </div>
        </Container>
      </section>

      <section className="section-padding bg-black">
        <Container>
          <SectionHeader
            tag="Catalog"
            title="Choose Your Product Category"
            description="Each category can be customized with academy colors, logos, artwork, labels, and finishing details based on your order requirements."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, index) => (
              <CategoryCard
                key={cat.id}
                name={cat.name}
                href={cat.href}
                description={cat.description}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        tag="Need Something Else?"
        title="Can't Find What You Need?"
        description="Contact us with your requirements. We manufacture a wide range of combat sports and team apparel."
        premium
      />
    </>
  );
}
