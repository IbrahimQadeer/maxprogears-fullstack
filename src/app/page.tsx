import { CTASection } from "@/components/shared/CTASection";
import { FAQPreviewSection } from "@/components/home/FAQPreviewSection";
import { GalleryPreviewSection } from "@/components/home/GalleryPreviewSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessPreviewSection } from "@/components/home/ProcessPreviewSection";
import { ProductCategoriesSection } from "@/components/home/ProductCategoriesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductCategoriesSection />
      <WhyChooseUsSection />
      <ProcessPreviewSection />
      <GalleryPreviewSection />
      <FAQPreviewSection />
      <CTASection
        title="Start Your Custom Gear Order Today"
        description="Tell us what your academy needs. Our team will respond with a detailed quote, timeline, and mockup options."
      />
    </>
  );
}
