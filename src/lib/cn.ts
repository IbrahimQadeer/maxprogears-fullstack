/** Merge class names — useful for conditional Tailwind classes */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
