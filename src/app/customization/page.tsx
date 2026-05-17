import type { Metadata } from "next";
import { customizationOptions } from "@/data/customization";
import { whatsappUrl } from "@/lib/constants";
import { IMAGE_ALT, IMAGES } from "@/lib/images";
import { CTASection } from "@/components/shared/CTASection";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShowcaseImage } from "@/components/ui/ShowcaseImage";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Customization",
  description:
    "Logo placement, sublimation, embroidery, woven labels, private label branding, and packaging for custom combat sports gear.",
};

const processSteps = [
  {
    title: "Send Logo & Colors",
    description:
      "Share your artwork, color references, products, and customization notes.",
  },
  {
    title: "Receive Mockup",
    description:
      "We prepare a visual direction so placement and details are clear before production.",
  },
  {
    title: "Approve Design",
    description:
      "Review the mockup and confirm required adjustments before the order moves forward.",
  },
  {
    title: "Confirm Order Details",
    description:
      "Finalize products, sizes, quantities, labels, packaging, and shipping options.",
  },
  {
    title: "Production Starts",
    description:
      "Manufacturing begins after the approved design and order details are confirmed.",
  },
];

export default function CustomizationPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-black via-dark to-[#101008] pt-[128px] pb-14 md:pt-[140px] md:pb-16">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Customization" },
            ]}
            className="mb-8"
          />
          <Tag className="mb-5">Custom Options</Tag>
          <h1 className="max-w-3xl font-display text-[clamp(2.75rem,6vw,5rem)] leading-[0.98] font-semibold text-off-white">
            Your Brand.
            <br />
            <em className="text-gold italic">Your Gear.</em>
          </h1>
          <Divider />
          <p className="max-w-[680px] text-base leading-8 text-grey-light md:text-lg">
            From fabric selection and print placement to labels, patches,
            embroidery, and packaging, every detail can be built around your
            academy or brand identity.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href="/quote" showArrow className="w-full sm:w-auto">
              Request a Quote
            </Button>
            <Button href={whatsappUrl} variant="whatsapp" className="w-full sm:w-auto">
              <WhatsAppIcon size={18} />
              WhatsApp Us
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-charcoal py-[64px] md:py-[88px]">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <ShowcaseImage
              src={IMAGES.details}
              alt={IMAGE_ALT.details}
              aspectClass="aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5]"
              objectFit="contain"
              overlay="gold"
              glow
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="rounded-sm bg-[linear-gradient(135deg,#060606,#171207)]"
            />
            <div className="max-w-[620px]">
              <Tag className="mb-5">Customization Support</Tag>
              <h2 className="mb-6 font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight font-semibold text-off-white">
                Built Around the Details That Define Your Kit
              </h2>
              <div className="mb-7 h-px w-20 bg-gold/70" aria-hidden />
              <p className="mb-5 text-base leading-8 text-grey">
                Custom gear needs more than a logo dropped onto a template. We
                help translate your academy or brand identity into production
                details: artwork placement, trims, labels, fabric direction,
                decoration methods, and packaging notes.
              </p>
              <p className="text-base leading-8 text-grey">
                The process stays practical and visual, so you can review the
                key decisions before manufacturing begins.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-black">
        <Container>
          <SectionHeader
            tag="Customization Options"
            title="Make Every Product Feel Like Yours"
            description="Choose the finishing details that support your academy identity, team kit, or private label product line."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {customizationOptions.map((opt, index) => (
              <article
                key={opt.id}
                className="group relative overflow-hidden border border-gold/12 bg-charcoal/45 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-charcoal"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-gold/70 via-gold/20 to-transparent opacity-70" />
                <span
                  className="mb-7 block font-condensed text-[13px] font-extrabold tracking-[0.16em] text-gold/70 transition-colors group-hover:text-gold"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-3 font-condensed text-base font-bold tracking-[0.1em] text-off-white uppercase">
                  {opt.title}
                </h3>
                <p className="text-sm leading-7 text-grey">{opt.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-charcoal">
        <Container>
          <SectionHeader
            tag="Process Support"
            title="From Artwork to Approved Production"
            description="A short, clear path for turning your logo, colors, and product requirements into a production-ready order."
          />
          <div className="grid gap-3 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="border border-gold/12 bg-black/35 p-6 transition-all duration-300 hover:border-gold/40 hover:bg-black/60"
              >
                <p className="mb-5 font-condensed text-4xl leading-none font-extrabold text-gold/25">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-3 font-condensed text-sm font-bold tracking-[0.12em] text-off-white uppercase">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-grey">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        tag="Ready to Customize?"
        title="Ready to Customize Your Academy Gear?"
        description="Send us your logo, product list, colors, and design direction. Our team will prepare quote and mockup options for review."
        premium
      />
    </>
  );
}
