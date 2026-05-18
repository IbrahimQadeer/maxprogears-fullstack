type AdminEmptyStateProps = {
  title: string;
  description: string;
};

export function AdminEmptyState({ title, description }: AdminEmptyStateProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-10 text-center shadow-2xl shadow-black/20">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-black text-lg text-zinc-500">
        -
      </div>
      <p className="mt-5 text-lg font-semibold text-white">{title}</p>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">
        {description}
      </p>
    </div>
  );
}
