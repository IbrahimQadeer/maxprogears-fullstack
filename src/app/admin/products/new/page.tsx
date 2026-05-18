import { redirect } from "next/navigation";
import { ProductForm } from "@/components/admin/ProductForm";
import { requireAdminUser } from "@/lib/supabase/auth";

export default async function AdminProductNewPage() {
  await requireAdminUser();

  return (
    <main className="text-white">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl shadow-black/20">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Create product
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            New Product Entry
          </h1>
          <p className="mt-3 text-base leading-7 text-zinc-400">
            Add a premium product with catalog information, images, MOQ and lead time.
          </p>
        </header>

        <ProductForm mode="create" />
      </div>
    </main>
  );
}
