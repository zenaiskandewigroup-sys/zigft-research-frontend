import { Skeleton } from "@/components/ui/skeleton";

export function LoadingCard() {
  return (
    <div className="space-y-3 rounded-lg border p-6">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-8 w-40" />
    </div>
  );
}
