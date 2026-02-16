export type RatingKey = "sleep" | "energy" | "mood" | "stress" | "focus";

export type StateSnapshot = {
  sleep: number;
  energy: number;
  mood: number;
  stress: number;
  focus: number;
  tags: string[];
};

export type JournalEntry = {
  id: string;
  timestamp: string;
  title?: string;
  body: string;
  snapshot: StateSnapshot;
};

export type JournalDraft = {
  title: string;
  body: string;
  tags: string;
  sleep: number;
  energy: number;
  mood: number;
  stress: number;
  focus: number;
};

export const DEFAULT_DRAFT: JournalDraft = {
  title: "",
  body: "",
  tags: "",
  sleep: 3,
  energy: 3,
  mood: 3,
  stress: 3,
  focus: 3,
};
