import * as React from "react";

interface SectionTitleProps {
  title: string;
  description?: string;
}

export function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h1>

      {description && (
        <p className="mt-2 text-sm text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
