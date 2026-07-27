import { Button } from "@/components/ui/button";

export function WorkspaceHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <div>
        <h1 className="text-3xl font-bold">
          Workspace
        </h1>

        <p className="text-muted-foreground">
          Organize your trading research.
        </p>
      </div>

      <Button>
        + New Research
      </Button>

    </div>
  );
}
