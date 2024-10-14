"use client";

import { useUserContext } from "@/context/user-provider";
import { Home, Menu, Star, User2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/assets/icons/logoTrybe.png";
import user from "@/assets/images/user.png";

const COLOR_ICON = "#001400";

const Burger = () => {
  const { userName, setUserName } = useUserContext();
  const [open, setOpen] = useState<boolean>(false);

  const saveUser = async () => {
    const userLogin = await JSON.parse(
      localStorage.getItem("loggedUser") as any
    );
    if (userLogin) {
      const concatName = userLogin.firstName.concat(" ", userLogin.lastName);
      setUserName(concatName);
    }
  };

  useEffect(() => {
    saveUser();
  }, []);

  return (
    <header className="burger-container">
      {open ? (
        <nav className="simple-nav">
          <picture>
            <Image
              className="logo"
              src={logo}
              alt="logo trybeTunes sidebar"
              priority
            />
          </picture>
          <button
            className="container-turnon"
            type="button"
            onClick={() => setOpen(!open)}
          >
            <Menu size={28} color={COLOR_ICON} />
          </button>
        </nav>
      ) : (
        <section className="container-header-mobile">
          <div className="container-turnoff">
            <button type="button" onClick={() => setOpen(!open)}>
              <X size={28} color={COLOR_ICON} />
            </button>
          </div>
          <div className="upper-section">
            <picture>
              <Image
                className="logo"
                src={logo}
                alt="logo trybeTunes sidebar"
                priority
              />
            </picture>
          </div>
          <div className="lower-section">
            <picture>
              <Image className="user" src={user} alt="user image profile" />
            </picture>
            <p>{userName === "" ? "Visitante" : userName}</p>
          </div>
          <nav>
            <Link href="/dashboard">
              <Home size={28} color={COLOR_ICON} />
              <p>Home</p>
            </Link>
            <Link href="/dashboard/profile">
              <User2 size={28} color={COLOR_ICON} />
              <p>Perfil</p>
            </Link>
            <Link href="/dashboard/favorites">
              <Star size={28} color={COLOR_ICON} />
              <p>Favoritos</p>
            </Link>
          </nav>
        </section>
      )}
    </header>
  );
};

export default Burger;
