"use client";

import { useState } from "react";
import { toast } from "sonner";

type CopyButtonProps = {
  label: string;
  value?: string | null;
};

export function CopyButton({ label, value }: CopyButtonProps) {
  const [isCopying, setIsCopying] = useState(false);
  const copyValue = value?.trim();
  const canCopy = Boolean(copyValue);

  async function handleCopy() {
    if (!copyValue || isCopying) {
      return;
    }

    try {
      setIsCopying(true);
      await navigator.clipboard.writeText(copyValue);
      toast.success(`${label} copied`);
    } catch (error) {
      console.error("Copy failed:", error);
      toast.error(`Could not copy ${label.toLowerCase()}`);
    } finally {
      setIsCopying(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={!canCopy || isCopying}
      className="rounded-lg border border-zinc-700 bg-black px-2.5 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-900 hover:text-white focus:ring-2 focus:ring-zinc-500/40 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isCopying ? "Copying..." : `Copy ${label}`}
    </button>
  );
}
