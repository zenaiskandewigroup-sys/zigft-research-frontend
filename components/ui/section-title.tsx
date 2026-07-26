type Props = {
  title: string;
  description?: string;
};

export function SectionTitle({
  title,
  description,
}: Props) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold tracking-tight">
        {title}
      </h1>

      {description && (
        <p className="mt-2 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
