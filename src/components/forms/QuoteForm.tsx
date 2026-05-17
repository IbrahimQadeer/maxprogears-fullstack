"use client";

import { useState } from "react";
import { allProducts } from "@/data/products";
import { whatsappUrl } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";

const WEB3FORMS_ACCESS_KEY = "1b002461-7f32-4932-bdda-466a037e463f";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const quantityOptions = [
  "Under 25 pieces",
  "25 - 50 pieces",
  "50 - 100 pieces",
  "100 - 250 pieces",
  "250 - 500 pieces",
  "500+ pieces",
];

const budgetOptions = [
  "Prefer not to say",
  "Under $2,000",
  "$2,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
];

const fieldClassName =
  "w-full border border-gold/12 bg-black/35 px-4 py-4 font-body text-[15px] text-off-white outline-none transition-all placeholder:text-grey focus:border-gold focus:bg-black/55 focus:shadow-[0_0_0_3px_rgba(201,168,76,0.08)]";

const selectFieldClassName =
  "w-full border border-gold/12 bg-[#101010] px-4 py-4 font-body text-[15px] text-off-white outline-none transition-all focus:border-gold focus:bg-black/70 focus:shadow-[0_0_0_3px_rgba(201,168,76,0.08)]";

const textareaFieldClassName =
  "min-h-[132px] w-full resize-y border border-gold/12 bg-black/35 px-4 py-4 font-body text-[15px] text-off-white outline-none transition-all placeholder:text-grey focus:border-gold focus:bg-black/55 focus:shadow-[0_0_0_3px_rgba(201,168,76,0.08)]";

type SubmitStatus = "idle" | "success" | "error";

type Web3FormsResponse = {
  success: boolean;
  message?: string;
};

export function QuoteForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setValidationError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const details = String(formData.get("details") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!details && !message) {
      setValidationError(
        "Please add customization details or a message before submitting.",
      );
      return;
    }

    const payload: Record<string, string> = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New MAXPROGEARS Quote Request",
      from_name: String(formData.get("fullName") ?? "MAXPROGEARS Quote Form"),
    };

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        payload[key] = value;
      }
    });

    try {
      setIsSubmitting(true);

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as Web3FormsResponse;

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Web3Forms submission failed.");
      }

      form.reset();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-gold/12 bg-black/30 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:p-8"
    >
      <div className="mb-8 border-b border-gold/12 pb-6">
        <p className="font-condensed text-xs font-bold tracking-[0.16em] text-gold uppercase">
          Project Details
        </p>
        <p className="mt-2 max-w-[640px] text-sm leading-7 text-grey">
          Share the essentials so we can understand the product type,
          customization scope, quantity, and timeline before responding.
        </p>
      </div>

      {submitStatus === "success" && (
        <div
          className="mb-6 border border-gold/25 bg-gold/5 p-5 text-sm leading-7 text-grey-light"
          role="status"
        >
          Thank you. Your quote request has been sent successfully. We&apos;ll
          get back to you soon.
        </div>
      )}

      {submitStatus === "error" && (
        <div
          className="mb-6 border border-red-400/30 bg-red-950/20 p-5 text-sm leading-7 text-grey-light"
          role="alert"
        >
          Something went wrong. Please try again or contact us on WhatsApp.
        </div>
      )}

      {validationError && (
        <div
          className="mb-6 border border-gold/25 bg-gold/5 p-5 text-sm leading-7 text-grey-light"
          role="alert"
        >
          {validationError}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormField label="Full Name" htmlFor="quote-name" required>
          <input
            id="quote-name"
            name="fullName"
            type="text"
            required
            className={fieldClassName}
            placeholder="Your full name"
          />
        </FormField>
        <FormField label="Email" htmlFor="quote-email" required>
          <input
            id="quote-email"
            name="email"
            type="email"
            required
            className={fieldClassName}
            placeholder="your@email.com"
          />
        </FormField>
        <FormField label="WhatsApp Number" htmlFor="quote-whatsapp" required>
          <input
            id="quote-whatsapp"
            name="whatsapp"
            type="tel"
            required
            className={fieldClassName}
            placeholder="+1 555 000 0000"
          />
        </FormField>
        <FormField label="Country" htmlFor="quote-country">
          <input
            id="quote-country"
            name="country"
            type="text"
            className={fieldClassName}
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
            className={fieldClassName}
            placeholder="Your academy or team name"
          />
        </FormField>
      </div>

      <div className="my-8 border-t border-gold/12 pt-8">
        <p className="font-condensed text-xs font-bold tracking-[0.16em] text-gold uppercase">
          Product Scope
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormField label="Product Type" htmlFor="quote-product" required>
          <select
            id="quote-product"
            name="productType"
            required
            className={selectFieldClassName}
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
            className={selectFieldClassName}
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
            className={fieldClassName}
            placeholder="e.g. Before March 2026"
          />
        </FormField>
        <FormField label="Budget Range (optional)" htmlFor="quote-budget">
          <select
            id="quote-budget"
            name="budget"
            className={selectFieldClassName}
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
            className={textareaFieldClassName}
            placeholder="Colors, sizes, logo placement, print method, and any other requirements..."
          />
        </FormField>
        <FormField label="Message" htmlFor="quote-message" className="md:col-span-2">
          <textarea
            id="quote-message"
            name="message"
            className={textareaFieldClassName}
            placeholder="Anything else we should know..."
          />
        </FormField>
        <div className="md:col-span-2">
          <FormField label="Design Files" htmlFor="quote-files">
            <div className="cursor-not-allowed border border-dashed border-gold/30 bg-gold/5 px-6 py-9 text-center opacity-90">
              <p className="font-condensed text-xs font-bold tracking-[0.16em] text-gold uppercase">
                Upload Coming Soon
              </p>
              <p className="mt-2 text-sm text-grey">
                File upload and database saving will be connected in the
                Supabase step.
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
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-gold/12 pt-8 sm:flex-row sm:flex-wrap">
        <Button
          type="submit"
          showArrow={!isSubmitting}
          disabled={isSubmitting}
          className="w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Submit Quote Request"}
        </Button>
        <Button href={whatsappUrl} variant="whatsapp" className="w-full sm:w-auto">
          <WhatsAppIcon size={18} />
          Chat on WhatsApp
        </Button>
      </div>
    </form>
  );
}
