"use client";

import useSize from "@/hooks/useSize";
import React from "react";
import Burger from "./Burger";
import Sidebar from "../sidebar";

const Navbar = () => {
  const windowsize = useSize();

  return <>{windowsize < 1200 ? <Burger /> : <Sidebar />}</>;
};

export default Navbar;
