"use client";

import { Search } from "lucide-react";
import "./styles.scss";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "@/schemas";
import { Form } from "../form";

type SearchData = z.infer<typeof searchSchema>;

const SearchBar = () => {
  const router = useRouter();
  const searchForm = useForm<SearchData>({
    resolver: zodResolver(searchSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitSuccessful },
    reset,
  } = searchForm;

  const handleSearch = (data: SearchData) => {
    console.log(data, "clickou");

    if (isSubmitSuccessful) {
      reset({ search: "" });
    }
    router.push(`/dashboard/search/${data.search}`);
  };

  return (
    <FormProvider {...searchForm}>
      <form className="form-searchbar" onSubmit={handleSubmit(handleSearch)}>
        <Form.Field>
          <Form.Input
            type="text"
            name="search"
            placeholder="Pesquise pelos seus artistas favoritos..."
          />
          <Form.ErrorMessage field="search" />
        </Form.Field>
        <Form.Button type="submit">
          <Search size={24} color="#001400" />
        </Form.Button>
      </form>
    </FormProvider>
  );
};

export default SearchBar;
