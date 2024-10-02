import Image from "next/image";
import React from "react";
import navArrow from "@/assets/icons/google-icon.png";
import logo from "@/assets/icons/logoTrybe.png";
import Link from "next/link";

const FullSidebar = () => {
  return (
    <>
      <section>
        <div>
          <Image src={navArrow} alt="arrow to shrink or expand sidebar" />
          <Image src={logo} alt="logo trybeTunes sidebar" />
        </div>
        <div>
          <Image src={navArrow} alt="arrow to shrink or expand sidebar" />
          <p>Paulo Dias</p>
        </div>
      </section>
      <nav>
        <Link href="/dashboard">
          <Image src={navArrow} alt="arrow to shrink or expand sidebar" />
          <p>Home</p>
        </Link>
        <Link href="/dashboard/profile">
          <Image src={navArrow} alt="arrow to shrink or expand sidebar" />
          <p>Perfil</p>
        </Link>
        <Link href="/dashboard/favorites">
          <Image src={navArrow} alt="arrow to shrink or expand sidebar" />
          <p>Favoritos</p>
        </Link>
        <Link href="/">
          <Image src={navArrow} alt="arrow to shrink or expand sidebar" />
          <p>Sair</p>
        </Link>
      </nav>
    </>
  );
};

export default FullSidebar;
