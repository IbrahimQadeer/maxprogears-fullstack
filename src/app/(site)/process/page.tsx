import type { Metadata } from "next";
import { fullProcessSteps } from "@/data/process";
import { IMAGE_ALT, IMAGES } from "@/lib/images";
import { CTASection } from "@/components/shared/CTASection";
import { ProcessTimeline } from "@/components/shared/ProcessTimeline";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShowcaseImage } from "@/components/ui/ShowcaseImage";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Our step-by-step custom gear process from enquiry and mockup approval to production, quality check, and shipping.",
};

const clarityPoints = [
  "Clear communication before production",
  "Mockup approval before final production",
  "Size and quantity confirmation",
  "Production updates when available",
  "Final inspection before shipping",
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        tag="Our Process"
        title={
          <>
            From Concept to <em className="text-gold italic">Delivery</em>
          </>
        }
        description="A clear step-by-step process with mockup approval, production updates, quality checks, and tracked shipping."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Process" }]}
        className="pt-[128px] pb-14 md:pt-[140px] md:pb-16"
      />

      <section className="bg-charcoal py-[64px] md:py-[88px]">
        <Container>
          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeader
              tag="Step by Step"
              title="A Practical Path for Custom Gear Orders"
              description="Each stage is designed to keep artwork, quantities, sizing, production details, and shipping expectations clear before the next step begins."
              className="mb-0"
            />
            <p className="max-w-[560px] text-sm leading-7 text-grey lg:justify-self-end">
              The process stays simple: share the idea, confirm the details,
              approve the mockup, then move into production and dispatch with
              clear checkpoints along the way.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_390px] lg:items-start">
            <ProcessTimeline steps={fullProcessSteps} />
            <aside className="lg:sticky lg:top-28">
              <ShowcaseImage
                src={IMAGES.details}
                alt={IMAGE_ALT.details}
                aspectClass="aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5]"
                objectFit="contain"
                overlay="gold"
                glow
                sizes="(max-width: 1024px) 100vw, 390px"
                className="rounded-sm bg-[linear-gradient(135deg,#060606,#171207)]"
              />
              <div className="mt-5 border border-gold/12 bg-black/35 p-5">
                <Tag className="mb-3">Order Clarity</Tag>
                <p className="text-sm leading-7 text-grey">
                  Mockups, production details, quality checks, and shipping
                  information help keep custom orders organized from approval
                  through delivery.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-black">
        <Container>
          <SectionHeader
            tag="What You Can Expect"
            title="Clear Checkpoints Before Production and Shipping"
            description="Custom manufacturing has moving parts. These checkpoints help keep the order practical, visible, and easier to approve."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {clarityPoints.map((point, index) => (
              <article
                key={point}
                className="border border-gold/12 bg-charcoal/45 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-charcoal"
              >
                <span
                  className="mb-5 block font-condensed text-[13px] font-extrabold tracking-[0.16em] text-gold"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-condensed text-sm leading-6 font-bold tracking-[0.1em] text-off-white uppercase">
                  {point}
                </h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        tag="Start Your Order"
        title="Ready to Start Your Custom Gear Order?"
        description="Send your enquiry today. We will review your product requirements and walk you through the next step."
        premium
      />
    </>
  );
}
