import Image from "next/image";
import React from "react";
import logo from "@/assets/icons/logoTrybe.png";
import user from "@/assets/images/user.png";
import Link from "next/link";
import { ArrowLeftCircleIcon, Home, User2, Star, LogOut } from "lucide-react";

const COLOR_ICON = "#c0c4c0";

const FullSidebar = () => {
  return (
    <>
      <section>
        <div>
          <ArrowLeftCircleIcon size={36} color={COLOR_ICON} />
          <Image src={logo} alt="logo trybeTunes sidebar" />
        </div>
        <div>
          <Image src={user} alt="user image profile" />
          <p>Paulo Dias</p>
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
        <Link href="/">
          <LogOut size={28} color={COLOR_ICON} />
          <p>Sair</p>
        </Link>
      </nav>
    </>
  );
};

export default FullSidebar;
