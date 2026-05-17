import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a custom quote for BJJ and MMA gear. Share your product type, quantity, and design requirements.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        tag="Get a Custom Quote"
        title={
          <>
            Request Your <em className="text-gold italic">Custom Quote</em>
          </>
        }
        description="Fill in your details and we will respond with a detailed quote, timeline, and mockup options. No obligation."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Quote Request" },
        ]}
      />

      <section className="section-padding bg-charcoal">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_320px]">
            <div>
              <Tag className="mb-8">Quote Request Form</Tag>
              <QuoteForm />
            </div>
            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="border border-gold/20 bg-gold/5 p-6">
                <p className="mb-2 font-condensed text-xs font-bold tracking-[0.2em] text-gold uppercase">
                  What to Include
                </p>
                <ul className="space-y-2 text-sm text-grey">
                  <li>Product type and quantity</li>
                  <li>Size breakdown if known</li>
                  <li>Logo files (vector preferred)</li>
                  <li>Target delivery date</li>
                </ul>
              </div>
              <div className="border border-gold/12 bg-black/40 p-6">
                <p className="text-sm leading-relaxed text-grey">
                  Prefer to chat first? Use WhatsApp for a quick conversation
                  before submitting a full quote request.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
