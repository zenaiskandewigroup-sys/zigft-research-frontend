"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { TopNavbar } from "./top-navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <SidebarProvider defaultOpen>

      <div className="flex min-h-screen w-full bg-background">

        <AppSidebar />

        <div className="flex min-w-0 flex-1 flex-col">

          <TopNavbar />

          <main className="flex-1 overflow-auto bg-background">
            <div className="min-h-full p-4 sm:p-6 lg:p-8">
              {children}
            </div>
          </main>

        </div>

      </div>

    </SidebarProvider>
  );
}
