import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/search/SearchBar";
import "./search.scss";
import SearchList from "@/components/search/SearchList";

const SearchPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  return (
    <main className="main-search">
      <section className="container-search-date">
        <SearchBar />
        <DateAndWheater />
      </section>
      <h3>Resultado da pesquisa: {slug}</h3>
      <SearchList data={slug} />
    </main>
  );
};

export default SearchPage;
