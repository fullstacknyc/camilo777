"use client";

import type { JournalEntry, RatingKey } from "../types";

type WeeklySummaryProps = {
  entries: JournalEntry[];
};

const RATING_KEYS: RatingKey[] = ["sleep", "energy", "mood", "stress", "focus"];

function avg(values: number[]) {
  if (!values.length) return 0;
  const total = values.reduce((sum, value) => sum + value, 0);
  return Number((total / values.length).toFixed(2));
}

export default function WeeklySummary({ entries }: WeeklySummaryProps) {
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const weekly = entries.filter((entry) => new Date(entry.timestamp).getTime() >= weekAgo);

  const averages = RATING_KEYS.reduce<Record<RatingKey, number>>((result, key) => {
    result[key] = avg(weekly.map((entry) => entry.snapshot[key]));
    return result;
  }, {
    sleep: 0,
    energy: 0,
    mood: 0,
    stress: 0,
    focus: 0,
  });

  return (
    <section className="panel p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">Weekly Summary</h2>
        <p className="text-xs text-neutral-400">Last 7 days</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3 lg:col-span-1">
          <p className="text-xs text-neutral-400">Entries</p>
          <p className="mt-1 text-2xl font-semibold">{weekly.length}</p>
        </div>

        {RATING_KEYS.map((key) => (
          <div key={key} className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
            <p className="text-xs capitalize text-neutral-400">{key}</p>
            <p className="mt-1 text-xl font-semibold">{averages[key]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
