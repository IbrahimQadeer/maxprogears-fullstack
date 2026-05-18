"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/Button";
import { FormField, inputClassName, selectClassName, textareaClassName } from "@/components/ui/FormField";
import { Tag } from "@/components/ui/Tag";
import type { ProductRecord } from "@/types";

const categories = [
  "Rashguards",
  "BJJ Gis",
  "MMA Shorts",
  "Teamwear",
  "Compression Wear",
  "Hoodies",
  "Custom Apparel",
];

type ProductFormProps = {
  product?: ProductRecord;
  mode: "create" | "edit";
};

type ProductFormFields = {
  name: string;
  slug: string;
  category: string;
  short_description: string;
  full_description: string;
  moq: string;
  lead_time: string;
  image_url: string;
  gallery_images: string;
  featured: boolean;
  active: boolean;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function parseGalleryImages(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function ProductForm({ product, mode }: ProductFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<ProductFormFields>({
    name: product?.name ?? "",
    slug: product?.slug ?? "",
    category: product?.category ?? "Rashguards",
    short_description: product?.short_description ?? "",
    full_description: product?.full_description ?? "",
    moq: product?.moq ? String(product.moq) : "",
    lead_time: product?.lead_time ?? "",
    image_url: product?.image_url ?? "",
    gallery_images: product?.gallery_images?.join(", ") ?? "",
    featured: product?.featured ?? false,
    active: product?.active ?? true,
  });
  const [autoSlug, setAutoSlug] = useState(!Boolean(product?.slug));
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (autoSlug) {
      setForm((current) => ({ ...current, slug: slugify(current.name) }));
    }
  }, [form.name, autoSlug]);

  const imagePreviewUrl = useMemo(() => form.image_url.trim(), [form.image_url]);

  function updateField<Name extends keyof ProductFormFields>(field: Name, value: ProductFormFields[Name]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function validateForm() {
    if (!form.name.trim()) return "Product name is required.";
    if (!form.slug.trim()) return "Product slug is required.";
    if (!form.category.trim()) return "Product category is required.";
    if (!form.short_description.trim()) return "Short description is required.";
    if (!form.image_url.trim()) return "Product image URL is required.";
    return null;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setIsSaving(true);
    const payload = {
      name: form.name.trim(),
      slug: form.slug.trim(),
      category: form.category,
      short_description: form.short_description.trim(),
      full_description: form.full_description.trim() || null,
      moq: form.moq.trim() || null,
      lead_time: form.lead_time.trim() || null,
      image_url: form.image_url.trim(),
      gallery_images: parseGalleryImages(form.gallery_images),
      featured: form.featured,
      active: form.active,
    };

    try {
      if (mode === "create") {
        const { error } = await supabase.from("products").insert([payload]);
        if (error) {
          throw error;
        }
        toast.success("Product created successfully.");
        router.push("/admin/products");
        return;
      }

      if (!product?.id) {
        throw new Error("Product ID is missing.");
      }

      const { error } = await supabase
        .from("products")
        .update(payload)
        .eq("id", product.id);

      if (error) {
        throw error;
      }

      toast.success("Product updated successfully.");
      router.push("/admin/products");
    } catch (error) {
      console.error("Product form error:", error);
      toast.error("Unable to save product. Please try again.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8">
      <div className="grid gap-6 rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl shadow-black/20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
              {mode === "create" ? "Add Product" : "Edit Product"}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              {mode === "create" ? "Create new product" : `Edit ${product?.name ?? "product"}`}
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" href="/admin/products" className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button type="submit" className="w-full sm:w-auto">
              {isSaving ? "Saving..." : mode === "create" ? "Create Product" : "Save Changes"}
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6">
            <FormField label="Product Name" htmlFor="product-name" required>
              <input
                id="product-name"
                value={form.name}
                onChange={(event) => {
                  updateField("name", event.target.value);
                }}
                className={inputClassName}
                placeholder="MAXPRO BJJ Gi"
              />
            </FormField>

            <div className="grid gap-6 sm:grid-cols-2">
              <FormField label="Slug" htmlFor="product-slug" required>
                <input
                  id="product-slug"
                  value={form.slug}
                  onChange={(event) => {
                    updateField("slug", event.target.value);
                    setAutoSlug(false);
                  }}
                  className={inputClassName}
                  placeholder="maxpro-bjj-gi"
                />
              </FormField>

              <FormField label="Category" htmlFor="product-category" required>
                <select
                  id="product-category"
                  value={form.category}
                  onChange={(event) => updateField("category", event.target.value)}
                  className={selectClassName}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </FormField>
            </div>

            <FormField label="Short Description" htmlFor="product-short-description" required>
              <textarea
                id="product-short-description"
                value={form.short_description}
                onChange={(event) => updateField("short_description", event.target.value)}
                className={textareaClassName}
                placeholder="Premium academy-grade fight gear built for training and competition."
              />
            </FormField>

            <FormField label="Full Description" htmlFor="product-full-description">
              <textarea
                id="product-full-description"
                value={form.full_description}
                onChange={(event) => updateField("full_description", event.target.value)}
                className={textareaClassName}
                placeholder="Describe materials, custom options, sizing, and any important product details."
              />
            </FormField>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField label="MOQ" htmlFor="product-moq">
                <input
                  id="product-moq"
                  value={form.moq}
                  onChange={(event) => updateField("moq", event.target.value)}
                  className={inputClassName}
                  placeholder="e.g. 25 pcs"
                />
              </FormField>
              <FormField label="Lead Time" htmlFor="product-lead-time">
                <input
                  id="product-lead-time"
                  value={form.lead_time}
                  onChange={(event) => updateField("lead_time", event.target.value)}
                  className={inputClassName}
                  placeholder="e.g. 6-8 weeks"
                />
              </FormField>
            </div>

            <FormField label="Product Image URL" htmlFor="product-image-url" required>
              <input
                id="product-image-url"
                value={form.image_url}
                onChange={(event) => updateField("image_url", event.target.value)}
                className={inputClassName}
                placeholder="https://.../product-image.jpg"
              />
            </FormField>

            <FormField label="Gallery Image URLs" htmlFor="product-gallery-images">
              <textarea
                id="product-gallery-images"
                value={form.gallery_images}
                onChange={(event) => updateField("gallery_images", event.target.value)}
                className={textareaClassName}
                placeholder="Separate URLs with commas"
              />
            </FormField>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex items-center gap-3 rounded-3xl border border-zinc-800 bg-black/40 px-4 py-4">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(event) => updateField("featured", event.target.checked)}
                  className="h-5 w-5 accent-gold"
                />
                <span className="text-sm text-zinc-200">Featured product</span>
              </label>
              <label className="flex items-center gap-3 rounded-3xl border border-zinc-800 bg-black/40 px-4 py-4">
                <input
                  type="checkbox"
                  checked={form.active}
                  onChange={(event) => updateField("active", event.target.checked)}
                  className="h-5 w-5 accent-emerald-400"
                />
                <span className="text-sm text-zinc-200">Active on public site</span>
              </label>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-4">
              <div className="flex items-center justify-between gap-3">
                <Tag>Preview</Tag>
                <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Product hero image
                </span>
              </div>
              {imagePreviewUrl ? (
                <img
                  src={imagePreviewUrl}
                  alt="Product preview"
                  className="mt-4 h-48 w-full rounded-3xl object-cover"
                />
              ) : (
                <div className="mt-4 flex h-48 items-center justify-center rounded-3xl border border-dashed border-zinc-700 bg-zinc-900 text-sm text-zinc-500">
                  Product image preview will appear here.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
