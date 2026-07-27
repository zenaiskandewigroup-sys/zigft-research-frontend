import { cn } from "@/lib/utils";
import { layout, spacing } from "@/lib/theme/tokens";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        layout.page,
        spacing.page,
        spacing.section,
        className
      )}
    >
      {children}
    </div>
  );
}
