import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";
import Image from "next/image";
import heroImg from "@/assets/images/main-hero.png";
import DashboardTitle from "@/components/dashboard/DashboardTitle";
import SlicedAlbumsList from "@/components/dashboard/SlicedAlbumsList";

const Dashboard = () => {
  return (
    <main className="container-dashboard">
      <Image
        className="hero-dashboard"
        src={heroImg}
        alt="main hero image"
        style={{ objectFit: "cover" }}
        fill
        quality={100}
        priority
      />
      <section className="container-content">
        <section className="container-seach-date">
          <SearchBar />
          <DateAndWheater />
        </section>
        <DashboardTitle />
        <section className="container-musics">
          <h3>Descubra novas músicas todo dia</h3>
          <SlicedAlbumsList />
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
