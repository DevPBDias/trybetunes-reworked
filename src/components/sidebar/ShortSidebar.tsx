import Image from "next/image";
import React from "react";
import logo from "@/assets/icons/logoTrybe.png";
import user from "@/assets/images/user.png";
import Link from "next/link";
import { ArrowLeftCircleIcon, Home, User2, Star, LogOut } from "lucide-react";

const COLOR_ICON = "#c0c4c0";

const ShortSidebar = () => {
  return (
    <>
      <section>
        <div>
          <ArrowLeftCircleIcon size={28} color={COLOR_ICON} />
          <Image src={logo} alt="logo trybeTunes sidebar" />
        </div>
        <div>
          <Image src={user} alt="user image profile" />
        </div>
      </section>
      <nav>
        <Link href="/dashboard">
          <Home size={28} color={COLOR_ICON} />
        </Link>
        <Link href="/dashboard/profile">
          <User2 size={28} color={COLOR_ICON} />
        </Link>
        <Link href="/dashboard/favorites">
          <Star size={28} color={COLOR_ICON} />
        </Link>
        <Link href="/">
          <LogOut size={28} color={COLOR_ICON} />
        </Link>
      </nav>
    </>
  );
};

export default ShortSidebar;
