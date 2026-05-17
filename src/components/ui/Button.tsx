import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "outline" | "whatsapp";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "relative overflow-hidden bg-gold text-black font-condensed text-[13px] font-bold tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300 hover:bg-gold-light hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(201,168,76,0.3)] before:absolute before:inset-0 before:bg-white/15 before:-translate-x-full before:transition-transform before:duration-300 hover:before:translate-x-0",
  outline:
    "bg-transparent text-off-white font-condensed text-[13px] font-bold tracking-[0.15em] uppercase px-8 py-3.5 border border-off-white/40 transition-all duration-300 hover:border-gold hover:text-gold",
  whatsapp:
    "bg-[#25D366] text-white font-condensed text-[13px] font-bold tracking-[0.12em] uppercase px-8 py-4 transition-all duration-300 hover:bg-[#1ebe5a] hover:-translate-y-px inline-flex items-center gap-2.5",
};

export function Button({
  variant = "primary",
  children,
  className,
  showArrow,
  ...props
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2.5",
    variantStyles[variant],
    className,
  );

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        {showArrow && <span aria-hidden>↗</span>}
      </span>
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} className={styles} {...linkProps}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={styles} {...linkProps}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={styles} {...(props as ButtonAsButton)}>
      {content}
    </button>
  );
}
