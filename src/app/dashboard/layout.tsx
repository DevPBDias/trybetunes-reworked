import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main-dashboard">
      <Sidebar />
      {children}
    </main>
  );
}
