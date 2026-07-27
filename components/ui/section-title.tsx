import { typography } from "@/lib/theme/tokens";

interface Props {
  title: string;
  description?: string;
}

export function SectionTitle({
  title,
  description,
}: Props) {
  return (
    <div className="space-y-1">
      <h1 className={typography.pageTitle}>
        {title}
      </h1>

      {description && (
        <p className={typography.description}>
          {description}
        </p>
      )}
    </div>
  );
}
