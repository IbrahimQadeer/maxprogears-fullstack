import type { Metadata } from "next";
import { aboutStoryBullets, aboutValues, whoWeServe } from "@/data/about";
import { CTASection } from "@/components/shared/CTASection";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "About",
  description:
    "MAXPROGEARS is a custom BJJ and MMA gear supplier based in Sialkot, Pakistan — serving academies, gyms, and teams worldwide.",
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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="section-padding bg-charcoal">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <Tag className="mb-5">Our Story</Tag>
              <h2 className="mb-6 font-display text-3xl text-off-white">
                From Sialkot to Academies Worldwide
              </h2>
              <p className="mb-5 text-base leading-relaxed text-grey">
                MAXPROGEARS is a custom BJJ and MMA gear supplier based in
                Sialkot, Pakistan — a global centre for combat sports
                manufacturing. We work with BJJ academies, MMA gyms, fight
                teams, and martial arts clubs to produce gear that represents
                their identity and meets the demands of serious training.
              </p>
              <p className="mb-8 text-base leading-relaxed text-grey">
                Every order is custom. We do not sell generic stock products.
                Our focus is precision-made teamwear and fight gear your
                athletes can train and compete in with confidence.
              </p>
              <ul className="space-y-4">
                {aboutStoryBullets.map((item) => (
                  <li key={item} className="flex gap-4 text-sm text-grey">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative border border-gold/20 bg-gradient-to-br from-charcoal to-black">
              <div className="flex aspect-[4/5] flex-col items-center justify-center p-10 text-center">
                <span className="text-[80px] opacity-10" aria-hidden>
                  🏭
                </span>
                <p className="mt-5 font-condensed text-xs tracking-[0.2em] text-gold uppercase">
                  Sialkot, Pakistan
                </p>
                <p className="mt-2 font-display text-2xl text-off-white">
                  Manufacturing & Craftsmanship
                </p>
                <p className="mt-4 max-w-xs text-sm text-grey">
                  Custom production with quality checks before dispatch. Clear
                  communication from quote to delivery.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-black">
        <Container>
          <SectionHeader
            tag="What We Do"
            title="Custom Gear for Combat Sports Programs"
            description="We manufacture and supply fully customized fight gear and team apparel — built to your specifications, not pulled from a catalogue."
            centered
          />
          <div className="grid gap-px bg-gold/12 sm:grid-cols-2 lg:grid-cols-4">
            {whoWeServe.map((item) => (
              <article key={item.title} className="bg-black p-8">
                <span className="mb-4 block text-3xl" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="mb-2 font-condensed text-sm font-bold tracking-[0.1em] text-off-white uppercase">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-grey">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-charcoal">
        <Container>
          <SectionHeader tag="Our Values" title="How We Work" centered />
          <div className="grid gap-px bg-gold/12 sm:grid-cols-2">
            {aboutValues.map((item) => (
              <article
                key={item.id}
                className="bg-charcoal p-10 transition-colors hover:bg-[#1f1f1f]"
              >
                <span
                  className="mb-5 flex h-[52px] w-[52px] items-center justify-center bg-gold/20 text-xl"
                  aria-hidden
                >
                  {item.icon}
                </span>
                <h3 className="mb-3 font-condensed text-base font-bold tracking-[0.1em] text-off-white uppercase">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-grey">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        tag="Work With Us"
        title="Ready to Work With Us?"
        description="Get in touch and discuss your academy's gear needs."
      />
    </>
  );
}
