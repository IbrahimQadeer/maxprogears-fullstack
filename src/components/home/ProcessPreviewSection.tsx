import { processSteps } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProcessPreviewSection() {
  return (
    <section className="section-padding bg-charcoal">
      <Container>
        <SectionHeader
          tag="How It Works"
          title={
            <>
              From Idea to <em className="text-gold italic">Delivery</em>
            </>
          }
          centered
        />
        <div className="grid grid-cols-1 border border-gold/12 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <article
              key={step.id}
              className={`p-8 md:p-12 ${
                index < processSteps.length - 1
                  ? "border-b border-gold/12 lg:border-r lg:border-b-0"
                  : ""
              }`}
            >
              <p className="mb-4 font-condensed text-[60px] leading-none font-extrabold text-gold/10">
                {step.number}
              </p>
              <h3 className="mb-2.5 font-condensed text-sm font-bold tracking-[0.12em] text-off-white uppercase">
                {step.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-grey">{step.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/process" variant="outline">
            View Full Process
          </Button>
        </div>
      </Container>
    </section>
  );
}
