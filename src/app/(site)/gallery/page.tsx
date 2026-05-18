import type { Metadata } from "next";
import { gallerySections } from "@/data/gallery";
import { siteConfig } from "@/lib/constants";
import { IMAGE_ALT, IMAGES } from "@/lib/images";
import { CTASection } from "@/components/shared/CTASection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionImageBlock } from "@/components/ui/SectionImageBlock";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Custom BJJ gear, no-gi apparel, teamwear, and packaging from MAX PRO GEARS.",
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
        description="Custom combat sports gear for academies and teams — gis, rashguards, shorts, apparel, and finishing details."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="section-padding bg-black pt-0">
        <Container wide>
          <SectionImageBlock
            src={IMAGES.gallery}
            alt={IMAGE_ALT.gallery}
            aspectClass="aspect-[16/10] md:aspect-[2/1]"
            className="mb-16"
          />

          <div className="grid gap-12 md:grid-cols-2">
            {gallerySections.map((section) => (
              <article
                key={section.id}
                className="border border-gold/12 bg-charcoal/50 p-8 md:p-10"
              >
                <p className="mb-2 font-condensed text-[11px] font-bold tracking-[0.2em] text-gold uppercase">
                  {section.tag}
                </p>
                <h2 className="mb-4 font-display text-2xl text-off-white">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item.id}
                      className="text-sm text-grey before:mr-2 before:text-gold before:content-['•']"
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

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
