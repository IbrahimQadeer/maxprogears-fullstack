import { homeFaqPreview } from "@/data/home";
import { FAQSection } from "@/components/shared/FAQSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FAQPreviewSection() {
  return (
    <section className="section-padding bg-charcoal">
      <Container>
        <SectionHeader tag="FAQ" title="Common Questions" centered />
        <FAQSection items={homeFaqPreview} />
        <div className="mt-12 text-center">
          <Button href="/faq" variant="outline">
            View All FAQs →
          </Button>
        </div>
      </Container>
    </section>
  );
}
