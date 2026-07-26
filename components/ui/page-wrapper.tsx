interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({
  children,
}: PageWrapperProps) {
  return (
    <div className="mx-auto w-full max-w-[1700px]">
      {children}
    </div>
  );
}
