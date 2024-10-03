"use client";

import Image from "next/image";
import React from "react";
import logo from "@/assets/icons/logoTrybe.png";
import user from "@/assets/images/user.png";
import Link from "next/link";
import { ArrowLeftCircleIcon, Home, User2, Star, LogOut } from "lucide-react";

const COLOR_ICON = "#001400";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShortSidebar = ({ open, setOpen }: SidebarProps) => {
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
      <Link className="logout-btn" href="/">
        <LogOut size={28} color={COLOR_ICON} />
      </Link>
    </>
  );
};

export default ShortSidebar;
