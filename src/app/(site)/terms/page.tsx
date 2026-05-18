import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <>
      <PageHero tag="Legal" title="Terms of Use" />
      <section className="section-padding bg-charcoal">
        <Container>
          <p className="max-w-2xl text-grey leading-relaxed">
            Terms of use content will be published here. For order enquiries,
            please use our quote form or contact page.
          </p>
        </Container>
      </section>
    </>
  );
}
