import Link from "next/link";
import { AdminEmptyState } from "./AdminEmptyState";
import { RelativeTime } from "./RelativeTime";

export type RecentQuote = {
  id?: string | number;
  name?: string | null;
  full_name?: string | null;
  product_type?: string | null;
  status?: string | null;
  is_read?: boolean | null;
  created_at?: string | null;
};

type RecentActivityProps = {
  quotes: RecentQuote[];
  hasIsReadColumn: boolean;
};

function valueOrNA(value: unknown) {
  if (value === null || value === undefined) {
    return "N/A";
  }

  const text = String(value).trim();

  return text || "N/A";
}

function getQuoteName(quote: RecentQuote) {
  return valueOrNA(quote.full_name ?? quote.name);
}

export function RecentActivity({
  quotes,
  hasIsReadColumn,
}: RecentActivityProps) {
  return (
    <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl shadow-black/20">
      <div className="flex flex-col gap-3 border-b border-zinc-800 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Recent Activity
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            Latest quote requests from the website.
          </p>
        </div>
        <Link
          href="/admin/quotes"
          className="w-fit rounded-xl border border-zinc-700 bg-black px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900 hover:text-white"
        >
          View all
        </Link>
      </div>

      {quotes.length === 0 ? (
        <div className="mt-6">
          <AdminEmptyState
            title="No recent activity."
            description="New quote and contact submissions will appear here."
          />
        </div>
      ) : (
        <div className="mt-5 grid gap-3">
          {quotes.map((quote) => {
            const isUnread = hasIsReadColumn && quote.is_read === false;

            return (
              <Link
                key={quote.id}
                href={`/admin/quotes/${quote.id}`}
                className={`rounded-2xl border p-4 transition duration-200 hover:border-zinc-600 hover:bg-zinc-900/60 ${
                  isUnread
                    ? "border-blue-400/25 bg-blue-500/[0.06] shadow-[0_0_0_1px_rgba(96,165,250,0.08)]"
                    : "border-zinc-800 bg-black/30"
                }`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      {isUnread && (
                        <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.6)]" />
                      )}
                      <p className="truncate text-sm font-semibold text-white">
                        {getQuoteName(quote)}
                      </p>
                      {isUnread && (
                        <span className="rounded-full border border-blue-400/25 bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-200">
                          New
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-zinc-500">
                      {valueOrNA(quote.product_type)} · {valueOrNA(quote.status)}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm text-zinc-500">
                    <RelativeTime date={quote.created_at} />
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
