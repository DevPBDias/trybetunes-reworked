import Navbar from "@/components/burger";
import "./dashboard.scss";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main-dashboard">
      <Navbar />
      {children}
    </main>
  );
}
