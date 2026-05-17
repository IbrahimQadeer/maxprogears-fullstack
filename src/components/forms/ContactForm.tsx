"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";

const WEB3FORMS_ACCESS_KEY = "1b002461-7f32-4932-bdda-466a037e463f";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const inputClassName =
  "w-full border border-gold/12 bg-black/35 px-4 py-4 font-body text-[15px] text-off-white outline-none transition-all placeholder:text-grey focus:border-gold focus:bg-black/55 focus:shadow-[0_0_0_3px_rgba(201,168,76,0.08)]";

const textareaClassName =
  "min-h-[150px] w-full resize-y border border-gold/12 bg-black/35 px-4 py-4 font-body text-[15px] text-off-white outline-none transition-all placeholder:text-grey focus:border-gold focus:bg-black/55 focus:shadow-[0_0_0_3px_rgba(201,168,76,0.08)]";

type SubmitStatus = "idle" | "success" | "error";

type Web3FormsResponse = {
  success: boolean;
  message?: string;
};

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New MAXPROGEARS Contact Inquiry",
      from_name: String(formData.get("name") ?? "MAXPROGEARS Contact Form"),
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
          Quick Enquiry
        </p>
        <p className="mt-2 max-w-[620px] text-sm leading-7 text-grey">
          Share what you need made, where you are located, and the best way to
          reach you.
        </p>
      </div>

      {submitStatus === "success" && (
        <div
          className="mb-6 border border-gold/25 bg-gold/5 p-5 text-sm leading-7 text-grey-light"
          role="status"
        >
          Thank you. Your message has been sent successfully. We&apos;ll get
          back to you soon.
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

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormField label="Name" htmlFor="contact-name" required>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className={inputClassName}
            placeholder="Your name"
          />
        </FormField>
        <FormField label="Email" htmlFor="contact-email" required>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className={inputClassName}
            placeholder="your@email.com"
          />
        </FormField>
        <FormField label="WhatsApp" htmlFor="contact-whatsapp">
          <input
            id="contact-whatsapp"
            name="whatsapp"
            type="tel"
            className={inputClassName}
            placeholder="+1 555 000 0000"
          />
        </FormField>
        <FormField label="Country" htmlFor="contact-country">
          <input
            id="contact-country"
            name="country"
            type="text"
            className={inputClassName}
            placeholder="Your country"
          />
        </FormField>
        <FormField label="Message" htmlFor="contact-message" required className="md:col-span-2">
          <textarea
            id="contact-message"
            name="message"
            required
            className={textareaClassName}
            placeholder="Tell us about your gear requirements..."
          />
        </FormField>
      </div>

      <div className="mt-8 border-t border-gold/12 pt-8">
        <Button
          type="submit"
          showArrow={!isSubmitting}
          disabled={isSubmitting}
          className="w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
