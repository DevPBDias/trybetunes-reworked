import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/search/SearchBar";
import FavoriteList from "@/components/favorites/FavoriteList";
import "./favorites.scss";

const FavoritePage = () => {
  return (
    <main className="main-favorites">
      <section className="container-search-date">
        <SearchBar />
        <DateAndWheater />
      </section>
      <FavoriteList />
    </main>
  );
};

export default FavoritePage;
