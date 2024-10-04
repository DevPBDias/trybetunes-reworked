import { Search } from "lucide-react";
import "./styles.scss";

const SearchBar = () => {
  return (
    <form className="form-searchbar">
      <fieldset>
        <input
          type="text"
          name="search"
          placeholder="Pesquise pelo seus artistas preferidos...."
        />
      </fieldset>
      <button type="submit">
        <Search size={24} color="#001400" />
      </button>
    </form>
  );
};

export default SearchBar;
