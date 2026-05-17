import { cn } from "@/lib/cn";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

/** Small uppercase label used above section headings */
export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block border border-gold/20 px-3.5 py-1.5 font-condensed text-[11px] font-bold tracking-[0.2em] text-gold uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
