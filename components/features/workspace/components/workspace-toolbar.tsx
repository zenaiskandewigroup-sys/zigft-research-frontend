"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  search: string;
  onSearch: (value: string) => void;
};

export function WorkspaceToolbar({
  search,
  onSearch,
}: Props) {
  return (
    <div className="flex flex-col gap-3 md:flex-row">

      <Input
        placeholder="Search research..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="flex-1"
      />

      <Button variant="outline">
        Filter
      </Button>

    </div>
  );
}
