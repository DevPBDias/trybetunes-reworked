"use client";

import { Search } from "lucide-react";
import "./styles.scss";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "@/schemas";
import { useMusicContext } from "@/context/music-provider";

type FormData = z.infer<typeof searchSchema>;

const SearchBar = () => {
  const { setSearchedName } = useMusicContext();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(searchSchema),
  });

  const handleSearch = (data: FormData) => {
    setSearchedName(data.search);
    console.log("clickou");
    if (isSubmitSuccessful) {
      reset({ search: "" });
    }
    router.push("/dashboard/search");
  };

  return (
    <form className="form-searchbar" onSubmit={handleSubmit(handleSearch)}>
      <fieldset>
        <input
          className={`${errors.search ? "error-border" : ""}`}
          type="text"
          {...register("search")}
          placeholder="Pesquise pelo seus artistas preferidos...."
        />
        {errors.search && (
          <span className="error-msg">{errors.search.message}</span>
        )}
      </fieldset>
      <button type="submit">
        <Search size={24} color="#001400" />
      </button>
    </form>
  );
};

export default SearchBar;
