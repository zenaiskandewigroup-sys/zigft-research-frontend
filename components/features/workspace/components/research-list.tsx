import { Research } from "../types/research";
import { ResearchCard } from "./research-card";

type Props = {
  researches: Research[];
};

export function ResearchList({
  researches,
}: Props) {
  return (
    <div className="space-y-4">

      {researches.map((research) => (
        <ResearchCard
          key={research.id}
          pair={research.pair}
          timeframe={research.timeframe}
          strategy={research.strategy}
          date={research.date}
        />
      ))}

    </div>
  );
}
