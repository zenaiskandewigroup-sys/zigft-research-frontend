export type Research = {
  id: string;

  pair: string;

  timeframe: string;

  strategy: string;

  date: string;

  status: "draft" | "completed";

  favorite: boolean;
};
