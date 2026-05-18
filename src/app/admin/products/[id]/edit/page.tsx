import { notFound, redirect } from "next/navigation";
import { ProductForm } from "@/components/admin/ProductForm";
import { requireAdminUser } from "@/lib/supabase/auth";
import { supabase } from "@/lib/supabase";
import type { ProductRecord } from "@/types";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function AdminProductEditPage({ params }: PageProps) {
  await requireAdminUser();

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id)
    .maybeSingle();

  if (error) {
    console.error("Product fetch error:", error);
    notFound();
  }

  if (!product) {
    notFound();
  }

  return (
    <main className="text-white">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl shadow-black/20">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Edit product
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Update Product Details
          </h1>
          <p className="mt-3 text-base leading-7 text-zinc-400">
            Adjust product fields, status, and publish settings for your storefront.
          </p>
        </header>

        <ProductForm product={product as ProductRecord} mode="edit" />
      </div>
    </main>
  );
}
