"use client";

import {
    Menu,
    LayoutDashboard,
    Briefcase,
    LineChart,
    FlaskConical,
    PlayCircle,
    Image,
    Bot,
    Settings,
} from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

const menus = [
    { title: "Dashboard", icon: LayoutDashboard },
    { title: "Workspace", icon: Briefcase },
    { title: "Trading Systems", icon: LineChart },
    { title: "Backtest", icon: FlaskConical },
    { title: "Forward Test", icon: PlayCircle },
    { title: "Visual Database", icon: Image },
    { title: "AI Analysis", icon: Bot },
    { title: "Settings", icon: Settings },
];

export default function MobileSidebar() {
    return (
        <Sheet>
            <SheetTrigger>

                <Menu className="w-6 h-6 text-white"/>

            </SheetTrigger>

            <SheetContent
                side="left"
                className="w-72 bg-[#0B1220] border-zinc-800 text-white"
            >

                <div className="font-bold text-xl mb-8">

                    ZIGFT Research

                </div>

                <div className="space-y-2">

                    {menus.map((item) => (

                        <button
                            key={item.title}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-3 hover:bg-zinc-800"
                        >

                            <item.icon size={18}/>

                            {item.title}

                        </button>

                    ))}

                </div>

            </SheetContent>

        </Sheet>
    );
}
