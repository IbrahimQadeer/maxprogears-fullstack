import { cn } from "@/lib/cn";

type DividerProps = {
  centered?: boolean;
  className?: string;
};

export function Divider({ centered, className }: DividerProps) {
  return (
    <div
      className={cn(
        "h-0.5 w-[60px] bg-gold",
        centered ? "mx-auto my-5" : "my-5",
        className,
      )}
    />
  );
}
