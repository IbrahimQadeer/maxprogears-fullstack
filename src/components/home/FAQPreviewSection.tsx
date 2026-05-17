import { homeFaqPreview } from "@/data/home";
import { FAQSection } from "@/components/shared/FAQSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FAQPreviewSection() {
  return (
    <section className="section-padding bg-charcoal">
      <Container>
        <SectionHeader
          tag="FAQ"
          title="Common Questions"
          description="A quick preview of the order questions academies usually ask before starting a custom production run."
          centered
        />
        <div className="mx-auto max-w-[900px] border border-gold/12 bg-black/30 px-5 shadow-[0_24px_60px_rgba(0,0,0,0.25)] md:px-10">
          <FAQSection items={homeFaqPreview} className="max-w-none" />
        </div>
        <div className="mt-12 text-center">
          <Button href="/faq" variant="outline">
            View All FAQs -&gt;
          </Button>
        </div>
      </Container>
    </section>
  );
}
