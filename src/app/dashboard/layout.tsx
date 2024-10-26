import Navbar from "@/components/burger";
import "./dashboard.scss";
import { Suspense } from "react";
import Loader from "./loading";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<Loader />}>
      <main className="main-dashboard">
        <Navbar />
        {children}
      </main>
    </Suspense>
  );
}
