import type { ProcessStep } from "@/types";
import { Tag } from "@/components/ui/Tag";

type ProcessTimelineProps = {
  steps: ProcessStep[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className="grid max-w-3xl gap-4">
      {steps.map((step, index) => (
        <li
          key={step.id}
          className="group relative overflow-hidden border border-gold/12 bg-black/35 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-black/60 md:p-7"
        >
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-gold/70 via-gold/20 to-transparent opacity-70" />
          <div className="grid grid-cols-[58px_1fr] gap-5 md:grid-cols-[72px_1fr] md:gap-7">
            <div>
              <span className="font-condensed text-4xl leading-none font-extrabold text-gold/35 transition-colors group-hover:text-gold md:text-5xl">
                {step.number}
              </span>
              {index < steps.length - 1 && (
                <span
                  className="mt-4 ml-5 hidden h-10 w-px bg-gold/20 md:block"
                  aria-hidden
                />
              )}
            </div>
            <div>
              <Tag className="mb-3">Step {step.number}</Tag>
              <h3 className="mb-3 font-display text-2xl leading-tight text-off-white">
                {step.title}
              </h3>
              <p className="text-sm leading-7 text-grey md:text-[15px]">
                {step.description}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
