import type { Metadata } from "next";
import { fullProcessSteps } from "@/data/process";
import { CTASection } from "@/components/shared/CTASection";
import { ProcessTimeline } from "@/components/shared/ProcessTimeline";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Our step-by-step custom gear process — from enquiry and mockup approval to production, quality check, and shipping.",
};

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
        description="A clear, step-by-step process with regular updates throughout your order."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Process" }]}
      />

      <section className="section-padding bg-charcoal">
        <Container>
          <ProcessTimeline steps={fullProcessSteps} />
        </Container>
      </section>

      <CTASection
        title="Ready to Start the Process?"
        description="Send your enquiry today. We will walk you through every step."
      />
    </>
  );
}
