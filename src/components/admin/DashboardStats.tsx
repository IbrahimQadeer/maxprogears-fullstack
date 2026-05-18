type StatItem = {
  label: string;
  value: string | number;
};

type DashboardStatsProps = {
  stats: StatItem[];
};

export function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl shadow-black/20 transition duration-200 hover:border-zinc-700 hover:bg-zinc-900/40 hover:shadow-black/30"
        >
          <p className="text-sm text-zinc-500">{stat.label}</p>
          <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
        </div>
      ))}
    </section>
  );
}
