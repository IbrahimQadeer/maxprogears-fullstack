"use client";

import { useState } from "react";
import type { FAQItem } from "@/types";
import { cn } from "@/lib/cn";

type FAQSectionProps = {
  items: FAQItem[];
  className?: string;
};

export function FAQSection({ items, className }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className={cn("mx-auto max-w-[800px]", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="border-b border-gold/12 overflow-hidden"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-5 py-7 text-left"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
            >
              <span className="font-condensed text-base font-semibold tracking-wide text-off-white uppercase">
                {item.question}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center border border-gold/20 text-lg text-gold transition-transform duration-300",
                  isOpen && "rotate-45",
                )}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-400 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 text-[15px] leading-relaxed text-grey">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
