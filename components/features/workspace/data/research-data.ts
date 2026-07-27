import { Research } from "../types/research";

export const researchData: Research[] = [
  {
    id: "1",
    pair: "XAUUSD",
    timeframe: "H1",
    strategy: "SMC Continuation",
    date: "22 Jul 2026",
    status: "completed",
    favorite: true,
  },

  {
    id: "2",
    pair: "EURUSD",
    timeframe: "M15",
    strategy: "Liquidity Sweep",
    date: "21 Jul 2026",
    status: "draft",
    favorite: false,
  },

  {
    id: "3",
    pair: "BTCUSD",
    timeframe: "H4",
    strategy: "Breaker Block",
    date: "20 Jul 2026",
    status: "completed",
    favorite: false,
  },
];
