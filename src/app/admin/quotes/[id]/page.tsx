import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArchiveQuoteButton } from "@/components/admin/ArchiveQuoteButton";
import { CopyButton } from "@/components/admin/CopyButton";
import { QuoteStatusSelect } from "@/components/admin/QuoteStatusSelect";
import { ReadToggleButton } from "@/components/admin/ReadToggleButton";
import { RelativeTime } from "@/components/admin/RelativeTime";
import { requireAdminUser } from "@/lib/supabase/auth";
import { supabase } from "@/lib/supabase";

type Quote = {
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
  budget?: string | null;
  message?: string | null;
  customization_details?: string | null;
  status?: string | null;
  archived?: boolean | null;
  is_read?: boolean | null;
  created_at?: string | null;
};

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

function DetailItem({
  label,
  value,
  wide = false,
}: {
  label: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-zinc-800 bg-zinc-950 p-5 shadow-2xl shadow-black/20 ${
        wide ? "md:col-span-2" : ""
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
        {label}
      </p>
      <p className="mt-2 whitespace-pre-line break-words text-sm leading-7 text-zinc-100">
        {value}
      </p>
    </div>
  );
}

export default async function AdminQuoteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await requireAdminUser();

  const { data: quote, error } = await supabase
    .from("quote_requests")
    .select("*")
    .eq("id", id)
    .maybeSingle();
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

  if (error || !quote) {
    notFound();
  }

  const quoteRecord = quote as Quote;

  if (hasIsReadColumn && quoteRecord.is_read === false) {
    await supabase
      .from("quote_requests")
      .update({ is_read: true })
      .eq("id", id);
  }

  return (
    <main className="text-white">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-6 border-b border-zinc-800 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Link
              href="/admin/quotes"
              className="inline-flex rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900 hover:text-white"
            >
              Back to Quotes
            </Link>
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
              Quote Detail
            </p>
            {hasIsReadColumn && quoteRecord.is_read === false && (
              <span className="mt-4 inline-flex rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">
                New
              </span>
            )}
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {valueOrNA(quoteRecord.full_name ?? quoteRecord.name)}
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">
              Submitted <RelativeTime date={quoteRecord.created_at} />
            </p>
          </div>

          <div className="grid gap-3 md:min-w-[220px]">
            <QuoteStatusSelect
              quoteId={quoteRecord.id}
              currentStatus={quoteRecord.status}
              isEnabled={hasStatusColumn}
            />
            <ArchiveQuoteButton
              quoteId={quoteRecord.id}
              isEnabled={hasArchivedColumn}
              isArchived={quoteRecord.archived}
            />
            <ReadToggleButton
              quoteId={quoteRecord.id}
              isRead={quoteRecord.is_read}
              isEnabled={hasIsReadColumn}
            />
          </div>
        </header>

        {quoteRecord.archived && (
          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-300 shadow-2xl shadow-black/20">
            This quote is archived. Restore it to return it to the normal quote
            list.
          </div>
        )}

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <DetailItem
            label="Full Name"
            value={valueOrNA(quoteRecord.full_name ?? quoteRecord.name)}
          />
          <DetailItem label="Email" value={valueOrNA(quoteRecord.email)} />
          <DetailItem label="WhatsApp" value={valueOrNA(quoteRecord.whatsapp)} />
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 shadow-2xl shadow-black/20 md:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
              Quick Actions
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <CopyButton label="Email" value={quoteRecord.email} />
              <CopyButton label="WhatsApp" value={quoteRecord.whatsapp} />
            </div>
          </div>
          <DetailItem label="Country" value={valueOrNA(quoteRecord.country)} />
          <DetailItem
            label="Academy"
            value={valueOrNA(quoteRecord.academy ?? quoteRecord.academy_name)}
          />
          <DetailItem
            label="Product Type"
            value={valueOrNA(quoteRecord.product_type)}
          />
          <DetailItem label="Quantity" value={valueOrNA(quoteRecord.quantity)} />
          <DetailItem label="Deadline" value={valueOrNA(quoteRecord.deadline)} />
          <DetailItem label="Budget" value={valueOrNA(quoteRecord.budget)} />
          <DetailItem label="Status" value={valueOrNA(quoteRecord.status)} />
          <DetailItem
            label="Customization Details"
            value={valueOrNA(
              quoteRecord.customization_details ?? quoteRecord.message,
            )}
            wide
          />
          <DetailItem
            label="Created At"
            value={formatDate(quoteRecord.created_at)}
            wide
          />
        </section>
      </div>
    </main>
  );
}
