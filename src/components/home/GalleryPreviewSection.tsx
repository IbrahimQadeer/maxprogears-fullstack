import Link from "next/link";
import { IMAGE_ALT, IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShowcaseImage } from "@/components/ui/ShowcaseImage";

export function GalleryPreviewSection() {
  return (
    <section className="section-padding bg-black">
      <Container wide>
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[0.9fr_1fr]">
          <SectionHeader
            tag="Gallery"
            title="Crafted With Precision"
            description="A focused look at custom gear details, product combinations, and branded academy kit presentation."
            className="mb-0"
          />
          <div className="flex justify-start lg:justify-end">
            <Button href="/gallery" variant="outline">
              View Full Gallery -&gt;
            </Button>
          </div>
        </div>

        <Link href="/gallery" className="group mt-14 block">
          <ShowcaseImage
            src={IMAGES.gallery}
            alt={IMAGE_ALT.gallery}
            aspectClass="aspect-[4/3] md:aspect-[2/1]"
            objectFit="contain"
            overlay="gold"
            glow
            sizes="(max-width: 1400px) 100vw, 1400px"
            className="rounded-sm bg-[linear-gradient(135deg,#060606,#171207)] transition-transform duration-500 group-hover:scale-[1.006]"
          />
          <span className="mt-5 block font-condensed text-[11px] font-semibold tracking-[0.15em] text-grey uppercase transition-colors group-hover:text-gold">
            Open gallery showcase -&gt;
          </span>
        </Link>
      </Container>
    </section>
  );
}
