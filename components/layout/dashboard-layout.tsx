import AppSidebar from "./app-sidebar";
import TopNavbar from "./top-navbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-[#0F172A]">

            <AppSidebar />

            <div className="flex flex-col flex-1">

                <TopNavbar />

                <main className="flex-1 p-6">

                    {children}

                </main>

            </div>

        </div>
    );
}
