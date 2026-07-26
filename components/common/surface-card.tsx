import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SurfaceCardProps = React.ComponentProps<typeof Card>;

export function SurfaceCard({
  className,
  children,
  ...props
}: SurfaceCardProps) {
  return (
    <Card
      className={cn(
        "rounded-xl border border-border bg-card shadow-lg transition-all duration-200 hover:border-primary/40 hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}
