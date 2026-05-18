"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

type ArchiveQuoteButtonProps = {
  quoteId?: string | number;
  isEnabled: boolean;
  isArchived?: boolean | null;
};

export function ArchiveQuoteButton({
  quoteId,
  isEnabled,
  isArchived = false,
}: ArchiveQuoteButtonProps) {
  const router = useRouter();
  const [isUpdatingArchive, setIsUpdatingArchive] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const canArchive =
    isEnabled && quoteId !== null && quoteId !== undefined && quoteId !== "";
  const nextArchivedValue = !isArchived;
  const actionLabel = isArchived ? "Restore" : "Archive";
  const loadingLabel = isArchived ? "Restoring..." : "Archiving...";

  async function handleArchiveToggle() {
    if (!canArchive || isUpdatingArchive) {
      return;
    }

    const confirmed = window.confirm(
      isArchived
        ? "Restore this quote?"
        : "Archive this quote request? It will be hidden from the normal list but kept in the database.",
    );

    if (!confirmed) {
      return;
    }

    setIsUpdatingArchive(true);
    setErrorMessage("");

    const { error } = await supabase
      .from("quote_requests")
      .update({ archived: nextArchivedValue })
      .eq("id", quoteId);

    if (error) {
      console.error("Supabase quote archive update failed:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
      setErrorMessage(isArchived ? "Restore failed." : "Archive failed.");
      setIsUpdatingArchive(false);
      toast.error(isArchived ? "Restore failed" : "Archive failed");
      return;
    }

    toast.success(isArchived ? "Quote restored" : "Quote archived");
    router.refresh();
    setIsUpdatingArchive(false);
  }

  return (
    <div className="grid gap-1">
      <button
        type="button"
        onClick={handleArchiveToggle}
        disabled={!canArchive || isUpdatingArchive}
        className="rounded-xl border border-zinc-700 bg-black px-3 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isUpdatingArchive ? loadingLabel : actionLabel}
      </button>

      {!isEnabled && (
        <p className="max-w-[180px] text-xs leading-5 text-zinc-500">
          Add archived column to enable.
        </p>
      )}

      {errorMessage && (
        <p className="max-w-[180px] text-xs leading-5 text-red-200">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
