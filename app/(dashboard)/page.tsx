import { PageContainer } from "@/components/common/page-container";
import { SectionTitle } from "@/components/common/section-title";
import { StatCard } from "@/components/common/stat-card";
import { SurfaceCard } from "@/components/common/surface-card";

export default function DashboardPage() {
  return (
    <PageContainer>
      <SectionTitle
        title="Overview Dashboard"
        description="Trading Research Platform"
      />

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Trading Systems" value="0" />
        <StatCard title="Backtests" value="0" />
        <StatCard title="Forward Tests" value="0" />
        <StatCard title="AI Analysis" value="0" />
      </div>

      {/* Dashboard Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Recent Research */}
        <SurfaceCard className="p-6 xl:col-span-2">
          <h2 className="text-lg font-semibold">
            Recent Research
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Latest trading research will appear here.
          </p>
        </SurfaceCard>

        {/* Market Status */}
        <SurfaceCard className="p-6">
          <h2 className="text-lg font-semibold">
            Market Status
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Market data coming soon.
          </p>
        </SurfaceCard>

      </div>

      {/* Research History */}
      <div className="mt-6">
        <SurfaceCard className="p-6">
          <h2 className="text-lg font-semibold">
            Research History
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            No research history available.
          </p>
        </SurfaceCard>
      </div>
    </PageContainer>
  );
}
