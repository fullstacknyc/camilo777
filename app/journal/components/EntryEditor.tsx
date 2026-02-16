"use client";

import type { JournalDraft, RatingKey } from "../types";

type EntryEditorProps = {
  draft: JournalDraft;
  onChange: (next: JournalDraft) => void;
  onSubmit: () => void;
  submitLabel: string;
  disabled?: boolean;
  onCancel?: () => void;
};

const RATING_FIELDS: Array<{ key: RatingKey; label: string }> = [
  { key: "sleep", label: "Sleep" },
  { key: "energy", label: "Energy" },
  { key: "mood", label: "Mood" },
  { key: "stress", label: "Stress" },
  { key: "focus", label: "Focus" },
];

export default function EntryEditor({
  draft,
  onChange,
  onSubmit,
  submitLabel,
  disabled = false,
  onCancel,
}: EntryEditorProps) {
  const updateField = <K extends keyof JournalDraft>(key: K, value: JournalDraft[K]) => {
    onChange({ ...draft, [key]: value });
  };

  return (
    <div className="space-y-3">
      <input
        className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500"
        placeholder="Optional title"
        value={draft.title}
        onChange={(event) => updateField("title", event.target.value)}
      />

      <textarea
        className="min-h-28 w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500"
        placeholder="Write your journal entry..."
        value={draft.body}
        onChange={(event) => updateField("body", event.target.value)}
      />

      <input
        className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500"
        placeholder="Tags (comma separated)"
        value={draft.tags}
        onChange={(event) => updateField("tags", event.target.value)}
      />

      <div className="grid gap-2 sm:grid-cols-5">
        {RATING_FIELDS.map((field) => (
          <label key={field.key} className="flex flex-col gap-1 text-xs">
            <span className="text-neutral-400">{field.label}</span>
            <select
              className="rounded-lg border border-neutral-700 bg-neutral-900 px-2 py-1.5 text-sm text-neutral-100"
              value={draft[field.key]}
              onChange={(event) => updateField(field.key, Number(event.target.value))}
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          disabled={disabled || !draft.body.trim()}
          onClick={onSubmit}
          className="rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitLabel}
        </button>

        {onCancel ? (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-200 transition hover:bg-neutral-800"
          >
            Cancel
          </button>
        ) : null}
      </div>
    </div>
  );
}
