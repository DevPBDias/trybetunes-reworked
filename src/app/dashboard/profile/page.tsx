"use client";

import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";
import user from "@/assets/images/user-big.png";
import Image from "next/image";
import { Clipboard, Save } from "lucide-react";
import { profileSchema } from "@/schemas";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./profile.scss";
import { useRouter } from "next/navigation";
import { useMusicContext } from "@/context/music-provider";

type FormData = z.infer<typeof profileSchema>;

const ProfilePage = () => {
  const router = useRouter();
  const { setUserName } = useMusicContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(profileSchema),
  });

  const handleEdit = (data: FormData) => {
    localStorage.setItem("profile", JSON.stringify(data));
    const joinName = data.firstName.concat(" ", data.lastName);
    setUserName(joinName);
    if (isSubmitSuccessful) {
      reset({ email: "", firstName: "", lastName: "", address: "" });
    }
    router.push("/dashboard");
  };

  return (
    <main className="main-profile">
      <section className="container-search-date">
        <SearchBar />
        <DateAndWheater />
      </section>
      <h3>Editar perfil</h3>
      <form className="container-form" onSubmit={handleSubmit(handleEdit)}>
        <picture className="user-container-image">
          <Image
            className="user-image"
            src={user}
            alt="user image"
            quality={100}
            priority
          />
        </picture>
        <section className="container-inputs">
          <div className="container-row-inputs">
            <fieldset className="container-field">
              <label htmlFor="firstName">Nome</label>
              <input
                type="text"
                className={`${errors.firstName ? "error-border" : ""}`}
                {...register("firstName")}
                id="firstName"
              />
              {errors.firstName && (
                <span className="error-msg">{errors.firstName.message}</span>
              )}
            </fieldset>
            <fieldset className="container-field">
              <label htmlFor="lastName">Sobrenome</label>
              <input
                type="text"
                className={`${errors.lastName ? "error-border" : ""}`}
                {...register("lastName")}
                id="lastName"
              />
              {errors.lastName && (
                <span className="error-msg">{errors.lastName.message}</span>
              )}
            </fieldset>
          </div>
          <div className="container-row-inputs">
            <fieldset className="container-field">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                className={`${errors.email ? "error-border" : ""}`}
                {...register("email")}
                id="email"
              />
              {errors.email && (
                <span className="error-msg">{errors.email.message}</span>
              )}
            </fieldset>
            <fieldset className="container-field">
              <label htmlFor="adress">Endereço</label>
              <input
                type="text"
                className={`${errors.address ? "error-border" : ""}`}
                {...register("address")}
                id="adress"
              />
              {errors.address && (
                <span className="error-msg">{errors.address.message}</span>
              )}
            </fieldset>
          </div>
        </section>
        <section className="container-btns">
          <button
            className="btn-profile"
            type="button"
            onClick={() =>
              reset({ email: "", firstName: "", lastName: "", address: "" })
            }
          >
            <p>Limpar</p>
            <Clipboard size={24} color="#001400" />
          </button>
          <button className="btn-profile main-btn" type="submit">
            <p>Salvar</p>
            <Save size={24} color="#EBFFEB" />
          </button>
        </section>
      </form>
    </main>
  );
};

export default ProfilePage;
