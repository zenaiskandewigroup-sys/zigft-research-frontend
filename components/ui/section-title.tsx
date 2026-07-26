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
      <h1 className="text-3xl font-bold tracking-tight text-white">
        {title}
      </h1>

      {description && (
        <p className="mt-2 text-sm text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
