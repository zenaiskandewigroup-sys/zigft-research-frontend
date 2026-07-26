"use client";

import MobileSidebar from "./mobile-sidebar";

export default function TopNavbar() {

    return (

        <header className="h-16 border-b border-zinc-800 bg-[#111827] flex items-center justify-between px-4 lg:px-6">

            <div className="flex items-center gap-3">

                <div className="lg:hidden">

                    <MobileSidebar/>

                </div>

                <h1 className="text-lg font-semibold text-white">

                    Dashboard

                </h1>

            </div>

            <div className="text-sm text-zinc-400">

                ZIGFT Research

            </div>

        </header>

    );

}
