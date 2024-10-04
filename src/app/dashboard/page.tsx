import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";
import Image from "next/image";
import heroImg from "@/assets/images/main-hero.png";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Dashboard = () => {
  return (
    <main className="container-dashboard">
      <picture className="hero-container-image">
        <Image
          className="hero-image"
          src={heroImg}
          alt="main hero image"
          priority
        />
      </picture>
      <section className="text-container">
        <h1>O lugar onde descobre o que há de melhor no mundo da música</h1>
        <Link href="/dashboard/music">
          <p>Descubra</p>
          <ArrowUpRight size={24} color="#EBFFEB" />
        </Link>
      </section>
      <section className="container-seach-date">
        <SearchBar />
        <DateAndWheater />
      </section>
      Dashboard
    </main>
  );
};

export default Dashboard;
