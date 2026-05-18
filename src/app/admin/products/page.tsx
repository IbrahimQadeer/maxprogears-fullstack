import Link from "next/link";
import { redirect } from "next/navigation";
import { AdminProductsTableClient } from "@/components/admin/AdminProductsTableClient";
import { requireAdminUser } from "@/lib/supabase/auth";
import { supabase } from "@/lib/supabase";
import type { ProductRecord } from "@/types";

export default async function AdminProductsPage() {
  await requireAdminUser();

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  const productList = (products ?? []) as ProductRecord[];

  if (error) {
    return (
      <main className="text-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-red-400/25 bg-red-950/30 p-6 shadow-2xl shadow-black/40">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-200">
              Supabase Error
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Products Management
            </h1>
            <p className="mt-4 text-sm leading-6 text-red-100">
              Product catalog could not be loaded.
            </p>
            <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-red-400/15 bg-black/40 p-4 text-sm text-red-100">
              {error.message}
            </pre>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="text-white">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-6 border-b border-zinc-800 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
              Product Catalog
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Manage Products
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">
              Add, edit, or remove products for the MAXPROGEARS storefront.
            </p>
          </div>

          <Link
            href="/admin/products/new"
            className="inline-flex w-fit rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900 hover:text-white"
          >
            Add Product
          </Link>
        </header>

        <AdminProductsTableClient products={productList} />
      </div>
    </main>
  );
}
