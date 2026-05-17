import type { ProcessStep } from "@/types";
import { Tag } from "@/components/ui/Tag";

type ProcessTimelineProps = {
  steps: ProcessStep[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className="max-w-3xl">
      {steps.map((step, index) => (
        <li
          key={step.id}
          className={`grid grid-cols-[80px_1fr] items-start gap-8 border-gold/12 py-12 md:gap-10 ${
            index < steps.length - 1 ? "border-b" : ""
          }`}
        >
          <div className="text-center">
            <span className="font-condensed text-5xl leading-none font-extrabold text-gold/20">
              {step.number}
            </span>
            {index < steps.length - 1 && (
              <span
                className="mx-auto mt-3 block h-10 w-0.5 bg-gold/20"
                aria-hidden
              />
            )}
          </div>
          <div>
            <Tag className="mb-3">Step {step.number}</Tag>
            <h3 className="mb-4 font-display text-2xl text-off-white">{step.title}</h3>
            <p className="text-[15px] leading-relaxed text-grey">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
