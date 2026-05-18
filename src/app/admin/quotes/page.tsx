import { redirect } from "next/navigation";
import {
  Quote,
  QuotesTableClient,
} from "@/components/admin/QuotesTableClient";
import { requireAdminUser } from "@/lib/supabase/auth";
import { supabase } from "@/lib/supabase";

function valueOrNA(value: unknown) {
  if (value === null || value === undefined) {
    return "N/A";
  }

  const text = String(value).trim();

  return text || "N/A";
}

function formatDate(date: string | null | undefined) {
  if (!date) {
    return "N/A";
  }

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "N/A";
  }

  return parsedDate.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default async function AdminQuotesPage() {
  await requireAdminUser();

  const { data: quotes, error } = await supabase
    .from("quote_requests")
    .select("*")
    .order("created_at", { ascending: false });
  const { error: statusColumnError } = await supabase
    .from("quote_requests")
    .select("status")
    .limit(1);
  const { error: archivedColumnError } = await supabase
    .from("quote_requests")
    .select("archived")
    .limit(1);
  const { error: readColumnError } = await supabase
    .from("quote_requests")
    .select("is_read")
    .limit(1);
  const hasStatusColumn = !statusColumnError;
  const hasArchivedColumn = !archivedColumnError;
  const hasIsReadColumn = !readColumnError;

  const quoteList = (quotes ?? []) as Quote[];
  const totalRequests = quoteList.length;
  const hasStatusValues = quoteList.some((quote) => valueOrNA(quote.status) !== "N/A");
  const newRequests = hasStatusValues
    ? quoteList.filter((quote) => quote.status?.toLowerCase().trim() === "new").length
    : "N/A";
  const latestRequestDate = formatDate(quoteList[0]?.created_at);

  if (error) {
    return (
      <main className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-red-400/25 bg-red-950/30 p-6 shadow-2xl shadow-black/40">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-200">
              Supabase Error
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Admin Dashboard
            </h1>
            <p className="mt-4 text-sm leading-6 text-red-100">
              Quote requests could not be loaded right now.
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
              Quote Management
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Quote Requests
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">
              Review and manage quote requests from the website.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 px-6 py-5 text-left shadow-2xl shadow-black/30 md:text-right">
              <p className="text-sm text-zinc-500">Total quote count</p>
              <p className="mt-1 text-3xl font-semibold text-white">
                {totalRequests}
              </p>
            </div>
          </div>
        </header>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl shadow-black/20">
            <p className="text-sm text-zinc-500">Total Requests</p>
            <p className="mt-3 text-3xl font-semibold text-white">{totalRequests}</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl shadow-black/20">
            <p className="text-sm text-zinc-500">New Requests</p>
            <p className="mt-3 text-3xl font-semibold text-white">{newRequests}</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl shadow-black/20">
            <p className="text-sm text-zinc-500">Latest Request</p>
            <p className="mt-3 text-lg font-semibold text-white">{latestRequestDate}</p>
          </div>
        </section>

        <QuotesTableClient
          quotes={quoteList}
          hasStatusColumn={hasStatusColumn}
          hasArchivedColumn={hasArchivedColumn}
          hasIsReadColumn={hasIsReadColumn}
        />
      </div>
    </main>
  );
}
