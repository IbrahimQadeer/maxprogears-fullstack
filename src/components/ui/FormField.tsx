import { cn } from "@/lib/cn";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function FormField({
  label,
  htmlFor,
  required,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="font-condensed text-[11px] font-bold tracking-[0.2em] text-gold uppercase"
      >
        {label}
        {required && <span className="text-off-white/60"> *</span>}
      </label>
      {children}
    </div>
  );
}

export const inputClassName =
  "w-full border border-white/10 bg-white/[0.04] px-4 py-3.5 font-body text-[15px] text-off-white outline-none transition-colors placeholder:text-grey focus:border-gold";

export const selectClassName =
  "w-full border border-white/10 bg-[#1a1a1a] px-4 py-3.5 font-body text-[15px] text-off-white outline-none transition-colors focus:border-gold";

export const textareaClassName =
  "min-h-[120px] w-full resize-y border border-white/10 bg-white/[0.04] px-4 py-3.5 font-body text-[15px] text-off-white outline-none transition-colors placeholder:text-grey focus:border-gold";
