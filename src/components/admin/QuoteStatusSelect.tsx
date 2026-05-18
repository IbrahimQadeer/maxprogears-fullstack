"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

const statusOptions = [
  "new",
  "contacted",
  "quoted",
  "in_production",
  "completed",
  "cancelled",
] as const;

type StatusOption = (typeof statusOptions)[number];

type QuoteStatusSelectProps = {
  quoteId?: string | number;
  currentStatus?: string | null;
  isEnabled?: boolean;
};

function normalizeStatus(status: string | null | undefined): StatusOption {
  const normalizedStatus = status?.toLowerCase().trim();

  if (statusOptions.includes(normalizedStatus as StatusOption)) {
    return normalizedStatus as StatusOption;
  }

  return "new";
}

function formatStatusLabel(status: string) {
  return status
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getStatusClass(status: string) {
  if (status === "new") {
    return "border-blue-400/30 bg-blue-500/10 text-blue-200";
  }

  if (status === "contacted" || status === "quoted") {
    return "border-yellow-400/30 bg-yellow-500/10 text-yellow-200";
  }

  if (status === "in_production") {
    return "border-purple-400/30 bg-purple-500/10 text-purple-200";
  }

  if (status === "completed") {
    return "border-green-400/30 bg-green-500/10 text-green-200";
  }

  if (status === "cancelled") {
    return "border-red-400/30 bg-red-500/10 text-red-200";
  }

  return "border-zinc-600/60 bg-zinc-800/80 text-zinc-300";
}

export function QuoteStatusSelect({
  quoteId,
  currentStatus,
  isEnabled = true,
}: QuoteStatusSelectProps) {
  const router = useRouter();
  const [status, setStatus] = useState<StatusOption>(
    normalizeStatus(currentStatus),
  );
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const hasQuoteId = quoteId !== null && quoteId !== undefined && quoteId !== "";
  const canUpdateStatus = hasQuoteId && isEnabled;

  async function handleStatusChange(nextStatus: string) {
    const normalizedNextStatus = normalizeStatus(nextStatus);
    const previousStatus = status;

    if (!canUpdateStatus || normalizedNextStatus === previousStatus) {
      return;
    }

    setStatus(normalizedNextStatus);
    setErrorMessage("");
    setIsSaving(true);

    const { error } = await supabase
      .from("quote_requests")
      .update({ status: normalizedNextStatus })
      .eq("id", quoteId);

    if (error) {
      console.error("Supabase quote status update failed:", error);
      setStatus(previousStatus);
      setErrorMessage(error.message);
      setIsSaving(false);
      toast.error("Status update failed");
      return;
    }

    setIsSaving(false);
    toast.success("Status updated");
    router.refresh();
  }

  return (
    <div className="grid gap-2">
      <div
        className={`inline-flex w-fit rounded-full border px-3 py-1 text-xs font-medium transition ${getStatusClass(status)}`}
      >
        {formatStatusLabel(status)}
      </div>

      <div className="relative">
        <select
          value={status}
          onChange={(event) => handleStatusChange(event.target.value)}
          disabled={!canUpdateStatus || isSaving}
          className="h-10 w-full min-w-[150px] rounded-xl border border-zinc-700 bg-black px-3 pr-8 text-sm text-zinc-100 outline-none transition hover:border-zinc-500 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-500/20 disabled:cursor-not-allowed disabled:opacity-60"
          aria-label="Update quote status"
        >
          {statusOptions.map((option) => (
            <option key={option} value={option} className="bg-zinc-950 text-white">
              {formatStatusLabel(option)}
            </option>
          ))}
        </select>
        {isSaving && (
          <span className="pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2 animate-spin rounded-full border border-zinc-500 border-t-white" />
        )}
      </div>

      {isSaving && <p className="text-xs text-zinc-500">Saving...</p>}

      {!isEnabled && (
        <p className="text-xs leading-5 text-red-200">
          Add a status column to enable updates.
        </p>
      )}

      {isEnabled && !hasQuoteId && (
        <p className="text-xs leading-5 text-red-200">Missing quote ID.</p>
      )}

      {errorMessage && (
        <p className="text-xs leading-5 text-red-200">
          Status could not be saved.
        </p>
      )}
    </div>
  );
}
