import Sidebar from "@/components/sidebar";
import "./dashboard.scss";
import useSize from "@/hooks/useSize";
import Burger from "@/components/burger/Burger";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const windowsize = useSize();

  return (
    <main className="main-dashboard">
      {windowsize[0] < 1200 ? <Burger /> : <Sidebar />}
      {children}
    </main>
  );
}
