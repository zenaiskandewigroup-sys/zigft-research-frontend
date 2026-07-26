import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { SectionTitle } from "@/components/ui/section-title";
import { StatCard } from "@/components/ui/stat-card";

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
        <Card className="p-6 xl:col-span-2">
          <h2 className="text-lg font-semibold">
            Recent Research
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Latest trading research will appear here.
          </p>
        </Card>

        {/* Market Status */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold">
            Market Status
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Market data coming soon.
          </p>
        </Card>

      </div>

      {/* Research History */}
      <div className="mt-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold">
            Research History
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            No research history available.
          </p>
        </Card>
      </div>

    </PageContainer>
  );
}
