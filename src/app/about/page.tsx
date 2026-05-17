import type { Metadata } from "next";
import {
  aboutStoryBullets,
  aboutValues,
  whatWeSupply,
  whoWeServe,
} from "@/data/about";
import { IMAGE_ALT, IMAGES } from "@/lib/images";
import { CTASection } from "@/components/shared/CTASection";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShowcaseImage } from "@/components/ui/ShowcaseImage";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "About",
  description:
    "MAXPROGEARS is a custom BJJ and MMA gear supplier based in Sialkot, Pakistan, serving academies, gyms, and teams worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About MAXPROGEARS"
        title={
          <>
            Built to Supply Serious{" "}
            <em className="text-gold italic">Combat Sports</em> Programs
          </>
        }
        description="MAXPROGEARS helps academies, teams, and fight brands create custom training gear with clean communication, detailed mockups, and production-ready execution."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        className="pt-[128px] pb-14 md:pt-[140px] md:pb-16"
      />

      <section className="bg-charcoal py-[64px] md:py-[88px]">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div className="max-w-[640px]">
              <Tag className="mb-5">Our Story</Tag>
              <h2 className="mb-6 font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight font-semibold text-off-white">
                From Sialkot to{" "}
                <em className="text-gold italic">Academies Worldwide</em>
              </h2>
              <div className="mb-7 h-px w-20 bg-gold/70" aria-hidden />
              <p className="mb-5 text-base leading-8 text-grey">
                MAXPROGEARS is a custom BJJ and MMA gear supplier based in
                Sialkot, Pakistan, a global centre for combat sports
                manufacturing. We work with academies, gyms, fight teams, and
                martial arts clubs to produce gear that represents their
                identity and training needs.
              </p>
              <p className="mb-8 text-base leading-8 text-grey">
                Every order starts with requirements, artwork, product choices,
                and practical production details. The goal is simple: custom
                gear that feels organized before it ever reaches the cutting
                table.
              </p>
              <ul className="grid gap-3">
                {aboutStoryBullets.map((item) => (
                  <li key={item} className="flex gap-4 text-sm leading-7 text-grey">
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-gold"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ShowcaseImage
              src={IMAGES.details}
              alt={IMAGE_ALT.details}
              aspectClass="aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5]"
              objectFit="contain"
              overlay="gold"
              glow
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-sm bg-[linear-gradient(135deg,#060606,#171207)]"
            />
          </div>
        </Container>
      </section>

      <section className="section-padding bg-black">
        <Container>
          <SectionHeader
            tag="What We Do"
            title="Custom Gear for Academy and Fight Programs"
            description="We supply custom fight gear and team apparel with the branding details academies and combat sports businesses need."
          />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <ShowcaseImage
              src={IMAGES.products}
              alt={IMAGE_ALT.products}
              aspectClass="aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5]"
              objectFit="contain"
              overlay="gold"
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="rounded-sm bg-[linear-gradient(135deg,#060606,#171207)]"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {whatWeSupply.map((item, index) => (
                <article
                  key={item}
                  className="group border border-gold/12 bg-charcoal/55 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-charcoal"
                >
                  <span
                    className="mb-5 block font-condensed text-xs font-extrabold tracking-[0.16em] text-gold/70"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-condensed text-base font-bold tracking-[0.1em] text-off-white uppercase">
                    {item}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-charcoal">
        <Container>
          <SectionHeader
            tag="Who We Serve"
            title="Built Around Real Combat Sports Programs"
            description="The work is shaped around the needs of training rooms, teams, and brands that need custom gear with a clear identity."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whoWeServe.map((item, index) => (
              <article
                key={item.title}
                className="relative overflow-hidden border border-gold/12 bg-black/35 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-black/60"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-gold/70 via-gold/20 to-transparent" />
                <span
                  className="mb-8 block font-condensed text-[13px] font-extrabold tracking-[0.16em] text-gold"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-3 font-condensed text-base font-bold tracking-[0.1em] text-off-white uppercase">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-grey">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-black">
        <Container>
          <SectionHeader
            tag="Our Values"
            title="How We Work"
            description="A practical approach to custom production: clear inputs, careful mockups, product details, and direct order communication."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {aboutValues.map((item, index) => (
              <article
                key={item.id}
                className="border border-gold/12 bg-charcoal/45 p-6 transition-all duration-300 hover:border-gold/40 hover:bg-charcoal"
              >
                <span
                  className="mb-5 flex h-10 w-10 items-center justify-center border border-gold/25 font-condensed text-xs font-extrabold tracking-[0.12em] text-gold"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-3 font-condensed text-sm font-bold tracking-[0.1em] text-off-white uppercase">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-grey">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        tag="Work With Us"
        title="Ready to Build Your Custom Academy Gear?"
        description="Tell us what you need for your academy, team, or brand. We will review the product requirements and respond with quote and mockup options."
        premium
      />
    </>
  );
}
