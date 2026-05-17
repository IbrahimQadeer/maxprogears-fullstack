import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import { gallerySections } from "@/data/gallery";
import { CTASection } from "@/components/shared/CTASection";
import { GalleryGrid } from "@/components/shared/GalleryGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Placeholder gallery of custom BJJ gear, no-gi apparel, teamwear, and packaging — real project photos coming soon.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        tag="Product Gallery"
        title={
          <>
            Crafted With <em className="text-gold italic">Precision</em>
          </>
        }
        description="Placeholder previews of product categories. Real project photography will be added as your portfolio grows."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      {gallerySections.map((section) => (
        <section
          key={section.id}
          className={`section-padding ${section.id === "no-gi" ? "bg-charcoal" : "bg-black"}`}
        >
          <Container wide>
            <SectionHeader tag={section.tag} title={section.title} />
            <GalleryGrid items={section.items} />
          </Container>
        </section>
      ))}

      <section className="border-t border-gold/12 bg-charcoal py-16">
        <Container className="text-center">
          <p className="mb-6 text-grey">
            Follow us on Instagram for updates and new work.
          </p>
          <Button href={siteConfig.instagram} variant="outline">
            Follow on Instagram
          </Button>
        </Container>
      </section>

      <CTASection
        title="Start Your Custom Order"
        description="Your academy's gear, crafted to your exact design."
      />
    </>
  );
}
