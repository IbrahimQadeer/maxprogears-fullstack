"use client";

import { useState } from "react";
import { allProducts } from "@/data/products";
import { Button } from "@/components/ui/Button";
import {
  FormField,
  inputClassName,
  selectClassName,
  textareaClassName,
} from "@/components/ui/FormField";

const quantityOptions = [
  "Under 25 pieces",
  "25 – 50 pieces",
  "50 – 100 pieces",
  "100 – 250 pieces",
  "250 – 500 pieces",
  "500+ pieces",
];

const budgetOptions = [
  "Prefer not to say",
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
];

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-gold/20 bg-gold/5 p-8">
        <p className="text-off-white">
          Quote request captured locally. Database connection will be added in
          the next step.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormField label="Full Name" htmlFor="quote-name" required>
          <input
            id="quote-name"
            name="fullName"
            type="text"
            required
            className={inputClassName}
            placeholder="Your full name"
          />
        </FormField>
        <FormField label="Email" htmlFor="quote-email" required>
          <input
            id="quote-email"
            name="email"
            type="email"
            required
            className={inputClassName}
            placeholder="your@email.com"
          />
        </FormField>
        <FormField label="WhatsApp Number" htmlFor="quote-whatsapp" required>
          <input
            id="quote-whatsapp"
            name="whatsapp"
            type="tel"
            required
            className={inputClassName}
            placeholder="+1 555 000 0000"
          />
        </FormField>
        <FormField label="Country" htmlFor="quote-country">
          <input
            id="quote-country"
            name="country"
            type="text"
            className={inputClassName}
            placeholder="Your country"
          />
        </FormField>
        <FormField
          label="Academy / Team / Brand Name"
          htmlFor="quote-academy"
          className="md:col-span-2"
        >
          <input
            id="quote-academy"
            name="academy"
            type="text"
            className={inputClassName}
            placeholder="Your academy or team name"
          />
        </FormField>
        <FormField label="Product Type" htmlFor="quote-product" required>
          <select
            id="quote-product"
            name="productType"
            required
            className={selectClassName}
            defaultValue=""
          >
            <option value="" disabled>
              Select product type
            </option>
            {allProducts.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
            <option value="multiple">Multiple Products</option>
            <option value="other">Other</option>
          </select>
        </FormField>
        <FormField label="Quantity" htmlFor="quote-quantity" required>
          <select
            id="quote-quantity"
            name="quantity"
            required
            className={selectClassName}
            defaultValue=""
          >
            <option value="" disabled>
              Select quantity range
            </option>
            {quantityOptions.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
        </FormField>
        <FormField label="Deadline" htmlFor="quote-deadline">
          <input
            id="quote-deadline"
            name="deadline"
            type="text"
            className={inputClassName}
            placeholder="e.g. Before March 2026"
          />
        </FormField>
        <FormField label="Budget Range (optional)" htmlFor="quote-budget">
          <select
            id="quote-budget"
            name="budget"
            className={selectClassName}
            defaultValue=""
          >
            <option value="">Select budget range</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </FormField>
        <FormField
          label="Customization Details"
          htmlFor="quote-details"
          className="md:col-span-2"
        >
          <textarea
            id="quote-details"
            name="details"
            className={textareaClassName}
            placeholder="Colors, sizes, logo placement, print method, and any other requirements..."
          />
        </FormField>
        <FormField label="Message" htmlFor="quote-message" className="md:col-span-2">
          <textarea
            id="quote-message"
            name="message"
            className={textareaClassName}
            placeholder="Anything else we should know..."
          />
        </FormField>
        <div className="md:col-span-2">
          <FormField label="Design Files" htmlFor="quote-files">
            <div className="cursor-not-allowed border-2 border-dashed border-gold/30 px-6 py-9 text-center opacity-80">
              <p className="mb-2 text-3xl" aria-hidden>
                📎
              </p>
              <p className="text-sm text-grey">
                Drag & drop or click to upload —{" "}
                <span className="text-gold">coming soon</span>
              </p>
              <input
                id="quote-files"
                name="files"
                type="file"
                disabled
                className="sr-only"
                multiple
                accept="image/*,.pdf,.ai,.eps,.svg"
              />
            </div>
          </FormField>
          <p className="mt-3 text-xs text-grey">
            File upload and database saving will be connected in the Supabase
            step.
          </p>
        </div>
      </div>
      <Button type="submit" showArrow className="mt-8">
        Submit Quote Request
      </Button>
    </form>
  );
}
