"use client";

import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";
import user from "@/assets/images/user-big.png";
import Image from "next/image";
import { Clipboard, Save } from "lucide-react";
import { registerSchema } from "@/schemas";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/user-provider";
import "./profile.scss";

type FormData = z.infer<typeof registerSchema>;

const ProfilePage = () => {
  const router = useRouter();
  const { setUserName } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const handleEdit = (data: FormData) => {
    localStorage.setItem("loggedUser", JSON.stringify(data));
    localStorage.setItem("trybetunes-users", JSON.stringify(data));
    const joinName = data.firstName.concat(" ", data.lastName);
    setUserName(joinName);
    if (isSubmitSuccessful) {
      reset({ email: "", firstName: "", lastName: "", password: "" });
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
              <label htmlFor="adress">Senha</label>
              <input
                type="text"
                className={`${errors.password ? "error-border" : ""}`}
                {...register("password")}
                id="adress"
              />
              {errors.password && (
                <span className="error-msg">{errors.password.message}</span>
              )}
            </fieldset>
          </div>
        </section>
        <section className="container-btns">
          <button
            className="btn-profile"
            type="button"
            onClick={() =>
              reset({ email: "", firstName: "", lastName: "", password: "" })
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
