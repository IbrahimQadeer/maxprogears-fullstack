import { whyChooseItems } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Tag } from "@/components/ui/Tag";

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-black">
      <Container>
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <header>
            <Tag className="mb-5">Why Choose Us</Tag>
            <h2 className="font-display text-[clamp(2.25rem,4vw,3.75rem)] leading-tight font-semibold text-off-white">
              The MAXPROGEARS{" "}
              <em className="text-gold italic">Difference</em>
            </h2>
            <Divider />
          </header>
          <p className="max-w-[620px] text-base leading-8 text-grey lg:justify-self-end">
            Custom gear depends on communication, production detail, and clean
            execution. These are the practical parts of the process we keep
            visible from enquiry to dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseItems.map((item, index) => (
            <article
              key={item.id}
              className="group relative overflow-hidden border border-gold/12 bg-charcoal/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-[#151515] md:p-9"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-gold/70 via-gold/20 to-transparent opacity-60" />
              <span
                className="mb-7 flex h-11 w-11 items-center justify-center border border-gold/25 font-condensed text-sm font-extrabold tracking-[0.12em] text-gold transition-colors group-hover:bg-gold group-hover:text-black"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 font-condensed text-base font-bold tracking-[0.1em] text-off-white uppercase">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-grey">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
