"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  FormField,
  inputClassName,
  textareaClassName,
} from "@/components/ui/FormField";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-gold/20 bg-gold/5 p-8">
        <p className="text-off-white">
          Thanks, your message has been prepared. Backend connection will be
          added later.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
      <FormField label="Message" htmlFor="contact-message" required>
        <textarea
          id="contact-message"
          name="message"
          required
          className={textareaClassName}
          placeholder="Tell us about your gear requirements..."
        />
      </FormField>
      <Button type="submit" showArrow className="self-start">
        Send Message
      </Button>
    </form>
  );
}
