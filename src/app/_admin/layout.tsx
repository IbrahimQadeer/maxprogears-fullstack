"use client";

import { usePathname } from "next/navigation";
import { Toaster } from "sonner";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-zinc-800 bg-zinc-950 lg:block">
        <AdminSidebar />
      </aside>

      <div className="min-h-screen lg:pl-72">
        <AdminHeader />
        <div className="px-4 py-6 sm:px-6 lg:px-8">{children}</div>
      </div>
      <Toaster
        position="top-right"
        theme="dark"
        toastOptions={{
          classNames: {
            toast: "border border-zinc-800 bg-zinc-950 text-zinc-100",
            description: "text-zinc-400",
          },
        }}
      />
    </div>
  );
}
