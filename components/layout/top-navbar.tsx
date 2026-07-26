"use client";

import { Bell, Search } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function TopNavbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur">

      {/* Left */}
      <div className="flex items-center gap-3">


	<SidebarTrigger className="lg:hidden" />

        <div>
          <h1 className="text-lg font-semibold text-foreground">
            Dashboard
          </h1>

          <p className="text-xs text-muted-foreground">
            Trading Research Platform
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        <button className="rounded-xl border border-border p-2 hover:bg-accent">
          <Search size={18} />
        </button>

        <button className="rounded-xl border border-border p-2 hover:bg-accent">
          <Bell size={18} />
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
          Z
        </div>

      </div>

    </header>
  );
}
