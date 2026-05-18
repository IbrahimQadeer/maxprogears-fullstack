"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

type ReadToggleButtonProps = {
  quoteId?: string | number;
  isRead?: boolean | null;
  isEnabled: boolean;
};

export function ReadToggleButton({
  quoteId,
  isRead,
  isEnabled,
}: ReadToggleButtonProps) {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const canUpdate =
    isEnabled && quoteId !== null && quoteId !== undefined && quoteId !== "";
  const nextIsRead = !isRead;
  const label = isRead ? "Mark Unread" : "Mark Read";

  async function handleToggle() {
    if (!canUpdate || isSaving) {
      return;
    }

    setIsSaving(true);

    const { error } = await supabase
      .from("quote_requests")
      .update({ is_read: nextIsRead })
      .eq("id", quoteId);

    if (error) {
      console.error("Supabase read state update failed:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
      toast.error("Read state update failed");
      setIsSaving(false);
      return;
    }

    toast.success(nextIsRead ? "Marked read" : "Marked unread");
    router.refresh();
    setIsSaving(false);
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={!canUpdate || isSaving}
      className="rounded-xl border border-zinc-700 bg-black px-3 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900 hover:text-white focus:ring-2 focus:ring-zinc-500/40 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isSaving ? "Saving..." : label}
    </button>
  );
}
