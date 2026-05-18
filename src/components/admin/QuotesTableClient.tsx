"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AdminEmptyState } from "@/components/admin/AdminEmptyState";
import { ArchiveQuoteButton } from "@/components/admin/ArchiveQuoteButton";
import { QuoteStatusSelect } from "@/components/admin/QuoteStatusSelect";
import { RelativeTime } from "@/components/admin/RelativeTime";

const statusFilterOptions = [
  { label: "All", value: "all" },
  { label: "New", value: "new" },
  { label: "Contacted", value: "contacted" },
  { label: "Quoted", value: "quoted" },
  { label: "In Production", value: "in_production" },
  { label: "Completed", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
] as const;

type StatusFilter = (typeof statusFilterOptions)[number]["value"];

export type Quote = {
  id?: string | number;
  name?: string | null;
  full_name?: string | null;
  email?: string | null;
  whatsapp?: string | null;
  country?: string | null;
  academy_name?: string | null;
  academy?: string | null;
  product_type?: string | null;
  quantity?: string | number | null;
  deadline?: string | null;
  message?: string | null;
  customization_details?: string | null;
  status?: string | null;
  archived?: boolean | null;
  is_read?: boolean | null;
  created_at?: string | null;
};

type QuotesTableClientProps = {
  quotes: Quote[];
  hasStatusColumn: boolean;
  hasArchivedColumn: boolean;
  hasIsReadColumn: boolean;
};

function valueOrNA(value: unknown) {
  if (value === null || value === undefined) {
    return "N/A";
  }

  const text = String(value).trim();

  return text || "N/A";
}

function getQuoteName(quote: Quote) {
  return valueOrNA(quote.name ?? quote.full_name);
}

function getAcademyName(quote: Quote) {
  return valueOrNA(quote.academy_name ?? quote.academy);
}

function getQuoteMessage(quote: Quote) {
  return valueOrNA(quote.message ?? quote.customization_details);
}

function ArchivedBadge() {
  return (
    <span className="inline-flex w-fit rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300">
      Archived
    </span>
  );
}

function NewBadge() {
  return (
    <span className="inline-flex w-fit rounded-full border border-blue-400/25 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-200 shadow-[0_0_18px_rgba(96,165,250,0.08)]">
      New
    </span>
  );
}

function getSearchText(quote: Quote) {
  return [
    quote.name,
    quote.full_name,
    quote.email,
    quote.whatsapp,
    quote.country,
    quote.academy_name,
    quote.academy,
    quote.product_type,
    quote.quantity,
    quote.deadline,
    quote.message,
    quote.customization_details,
  ]
    .map((value) => valueOrNA(value).toLowerCase())
    .join(" ");
}

function DetailItem({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
        {label}
      </p>
      <p className="mt-1 break-words text-sm leading-6 text-zinc-100">{value}</p>
    </div>
  );
}

export function QuotesTableClient({
  quotes,
  hasStatusColumn,
  hasArchivedColumn,
  hasIsReadColumn,
}: QuotesTableClientProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [showArchived, setShowArchived] = useState(false);
  const trimmedSearchQuery = searchQuery.trim().toLowerCase();
  const hasActiveFilters =
    trimmedSearchQuery !== "" || statusFilter !== "all" || showArchived;

  const visibleQuotes = useMemo(() => {
    if (!hasArchivedColumn) {
      return quotes;
    }

    return quotes.filter((quote) => Boolean(quote.archived) === showArchived);
  }, [hasArchivedColumn, quotes, showArchived]);

  const filteredQuotes = useMemo(() => {
    return visibleQuotes.filter((quote) => {
      const matchesSearch =
        trimmedSearchQuery === "" ||
        getSearchText(quote).includes(trimmedSearchQuery);
      const matchesStatus =
        statusFilter === "all" ||
        quote.status?.toLowerCase().trim() === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [statusFilter, trimmedSearchQuery, visibleQuotes]);

  function clearFilters() {
    setSearchQuery("");
    setStatusFilter("all");
    setShowArchived(false);
  }

  function openQuoteDetail(quote: Quote) {
    if (quote.id === null || quote.id === undefined || quote.id === "") {
      return;
    }

    router.push(`/admin/quotes/${quote.id}`);
  }

  return (
    <section className="mt-8">
      <div className="mb-5 flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 shadow-2xl shadow-black/20 lg:flex-row lg:items-end lg:justify-between">
        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_220px] lg:flex-1">
          <div>
            <label
              htmlFor="quote-search"
              className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500"
            >
              Search
            </label>
            <input
              id="quote-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 hover:border-zinc-700 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500/20"
              placeholder="Search name, email, product, message..."
            />
          </div>

          <div>
            <label
              htmlFor="quote-status-filter"
              className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500"
            >
              Status
            </label>
            <select
              id="quote-status-filter"
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value as StatusFilter)
              }
              disabled={!hasStatusColumn}
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none transition hover:border-zinc-700 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {statusFilterOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-zinc-950 text-white"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-end">
          {hasArchivedColumn && (
            <label className="flex w-fit items-center gap-2 rounded-xl border border-zinc-800 bg-black px-4 py-2 text-sm text-zinc-300">
              <input
                type="checkbox"
                checked={showArchived}
                onChange={(event) => setShowArchived(event.target.checked)}
                className="h-4 w-4 accent-zinc-200"
              />
              Show archived
            </label>
          )}

          <p className="text-sm text-zinc-500">
            Showing{" "}
            <span className="font-medium text-zinc-200">
              {filteredQuotes.length}
            </span>{" "}
            of{" "}
            <span className="font-medium text-zinc-200">
              {visibleQuotes.length}
            </span>{" "}
            quote requests
          </p>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="w-fit rounded-xl border border-zinc-700 bg-black px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900 hover:text-white focus:ring-2 focus:ring-zinc-500/30 focus:outline-none"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {quotes.length === 0 ? (
        <AdminEmptyState
          title="No quote requests yet."
          description="New website quote submissions will appear here."
        />
      ) : filteredQuotes.length === 0 ? (
        <AdminEmptyState
          title={
            showArchived ? "No archived quote requests." : "No matching quote requests."
          }
          description="Try a different search term or status filter."
        />
      ) : (
        <>
          <div className="hidden overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/20 lg:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1120px] border-collapse text-left">
                <thead className="bg-zinc-900/80 text-xs uppercase tracking-[0.14em] text-zinc-500">
                  <tr>
                    <th className="px-5 py-4 font-medium">Customer</th>
                    <th className="px-5 py-4 font-medium">Contact</th>
                    <th className="px-5 py-4 font-medium">Project</th>
                    <th className="px-5 py-4 font-medium">Message</th>
                    <th className="px-5 py-4 font-medium">Status</th>
                    <th className="px-5 py-4 font-medium">Created</th>
                    <th className="px-5 py-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {filteredQuotes.map((quote, index) => (
                    <tr
                      key={quote.id ?? `${quote.email ?? "quote"}-${index}`}
                      onClick={(event) => {
                        if (
                          event.target instanceof Element &&
                          event.target.closest("[data-no-row-nav]")
                        ) {
                          return;
                        }

                        openQuoteDetail(quote);
                      }}
                      className={`cursor-pointer align-middle transition-colors duration-200 hover:bg-zinc-900/55 ${
                        hasIsReadColumn && quote.is_read === false
                          ? "bg-blue-500/[0.055] shadow-[inset_3px_0_0_rgba(96,165,250,0.65)]"
                          : ""
                      }`}
                    >
                      <td className="w-[230px] px-5 py-6">
                        <div className="flex items-start gap-2">
                          {hasIsReadColumn && quote.is_read === false && (
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.65)]" />
                          )}
                          <div>
                            <p className="break-words font-medium text-white">
                              {getQuoteName(quote)}
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {hasIsReadColumn && quote.is_read === false && (
                                <NewBadge />
                              )}
                              {quote.archived && <ArchivedBadge />}
                            </div>
                          </div>
                        </div>
                        <p className="mt-2 break-words text-sm text-zinc-400">
                          {getAcademyName(quote)}
                        </p>
                        <p className="mt-2 break-words text-sm text-zinc-500">
                          {valueOrNA(quote.country)}
                        </p>
                      </td>
                      <td className="w-[230px] px-5 py-6 text-sm leading-6 text-zinc-300">
                        <p className="break-all">{valueOrNA(quote.email)}</p>
                        <p className="mt-2 break-words text-zinc-400">
                          {valueOrNA(quote.whatsapp)}
                        </p>
                      </td>
                      <td className="w-[220px] px-5 py-6 text-sm leading-6 text-zinc-300">
                        <p className="break-words">{valueOrNA(quote.product_type)}</p>
                        <p className="mt-2 break-words text-zinc-400">
                          Qty: {valueOrNA(quote.quantity)}
                        </p>
                        <p className="mt-2 break-words text-zinc-400">
                          Deadline: {valueOrNA(quote.deadline)}
                        </p>
                      </td>
                      <td className="max-w-[340px] px-5 py-6 text-sm leading-6 text-zinc-300">
                        <p className="line-clamp-6 whitespace-pre-line break-words">
                          {getQuoteMessage(quote)}
                        </p>
                      </td>
                      <td className="w-[190px] px-5 py-6" data-no-row-nav>
                        <QuoteStatusSelect
                          quoteId={quote.id}
                          currentStatus={quote.status}
                          isEnabled={hasStatusColumn}
                        />
                      </td>
                      <td className="w-[150px] px-5 py-6 text-sm leading-6 text-zinc-400">
                        <RelativeTime date={quote.created_at} />
                      </td>
                      <td className="w-[160px] px-5 py-6" data-no-row-nav>
                        <ArchiveQuoteButton
                          quoteId={quote.id}
                          isEnabled={hasArchivedColumn}
                          isArchived={quote.archived}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid gap-4 lg:hidden">
            {filteredQuotes.map((quote, index) => (
              <article
                key={quote.id ?? `${quote.email ?? "quote"}-${index}`}
                onClick={(event) => {
                  if (
                    event.target instanceof Element &&
                    event.target.closest("[data-no-row-nav]")
                  ) {
                    return;
                  }

                  openQuoteDetail(quote);
                }}
                className={`cursor-pointer rounded-2xl border p-5 shadow-2xl shadow-black/20 transition hover:border-zinc-700 hover:bg-zinc-900/40 ${
                  hasIsReadColumn && quote.is_read === false
                    ? "border-blue-400/25 bg-blue-500/[0.055] shadow-[0_0_0_1px_rgba(96,165,250,0.06)]"
                    : "border-zinc-800 bg-zinc-950"
                }`}
              >
                <div className="flex flex-col gap-4 border-b border-zinc-800 pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-start gap-2">
                      {hasIsReadColumn && quote.is_read === false && (
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.65)]" />
                      )}
                      <div>
                        <p className="break-words text-lg font-semibold text-white">
                          {getQuoteName(quote)}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {hasIsReadColumn && quote.is_read === false && (
                            <NewBadge />
                          )}
                          {quote.archived && <ArchivedBadge />}
                        </div>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-zinc-500">
                      <RelativeTime date={quote.created_at} />
                    </p>
                  </div>

                  <div data-no-row-nav>
                    <QuoteStatusSelect
                      quoteId={quote.id}
                      currentStatus={quote.status}
                      isEnabled={hasStatusColumn}
                    />
                  </div>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <DetailItem label="Email" value={valueOrNA(quote.email)} />
                  <DetailItem label="WhatsApp" value={valueOrNA(quote.whatsapp)} />
                  <DetailItem label="Country" value={valueOrNA(quote.country)} />
                  <DetailItem label="Academy Name" value={getAcademyName(quote)} />
                  <DetailItem
                    label="Product Type"
                    value={valueOrNA(quote.product_type)}
                  />
                  <DetailItem label="Quantity" value={valueOrNA(quote.quantity)} />
                  <DetailItem label="Deadline" value={valueOrNA(quote.deadline)} />
                  <DetailItem
                    label="Message"
                    value={getQuoteMessage(quote)}
                    className="rounded-xl border border-zinc-800 bg-black/30 p-4 sm:col-span-2"
                  />
                  <div data-no-row-nav className="sm:col-span-2">
                    <ArchiveQuoteButton
                      quoteId={quote.id}
                      isEnabled={hasArchivedColumn}
                      isArchived={quote.archived}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
