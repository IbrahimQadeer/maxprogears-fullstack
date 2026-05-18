"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandImage } from "@/components/ui/BrandImage";

const navItems = [
  { label: "Dashboard", href: "/admin" },
  { label: "Quotes", href: "/admin/quotes" },
  { label: "Products", href: "/admin/products" },
  { label: "Services", href: "#" },
  { label: "Settings", href: "#" },
];

type AdminSidebarProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

export function AdminSidebar({ mobile = false, onNavigate }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <nav className={mobile ? "grid gap-2" : "flex h-full flex-col"}>
      <div className={mobile ? "hidden" : "px-6 pb-7 pt-6"}>
        <BrandImage variant="wings" className="h-10 w-auto object-contain" />
        <p className="mt-3 text-sm font-semibold tracking-tight text-zinc-400">
          Admin
        </p>
      </div>

      <div className={mobile ? "grid gap-2" : "grid gap-2 px-3"}>
        {navItems.map((item) => {
          const isActive =
            item.href !== "#" &&
            (pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href)));

          if (item.href === "#") {
            return (
              <span
                key={item.label}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-500"
              >
                {item.label}
              </span>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className={`rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "border border-zinc-700 bg-zinc-900 text-white"
                  : "text-zinc-400 hover:bg-zinc-900/70 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {!mobile && (
        <div className="mt-auto border-t border-zinc-800 px-6 py-5">
          <p className="text-xs leading-5 text-zinc-500">
            Protected workspace for quote request management.
          </p>
        </div>
      )}
    </nav>
  );
}
