import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";

const Dashboard = () => {
  return (
    <main className="container-dashboard">
      Dashboard
      <section className="container-seach-date">
        <SearchBar />
        <DateAndWheater />
      </section>
    </main>
  );
};

export default Dashboard;
