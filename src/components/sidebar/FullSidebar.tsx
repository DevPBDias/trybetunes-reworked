"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/assets/icons/logoTrybe.png";
import user from "@/assets/images/user.png";
import Link from "next/link";
import { ArrowLeftCircleIcon, Home, User2, Star, LogOut } from "lucide-react";
import { useUserContext } from "@/context/user-provider";
import { redirect, useRouter } from "next/navigation";

const COLOR_ICON = "#001400";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FullSidebar = ({ open, setOpen }: SidebarProps) => {
  const { userName, setUserName } = useUserContext();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    router.push("/");
  };

  const saveUser = async () => {
    const userLogin = await JSON.parse(
      localStorage.getItem("loggedUser") as any
    );
    if (userLogin) {
      const concatName = userLogin[0].firstName.concat(
        " ",
        userLogin[0].lastName
      );
      setUserName(concatName);
    } else {
      redirect("/");
    }
  };

  useEffect(() => {
    saveUser();
  }, []);

  return (
    <>
      <header>
        <section
          className={`container-full-sidebar ${open ? "" : "display-side"}`}
        >
          <div className="upper-section">
            <button
              className="btn-display"
              type="button"
              onClick={() => setOpen(!open)}
            >
              <ArrowLeftCircleIcon size={28} color={COLOR_ICON} />
            </button>
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
        </section>
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
      </header>
      <button className="logout-btn" onClick={handleLogout}>
        <LogOut size={28} color={COLOR_ICON} />
        <p>Sair</p>
      </button>
    </>
  );
};

export default FullSidebar;
