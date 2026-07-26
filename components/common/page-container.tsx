import * as React from "react";
import { cn } from "@/lib/utils";

type PageContainerProps = React.ComponentProps<"main">;

export function PageContainer({
  className,
  children,
  ...props
}: PageContainerProps) {
  return (
    <main
      className={cn(
        "flex-1 bg-background p-4 sm:p-6 lg:p-8",
        className
      )}
      {...props}
    >
      <div className="mx-auto w-full max-w-7xl">
        {children}
      </div>
    </main>
  );
}
