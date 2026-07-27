import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ResearchCardProps = {
  pair: string;
  timeframe: string;
  strategy: string;
  date: string;
};

export function ResearchCard({
  pair,
  timeframe,
  strategy,
  date,
}: ResearchCardProps) {
  return (
    <Card className="cursor-pointer p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-base font-semibold">
            {pair}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {strategy}
          </p>

        </div>

        <Badge>
          {timeframe}
        </Badge>

      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        {date}
      </p>

    </Card>
  );
}
