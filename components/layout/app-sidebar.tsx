"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FolderKanban,
  FlaskConical,
  Activity,
  Bot,
  Images,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menus = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Workspace",
    href: "/workspace",
    icon: FolderKanban,
  },
  {
    title: "Backtest",
    href: "/backtest",
    icon: FlaskConical,
  },
  {
    title: "Forward Test",
    href: "/forwardtest",
    icon: Activity,
  },
  {
    title: "AI Analysis",
    href: "/ai",
    icon: Bot,
  },
  {
    title: "Visual Database",
    href: "/visual-database",
    icon: Images,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>

      <SidebarHeader className="border-b border-sidebar-border p-6">
        <h1 className="text-xl font-bold">
          ZIGFT Research
        </h1>

        <p className="text-xs text-sidebar-foreground/70">
          Trading Research Platform
        </p>
      </SidebarHeader>

      <SidebarContent>

        <SidebarMenu>

          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <SidebarMenuItem key={menu.title}>

                <SidebarMenuButton
                  render={
                    <Link href={menu.href}>
                      <Icon />
                      <span>{menu.title}</span>
                    </Link>
                  }
                />

              </SidebarMenuItem>
            );
          })}

        </SidebarMenu>

      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">

        <div className="rounded-xl border border-sidebar-border p-4">

          <p className="font-semibold">
            Research Mode
          </p>

          <p className="text-xs text-sidebar-foreground/70">
            ZIGFT v1.0
          </p>

        </div>

      </SidebarFooter>

    </Sidebar>
  );
}
