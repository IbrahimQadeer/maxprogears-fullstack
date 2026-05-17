import { processSteps } from "@/data/home";
import { IMAGE_ALT, IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShowcaseImage } from "@/components/ui/ShowcaseImage";

export function ProcessPreviewSection() {
  return (
    <section className="section-padding bg-charcoal">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <SectionHeader
              tag="How It Works"
              title={
                <>
                  From Idea to <em className="text-gold italic">Delivery</em>
                </>
              }
              description="A clear production path for custom academy gear: artwork, mockups, approval, production, inspection, and tracked shipping."
              className="mb-10"
            />
            <ShowcaseImage
              src={IMAGES.details}
              alt={IMAGE_ALT.details}
              aspectClass="aspect-[4/3] md:aspect-[16/10]"
              objectFit="contain"
              overlay="gold"
              glow
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="rounded-sm bg-[linear-gradient(135deg,#070707,#17130a)]"
            />
          </div>

          <div className="grid grid-cols-1 gap-3">
            {processSteps.map((step) => (
              <article
                key={step.id}
                className="group grid grid-cols-[auto_1fr] gap-5 border border-gold/12 bg-black/35 p-5 transition-all duration-300 hover:border-gold/40 hover:bg-black/60 md:p-6"
              >
                <p className="font-condensed text-4xl leading-none font-extrabold text-gold/25 transition-colors group-hover:text-gold">
                  {step.number}
                </p>
                <div>
                  <h3 className="mb-2 font-condensed text-sm font-bold tracking-[0.12em] text-off-white uppercase">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-7 text-grey">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
            <div className="pt-5">
              <Button href="/process" variant="outline">
                View Full Process
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
