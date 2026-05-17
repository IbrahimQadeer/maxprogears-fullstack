import { whyChooseItems } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Tag } from "@/components/ui/Tag";

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-black">
      <Container>
        <header className="mb-16">
          <Tag className="mb-5">Why Choose Us</Tag>
          <h2 className="font-display text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-tight text-off-white">
            The MAXPROGEARS{" "}
            <em className="text-gold italic">Difference</em>
          </h2>
          <Divider />
        </header>
        <div className="grid grid-cols-1 gap-px bg-gold/12 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseItems.map((item) => (
            <article
              key={item.id}
              className="bg-black p-9 transition-colors duration-300 hover:bg-[#0f0f0f] md:p-12"
            >
              <span
                className="mb-6 flex h-[52px] w-[52px] items-center justify-center bg-gold/20 text-[22px]"
                aria-hidden
              >
                {item.icon}
              </span>
              <h3 className="mb-3 font-condensed text-base font-bold tracking-[0.1em] text-off-white uppercase">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-grey">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
