import type { Metadata } from "next";
import { siteConfig, whatsappUrl } from "@/lib/constants";
import { IMAGE_ALT, IMAGES } from "@/lib/images";
import { ContactForm } from "@/components/forms/ContactForm";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShowcaseImage } from "@/components/ui/ShowcaseImage";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact MAXPROGEARS for custom BJJ and MMA gear enquiries via WhatsApp, email, or our contact form.",
};

const contactCards = [
  {
    label: "WhatsApp",
    value: siteConfig.whatsappDisplay,
    href: whatsappUrl,
    icon: <WhatsAppIcon size={18} />,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "Instagram",
    value: siteConfig.instagramHandle,
    href: siteConfig.instagram,
    icon: <InstagramIcon size={18} />,
  },
  {
    label: "Manufacturing Location",
    value: siteConfig.location,
  },
];

const responsePoints = [
  "Response via WhatsApp or email",
  "Mockup discussions available",
  "International academy orders supported",
  "Custom production inquiries welcome",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Get in Touch"
        title={
          <>
            Let&apos;s Build Your{" "}
            <em className="text-gold italic">Custom Gear</em>
          </>
        }
        description="Contact MAXPROGEARS to discuss custom academy apparel, teamwear, fight gear, and production requirements."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        className="pt-[128px] pb-14 md:pt-[140px] md:pb-16"
      />

      <section className="bg-charcoal py-[64px] md:py-[88px]">
        <Container>
          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeader
              tag="Contact Details"
              title="Reach the MAXPROGEARS Team"
              description="Use the channel that works best for your enquiry. Include the product type, quantity, timeline, and any customization notes if you already have them."
              className="mb-0"
            />
            <p className="max-w-[560px] text-sm leading-7 text-grey lg:justify-self-end">
              For quick project discussions, WhatsApp is usually the simplest
              way to share references, logo files, and product details before a
              formal quote.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, index) => {
              const content = (
                <>
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-gold/70 via-gold/20 to-transparent" />
                  <span
                    className="mb-7 flex h-10 w-10 items-center justify-center border border-gold/25 text-gold"
                    aria-hidden
                  >
                    {card.icon ?? String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mb-3 font-condensed text-xs font-bold tracking-[0.16em] text-gold uppercase">
                    {card.label}
                  </p>
                  <p className="text-base leading-7 text-off-white">{card.value}</p>
                </>
              );

              const className =
                "group relative block min-h-[200px] overflow-hidden border border-gold/12 bg-black/35 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-black/60";

              if (card.href) {
                return (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={className}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <article key={card.label} className={className}>
                  {content}
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-black">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <aside className="space-y-5 lg:sticky lg:top-28">
              <ShowcaseImage
                src={IMAGES.gallery}
                alt={IMAGE_ALT.gallery}
                aspectClass="aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5]"
                objectFit="contain"
                overlay="gold"
                glow
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="rounded-sm bg-[linear-gradient(135deg,#060606,#171207)]"
              />
              <div className="border border-gold/12 bg-charcoal/45 p-6">
                <Tag className="mb-3">Project Notes</Tag>
                <p className="text-sm leading-7 text-grey">
                  Share product references, logos, colors, quantity ranges, and
                  delivery timing when possible. It helps us understand the
                  production scope faster.
                </p>
              </div>
            </aside>

            <div>
              <Tag className="mb-5">Send a Message</Tag>
              <h2 className="max-w-[680px] font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight font-semibold text-off-white">
                Tell Us What You Want to Make
              </h2>
              <div className="my-5 h-px w-20 bg-gold/70" aria-hidden />
              <p className="mb-8 max-w-[660px] text-base leading-8 text-grey">
                Use the form for general questions, production discussions, and
                early project enquiries before a formal quote request.
              </p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-charcoal">
        <Container>
          <SectionHeader
            tag="Response & Support"
            title="What to Expect When You Contact Us"
            description="We keep contact practical and focused on understanding the product, customization, quantities, and next best step."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {responsePoints.map((point, index) => (
              <article
                key={point}
                className="border border-gold/12 bg-black/35 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-black/60"
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

      <section className="relative overflow-hidden border-y border-gold/20 bg-gradient-to-br from-black via-[#171307] to-black py-[78px] text-center md:py-[108px]">
        <div
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.12),transparent_58%)]"
          aria-hidden
        />
        <Container>
          <div className="relative mx-auto max-w-[860px]">
            <Tag className="mx-auto mb-5 block w-fit">Start Your Project</Tag>
            <h2 className="mb-5 font-display text-[clamp(2rem,4vw,3.75rem)] leading-tight font-semibold text-off-white">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mb-10 max-w-[640px] text-base leading-8 text-grey-light md:text-lg">
              Send a quote request or message us directly on WhatsApp with your
              custom gear requirements.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <Button href="/quote" showArrow className="w-full sm:w-auto">
                Request a Quote
              </Button>
              <Button href={whatsappUrl} variant="whatsapp" className="w-full sm:w-auto">
                <WhatsAppIcon size={18} />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
