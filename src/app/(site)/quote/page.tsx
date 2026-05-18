import type { Metadata } from "next";
import { IMAGE_ALT, IMAGES } from "@/lib/images";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShowcaseImage } from "@/components/ui/ShowcaseImage";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a custom quote for BJJ and MMA gear. Share your product type, quantity, and design requirements.",
};

const afterSubmitSteps = [
  "We review your requirements",
  "We discuss quantities and customization",
  "Mockup and design discussion",
  "Production timeline confirmation",
  "Quote response via email or WhatsApp",
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        tag="Get a Custom Quote"
        title={
          <>
            Start Your <em className="text-gold italic">Custom Gear</em>{" "}
            Project
          </>
        }
        description="Tell us about your academy, team, or brand and we'll respond with production options, mockup guidance, timelines, and pricing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Quote Request" },
        ]}
        className="pt-[128px] pb-14 md:pt-[140px] md:pb-16"
      />

      <section className="bg-charcoal py-[64px] md:py-[88px]">
        <Container>
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-[1fr_390px] xl:items-start">
            <div>
              <div className="mb-8">
                <Tag className="mb-5">Quote Request Form</Tag>
                <h2 className="max-w-[720px] font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight font-semibold text-off-white">
                  Share the Details for Your Custom Order
                </h2>
                <div className="my-5 h-px w-20 bg-gold/70" aria-hidden />
                <p className="max-w-[680px] text-base leading-8 text-grey">
                  The more clearly we understand your products, quantities,
                  design direction, and timeline, the more useful the first
                  quote response can be.
                </p>
              </div>
              <QuoteForm />
            </div>

            <aside className="space-y-5 xl:sticky xl:top-28">
              <ShowcaseImage
                src={IMAGES.hero}
                alt={IMAGE_ALT.hero}
                aspectClass="aspect-[4/3] md:aspect-[16/10] xl:aspect-[4/5]"
                objectFit="contain"
                overlay="gold"
                glow
                sizes="(max-width: 1280px) 100vw, 390px"
                className="rounded-sm bg-[linear-gradient(135deg,#060606,#171207)]"
              />
              <div className="border border-gold/20 bg-gold/5 p-6">
                <p className="mb-3 font-condensed text-xs font-bold tracking-[0.2em] text-gold uppercase">
                  Helpful to Include
                </p>
                <ul className="space-y-3 text-sm leading-6 text-grey">
                  <li>Product type and quantity range</li>
                  <li>Size breakdown if known</li>
                  <li>Logo files or design references</li>
                  <li>Customization and packaging notes</li>
                  <li>Target delivery date or event deadline</li>
                </ul>
              </div>
              <div className="border border-gold/12 bg-black/40 p-6">
                <p className="text-sm leading-7 text-grey">
                  Prefer to chat first? Use WhatsApp for a quick conversation
                  before submitting a full quote request.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-black">
        <Container>
          <SectionHeader
            tag="After You Submit"
            title="What Happens After You Submit?"
            description="Your quote request starts a practical review of product type, quantities, customization, timeline, and the best way to respond."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {afterSubmitSteps.map((step, index) => (
              <article
                key={step}
                className="border border-gold/12 bg-charcoal/45 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-charcoal"
              >
                <span
                  className="mb-5 block font-condensed text-[13px] font-extrabold tracking-[0.16em] text-gold"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-condensed text-sm leading-6 font-bold tracking-[0.1em] text-off-white uppercase">
                  {step}
                </h3>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
