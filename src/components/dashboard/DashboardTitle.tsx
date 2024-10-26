"use client";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

const DashboardTitle = () => {
  const router = useRouter();

  return (
    <section className="text-container">
      <h1>
        O lugar onde descobre o
        <br />
        que há de melhor no
        <br />
        mundo da música
      </h1>
      <button
        type="button"
        onClick={() => router.push("/dashboard/search/Michael")}
      >
        <p>Descubra</p>
        <ArrowUpRight size={24} color="#EBFFEB" />
      </button>
    </section>
  );
};

export default DashboardTitle;
