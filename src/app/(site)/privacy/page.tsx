import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero tag="Legal" title="Privacy Policy" />
      <section className="section-padding bg-charcoal">
        <Container>
          <p className="max-w-2xl text-grey leading-relaxed">
            Privacy policy content will be published here. Contact us at
            info@maxprogears.com if you have questions about how we handle your
            data.
          </p>
        </Container>
      </section>
    </>
  );
}
