import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  wide?: boolean;
  className?: string;
};

export function Container({ children, wide, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6",
        wide ? "max-w-[1400px]" : "max-w-[1200px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
