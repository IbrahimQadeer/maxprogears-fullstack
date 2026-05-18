import Link from "next/link";
import { redirect } from "next/navigation";
import { DashboardStats } from "@/components/admin/DashboardStats";
import { RecentActivity } from "@/components/admin/RecentActivity";
import { requireAdminUser } from "@/lib/supabase/auth";
import { supabase } from "@/lib/supabase";

type Quote = {
  id?: string | number;
  name?: string | null;
  full_name?: string | null;
  product_type?: string | null;
  status?: string | null;
  archived?: boolean | null;
  is_read?: boolean | null;
  created_at?: string | null;
};

function countByStatus(quotes: Quote[], status: string) {
  return quotes.filter(
    (quote) =>
      quote.archived !== true && quote.status?.toLowerCase().trim() === status,
  ).length;
}

export default async function AdminPage() {
  await requireAdminUser();

  const { data: quotes, error } = await supabase
    .from("quote_requests")
    .select("*")
    .order("created_at", { ascending: false });
  const { error: readColumnError } = await supabase
    .from("quote_requests")
    .select("is_read")
    .limit(1);
  const hasIsReadColumn = !readColumnError;

  const quoteList = (quotes ?? []) as Quote[];
  const activeQuotes = quoteList.filter((quote) => quote.archived !== true);
  const recentQuotes = activeQuotes.slice(0, 5);
  const stats = [
    { label: "Total quotes", value: quoteList.length },
    {
      label: "Unread quotes",
      value: hasIsReadColumn
        ? activeQuotes.filter((quote) => quote.is_read === false).length
        : "N/A",
    },
    { label: "Contacted", value: countByStatus(quoteList, "contacted") },
    { label: "Quoted", value: countByStatus(quoteList, "quoted") },
    { label: "In Production", value: countByStatus(quoteList, "in_production") },
    { label: "Completed", value: countByStatus(quoteList, "completed") },
    {
      label: "Archived",
      value: quoteList.filter((quote) => quote.archived === true).length,
    },
  ];

  if (error) {
    return (
      <main className="text-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-red-400/25 bg-red-950/30 p-6 shadow-2xl shadow-black/40">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-200">
              Supabase Error
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Admin Dashboard
            </h1>
            <p className="mt-4 text-sm leading-6 text-red-100">
              Dashboard data could not be loaded right now.
            </p>
            <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-red-400/15 bg-black/40 p-4 text-sm text-red-100">
              {error.message}
            </pre>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="text-white">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-6 border-b border-zinc-800 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
              Overview
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Admin Dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">
              CRM overview for quote activity, request status, and recent
              customer submissions.
            </p>
          </div>

          <Link
            href="/admin/quotes"
            className="inline-flex w-fit rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900 hover:text-white"
          >
            View All Quotes
          </Link>
        </header>

        <DashboardStats stats={stats} />
        <RecentActivity
          quotes={recentQuotes}
          hasIsReadColumn={hasIsReadColumn}
        />
      </div>
    </main>
  );
}
