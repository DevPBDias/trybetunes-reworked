"use client";

import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";
import { useState } from "react";
import "./profile.scss";
import user from "@/assets/images/user.png";
import Image from "next/image";
import { Clipboard, Save } from "lucide-react";

const ProfilePage = () => {
  const [firstName, setFirstName] = useState("Paul");
  const [lastName, setLastName] = useState("Days");
  const [email, setEmail] = useState("teste@teste.com");
  const [adress, setAdress] = useState("Rua 3, Quadra 19, número 22");

  return (
    <main className="main-profile">
      <section className="container-search-date">
        <SearchBar />
        <DateAndWheater />
      </section>
      <h3>Editar perfil</h3>
      <form className="container-form">
        <picture className="user-container-image">
          <Image className="user-image" src={user} alt="user image" priority />
        </picture>
        <section>
          <fieldset className="container-field">
            <label htmlFor="firstName">Nome</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
            />
          </fieldset>
          <fieldset className="container-field">
            <label htmlFor="lastName">Sobrenome</label>
            <input type="text" name="lastName" id="lastName" value={lastName} />
          </fieldset>
          <fieldset className="container-field">
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" id="email" value={email} />
          </fieldset>
          <fieldset className="container-field">
            <label htmlFor="adress">Endereço</label>
            <input type="text" name="adress" id="adress" value={adress} />
          </fieldset>
        </section>
        <section>
          <button className="btn-profile" type="button">
            <p>Limpar</p>
            <Clipboard size={24} color="#001400" />
          </button>
          <button className="btn-profile main-btn" type="button">
            <p>Salvar</p>
            <Save size={24} color="#EBFFEB" />
          </button>
        </section>
      </form>
    </main>
  );
};

export default ProfilePage;
