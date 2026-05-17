import { galleryPreviewItems } from "@/data/home";
import { GalleryGrid } from "@/components/shared/GalleryGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function GalleryPreviewSection() {
  return (
    <section className="section-padding bg-black">
      <Container wide>
        <SectionHeader
          tag="Gallery"
          title="Crafted With Precision"
          centered
        />
        <GalleryGrid items={galleryPreviewItems} />
        <div className="mt-12 text-center">
          <Button href="/gallery" variant="outline">
            View Full Gallery →
          </Button>
        </div>
      </Container>
    </section>
  );
}
