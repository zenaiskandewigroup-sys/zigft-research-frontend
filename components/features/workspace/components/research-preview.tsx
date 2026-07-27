import { Card } from "@/components/ui/card";

export function ResearchPreview() {
  return (
    <Card className="h-[500px] p-4">
      <h2 className="font-semibold">
        Preview
      </h2>

      <p className="mt-3 text-sm text-muted-foreground">
        Select research to preview.
      </p>
    </Card>
  );
}
