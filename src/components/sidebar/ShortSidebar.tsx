"use client";

import Image from "next/image";
import React from "react";
import user from "@/assets/images/user.png";
import Link from "next/link";
import { ArrowLeftCircleIcon, Home, User2, Star, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { SidebarProps } from "@/types/user.types";

const COLOR_ICON = "#001400";

const ShortSidebar = ({ open, setOpen }: SidebarProps) => {
  const router = useRouter();

  const handleLogout: () => void = () => {
    localStorage.removeItem("loggedUser");
    router.push("/");
  };

  return (
    <>
      <section
        className={`container-short-sidebar ${open ? "display-side" : ""}`}
      >
        <div className="upper-section">
          <button
            className="btn-display"
            type="button"
            onClick={() => setOpen(!open)}
          >
            <ArrowLeftCircleIcon size={28} color={COLOR_ICON} />
          </button>
        </div>
        <div className="lower-section">
          <picture>
            <Image className="user" src={user} alt="user image profile" />
          </picture>
        </div>
      </section>
      <nav className="nav-short">
        <Link href="/dashboard">
          <Home size={28} color={COLOR_ICON} />
        </Link>
        <Link href="/dashboard/profile">
          <User2 size={28} color={COLOR_ICON} />
        </Link>
        <Link href="/dashboard/favorites">
          <Star size={28} color={COLOR_ICON} />
        </Link>
      </nav>
      <button className="logout-btn" onClick={handleLogout}>
        <LogOut size={28} color={COLOR_ICON} />
      </button>
    </>
  );
};

export default ShortSidebar;
