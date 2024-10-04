"use client";

import { Search } from "lucide-react";
import "./styles.scss";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const route = useRouter();

  return (
    <form className="form-searchbar">
      <fieldset>
        <input
          type="text"
          name="search"
          placeholder="Pesquise pelo seus artistas preferidos...."
        />
      </fieldset>
      <button type="button" onClick={() => route.push("/dashboard/search")}>
        <Search size={24} color="#001400" />
      </button>
    </form>
  );
};

export default SearchBar;
