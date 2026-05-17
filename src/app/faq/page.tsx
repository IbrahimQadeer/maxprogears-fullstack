import type { Metadata } from "next";
import { allFaqs } from "@/data/faqs";
import { CTASection } from "@/components/shared/CTASection";
import { FAQSection } from "@/components/shared/FAQSection";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about custom BJJ and MMA gear orders, MOQ, mockups, shipping, and private label branding.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        tag="Frequently Asked Questions"
        title={
          <>
            Your Questions <em className="text-gold italic">Answered</em>
          </>
        }
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <section className="section-padding bg-charcoal">
        <Container>
          <FAQSection items={allFaqs} />
        </Container>
      </section>

      <CTASection
        tag="Need Help?"
        title="Still Have Questions?"
        description="Get in touch — our team responds via WhatsApp or email."
      />
    </>
  );
}
