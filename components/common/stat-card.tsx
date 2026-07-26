import * as React from "react";
import { SurfaceCard } from "./surface-card";

interface StatCardProps {
  title: string;
  value: string;
}

export function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <SurfaceCard className="p-5">
      <p className="text-sm text-muted-foreground">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-foreground">
        {value}
      </h3>
    </SurfaceCard>
  );
}
