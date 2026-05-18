"use client";

import { useState } from "react";
import { LogoutButton } from "@/app/admin/LogoutButton";
import { BrandImage } from "@/components/ui/BrandImage";
import { AdminSidebar } from "./AdminSidebar";

export function AdminHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-800 bg-black/90 backdrop-blur">
      <div className="flex min-h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <BrandImage variant="wings" className="h-8 w-auto object-contain" />
          <div>
            <p className="text-sm font-semibold text-white">Admin Dashboard</p>
            <p className="text-xs text-zinc-500">Logged in</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900 hover:text-white lg:hidden"
          >
            Menu
          </button>

          <LogoutButton />
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/70 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute inset-y-0 left-0 w-[min(82vw,320px)] border-r border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/60 transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
            <div>
              <BrandImage variant="wings" className="h-9 w-auto object-contain" />
              <p className="mt-2 text-sm font-semibold text-zinc-400">Admin</p>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl border border-zinc-700 bg-black px-3 py-2 text-sm text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900 hover:text-white"
            >
              Close
            </button>
          </div>
          <div className="p-4">
            <AdminSidebar mobile onNavigate={() => setMobileOpen(false)} />
          </div>
        </aside>
      </div>
    </header>
  );
}
