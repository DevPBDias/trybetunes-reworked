import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";
import Image from "next/image";
import heroImg from "@/assets/images/main-hero.png";

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
      <section className="container-seach-date">
        <SearchBar />
        <DateAndWheater />
      </section>
      Dashboard
    </main>
  );
};

export default Dashboard;
