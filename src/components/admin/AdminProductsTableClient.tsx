"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { AdminEmptyState } from "@/components/admin/AdminEmptyState";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import type { ProductRecord } from "@/types";

type AdminProductsTableClientProps = {
  products: ProductRecord[];
};

type DeleteState = {
  id: string;
  name: string;
} | null;

function normalizeSearchValue(value: unknown) {
  return String(value ?? "").toLowerCase();
}

function getSearchText(product: ProductRecord) {
  return [
    product.name,
    product.slug,
    product.category,
    product.short_description,
    product.full_description,
  ]
    .map(normalizeSearchValue)
    .join(" ");
}

function Badge({ label, variant }: { label: string; variant: "success" | "muted" | "gold" }) {
  const base = "inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]";
  const style =
    variant === "success"
      ? "bg-emerald-500/10 text-emerald-200 border border-emerald-500/20"
      : variant === "gold"
      ? "bg-gold/10 text-gold border border-gold/20"
      : "bg-zinc-800 text-zinc-300 border border-zinc-700";

  return <span className={`${base} ${style}`}>{label}</span>;
}

function formatGalleryCount(galleryImages: string[] | null) {
  return galleryImages?.length ? `${galleryImages.length} image${galleryImages.length > 1 ? "s" : ""}` : "No gallery";
}

export function AdminProductsTableClient({ products: initialProducts }: AdminProductsTableClientProps) {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [featuredFilter, setFeaturedFilter] = useState("all");
  const [activeFilter, setActiveFilter] = useState("all");
  const [deleteTarget, setDeleteTarget] = useState<DeleteState>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const categories = useMemo(
    () => [
      "all",
      ...Array.from(new Set(products.map((product) => product.category || "Uncategorized"))).sort(),
    ],
    [products],
  );

  const filteredProducts = useMemo(() => {
    const lowerSearch = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        lowerSearch === "" || getSearchText(product).includes(lowerSearch);
      const matchesCategory =
        categoryFilter === "all" || product.category === categoryFilter;
      const matchesFeatured =
        featuredFilter === "all" ||
        (featuredFilter === "featured" ? product.featured === true : product.featured === false);
      const matchesActive =
        activeFilter === "all" ||
        (activeFilter === "active" ? product.active === true : product.active === false);

      return matchesSearch && matchesCategory && matchesFeatured && matchesActive;
    });
  }, [activeFilter, categoryFilter, featuredFilter, products, searchQuery]);

  const stats = useMemo(
    () => ({
      total: products.length,
      featured: products.filter((product) => product.featured === true).length,
      active: products.filter((product) => product.active === true).length,
      inactive: products.filter((product) => product.active !== true).length,
    }),
    [products],
  );

  async function deleteProduct() {
    if (!deleteTarget) return;

    setIsDeleting(true);
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", deleteTarget.id);

    if (error) {
      toast.error("Unable to delete product right now.");
      console.error("Product delete error:", error);
      setIsDeleting(false);
      return;
    }

    setProducts((current) => current.filter((product) => product.id !== deleteTarget.id));
    toast.success(`${deleteTarget.name} deleted successfully.`);
    setDeleteTarget(null);
    setIsDeleting(false);
  }

  function clearFilters() {
    setSearchQuery("");
    setCategoryFilter("all");
    setFeaturedFilter("all");
    setActiveFilter("all");
  }

  return (
    <section className="mt-8">
      <div className="grid gap-4 rounded-3xl border border-zinc-800 bg-zinc-950 p-4 shadow-2xl shadow-black/20 md:grid-cols-[1.8fr_1fr] md:items-center">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            Product overview
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300">
              Total products <strong className="text-white">{stats.total}</strong>
            </span>
            <span className="rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300">
              Featured <strong className="text-white">{stats.featured}</strong>
            </span>
            <span className="rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300">
              Active <strong className="text-white">{stats.active}</strong>
            </span>
            <span className="rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300">
              Inactive <strong className="text-white">{stats.inactive}</strong>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <Button
            variant="outline"
            href="/admin/products/new"
            className="w-full sm:w-auto"
          >
            Add Product
          </Button>
          <button
            type="button"
            onClick={clearFilters}
            disabled={
              searchQuery.trim() === "" &&
              categoryFilter === "all" &&
              featuredFilter === "all" &&
              activeFilter === "all"
            }
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            Clear filters
          </button>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-950 p-5 shadow-2xl shadow-black/20">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_1fr] xl:grid-cols-[1.1fr_0.85fr_0.8fr]">
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              Search
            </span>
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search name, category, slug..."
              className="mt-2 w-full rounded-2xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none transition hover:border-zinc-700 focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
          </label>

          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              Category
            </span>
            <select
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none transition hover:border-zinc-700 focus:border-gold focus:ring-2 focus:ring-gold/20"
            >
              <option value="all">All categories</option>
              {categories
                .filter((item) => item !== "all")
                .map((category) => (
                  <option key={category} value={category} className="bg-zinc-950 text-white">
                    {category}
                  </option>
                ))}
            </select>
          </label>

          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              Featured
            </span>
            <select
              value={featuredFilter}
              onChange={(event) => setFeaturedFilter(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none transition hover:border-zinc-700 focus:border-gold focus:ring-2 focus:ring-gold/20"
            >
              <option value="all">All</option>
              <option value="featured">Featured</option>
              <option value="not_featured">Not featured</option>
            </select>
          </label>

          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              Status
            </span>
            <select
              value={activeFilter}
              onChange={(event) => setActiveFilter(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none transition hover:border-zinc-700 focus:border-gold focus:ring-2 focus:ring-gold/20"
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </label>
        </div>
      </div>

      {products.length === 0 ? (
        <AdminEmptyState
          title="No products available yet."
          description="Create a new product to begin managing the catalog from the admin dashboard."
        />
      ) : filteredProducts.length === 0 ? (
        <AdminEmptyState
          title="No products match your filters."
          description="Adjust your search, category, or status filters to find matching products."
        />
      ) : (
        <>
          <div className="mt-6 hidden overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/20 lg:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1120px] border-collapse text-left">
                <thead className="bg-zinc-900/80 text-xs uppercase tracking-[0.14em] text-zinc-500">
                  <tr>
                    <th className="px-5 py-4 font-medium">Product</th>
                    <th className="px-5 py-4 font-medium">Category</th>
                    <th className="px-5 py-4 font-medium">MOQ</th>
                    <th className="px-5 py-4 font-medium">Lead Time</th>
                    <th className="px-5 py-4 font-medium">Badges</th>
                    <th className="px-5 py-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="transition-colors duration-200 hover:bg-zinc-900/55">
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-4">
                          <div className="h-14 w-20 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
                            {product.image_url ? (
                              <img
                                src={product.image_url}
                                alt={product.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center bg-zinc-900 text-sm text-zinc-500">
                                No image
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-white">{product.name}</p>
                            <p className="mt-1 text-sm text-zinc-400">{product.slug}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 text-sm text-zinc-300">{product.category}</td>
                      <td className="px-5 py-5 text-sm text-zinc-300">{product.moq ?? "—"}</td>
                      <td className="px-5 py-5 text-sm text-zinc-300">{product.lead_time ?? "—"}</td>
                      <td className="px-5 py-5 space-x-2">
                        {product.featured ? <Badge label="Featured" variant="gold" /> : null}
                        {product.active ? <Badge label="Active" variant="success" /> : <Badge label="Inactive" variant="muted" />}
                      </td>
                      <td className="px-5 py-5" data-no-row-nav>
                        <div className="flex flex-wrap gap-2">
                          <Link
                            href={`/admin/products/${product.id}/edit`}
                            className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:border-zinc-500 hover:bg-zinc-800"
                          >
                            Edit
                          </Link>
                          <button
                            type="button"
                            onClick={() => setDeleteTarget({ id: product.id, name: product.name })}
                            className="rounded-xl border border-red-700 bg-red-800/10 px-4 py-2 text-sm font-medium text-red-200 transition hover:bg-red-800/20"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid gap-4 p-5 lg:hidden" />
          </div>

          <div className="mt-6 grid gap-4 lg:hidden">
            {filteredProducts.map((product) => (
              <article key={product.id} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-5 shadow-2xl shadow-black/20">
                <div className="grid gap-5 sm:grid-cols-[140px_minmax(0,1fr)]">
                  <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
                    {product.image_url ? (
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full min-h-[140px] items-center justify-center bg-zinc-900 text-sm text-zinc-500">
                        No image
                      </div>
                    )}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-lg font-semibold text-white">{product.name}</p>
                      <p className="mt-1 text-sm text-zinc-400">{product.category}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.featured && <Badge label="Featured" variant="gold" />}
                      <Badge label={product.active ? "Active" : "Inactive"} variant={product.active ? "success" : "muted"} />
                      <Badge label={formatGalleryCount(product.gallery_images)} variant="muted" />
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="rounded-2xl border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-zinc-300">
                        <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">MOQ</p>
                        <p className="mt-1 text-sm text-white">{product.moq ?? "—"}</p>
                      </div>
                      <div className="rounded-2xl border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-zinc-300">
                        <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Lead time</p>
                        <p className="mt-1 text-sm text-white">{product.lead_time ?? "—"}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={`/admin/products/${product.id}/edit`}
                        className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:border-zinc-500 hover:bg-zinc-800"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => setDeleteTarget({ id: product.id, name: product.name })}
                        className="rounded-xl border border-red-700 bg-red-800/10 px-4 py-3 text-sm font-medium text-red-200 transition hover:bg-red-800/20"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      )}

      {deleteTarget ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6">
          <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl shadow-black/60">
            <h2 className="text-xl font-semibold text-white">Delete product</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Are you sure you want to delete <span className="font-semibold text-white">{deleteTarget.name}</span>? This action cannot be undone.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setDeleteTarget(null)}
                className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={deleteProduct}
                disabled={isDeleting}
                className="rounded-xl border border-red-700 bg-red-700 px-4 py-3 text-sm font-medium text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isDeleting ? "Deleting..." : "Delete product"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
