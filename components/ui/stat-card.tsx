import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  spacing,
  radius,
  shadow,
  typography,
} from "@/lib/theme/tokens";

interface StatCardProps {
  title: string;
  value: string;
}

export function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <Card
      className={cn(
        spacing.card,
        radius.card,
        shadow.card,
        "border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-card"
      )}
    >
      <p className={typography.description}>
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        {value}
      </h2>
    </Card>
  );
}
