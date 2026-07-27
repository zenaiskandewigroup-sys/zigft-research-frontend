"use client";

import { PageContainer } from "@/components/ui/page-container";

import {
  WorkspaceHeader,
  WorkspaceToolbar,
  ResearchList,
  ResearchPreview,
} from "@/components/features/workspace";

import { useWorkspace } from "@/components/features/workspace/hooks/use-workspace";

export default function WorkspacePage() {
  const {
    search,
    setSearch,
    researches,
  } = useWorkspace();

  return (
    <PageContainer>

      <WorkspaceHeader />

      <WorkspaceToolbar
        search={search}
        onSearch={setSearch}
      />

      <div className="grid gap-6 lg:grid-cols-3">

        <div>
          <ResearchList
            researches={researches}
          />
        </div>

        <div className="lg:col-span-2">
          <ResearchPreview />
        </div>

      </div>

    </PageContainer>
  );
}
