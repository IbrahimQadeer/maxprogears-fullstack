import type { Metadata } from "next";
import { customizationOptions } from "@/data/customization";
import { CTASection } from "@/components/shared/CTASection";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Customization",
  description:
    "Logo placement, sublimation, embroidery, woven labels, private label branding, and packaging for custom combat sports gear.",
};

export default function CustomizationPage() {
  return (
    <>
      <PageHero
        tag="Custom Options"
        title={
          <>
            Your Brand.
            <br />
            <em className="text-gold italic">Your Gear.</em>
          </>
        }
        description="Every detail of your gear can be customized — from fabric and print to labels, patches, and packaging."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Customization" },
        ]}
      />

      <section className="section-padding bg-charcoal">
        <Container>
          <SectionHeader
            tag="Decoration Methods"
            title="Customization Techniques"
            centered
          />
          <div className="grid gap-0.5 bg-gold/12 sm:grid-cols-2 lg:grid-cols-3">
            {customizationOptions.map((opt) => (
              <article
                key={opt.id}
                className="bg-charcoal p-8 transition-colors hover:bg-[#1f1f1f] md:p-10"
              >
                <span className="mb-5 block text-4xl" aria-hidden>
                  {opt.icon}
                </span>
                <h3 className="mb-2.5 font-condensed text-base font-bold tracking-[0.1em] text-off-white uppercase">
                  {opt.title}
                </h3>
                <p className="text-sm leading-relaxed text-grey">
                  {opt.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to Design Your Custom Gear?"
        description="Send us your logo and ideas. Our team will prepare a detailed quote and mockup."
      />
    </>
  );
}
