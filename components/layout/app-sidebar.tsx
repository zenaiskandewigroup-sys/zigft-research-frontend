"use client";

import {
    LayoutDashboard,
    Briefcase,
    LineChart,
    FlaskConical,
    PlayCircle,
    Image,
    Bot,
    Settings,
} from "lucide-react";

const menus = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Workspace",
        icon: Briefcase,
    },
    {
        title: "Trading Systems",
        icon: LineChart,
    },
    {
        title: "Backtest",
        icon: FlaskConical,
    },
    {
        title: "Forward Test",
        icon: PlayCircle,
    },
    {
        title: "Visual Database",
        icon: Image,
    },
    {
        title: "AI Analysis",
        icon: Bot,
    },
    {
        title: "Settings",
        icon: Settings,
    },
];

export default function AppSidebar() {
    return (
        <aside className="w-64 border-r border-zinc-800 bg-[#0B1220] text-white hidden lg:flex flex-col">
            <div className="p-6 font-bold text-xl">
                ZIGFT Research
            </div>

            <nav className="flex flex-col gap-1 px-3">
                {menus.map((item) => (
                    <button
                        key={item.title}
                        className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-zinc-800 transition"
                    >
                        <item.icon size={18} />

                        {item.title}
                    </button>
                ))}
            </nav>
        </aside>
    );
}
