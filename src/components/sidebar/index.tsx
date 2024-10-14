"use client";

import { useState } from "react";
import FullSidebar from "./FullSidebar";
import ShortSidebar from "./ShortSidebar";
import "./styles.scss";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <aside>
      {open ? (
        <FullSidebar open={open} setOpen={setOpen} />
      ) : (
        <ShortSidebar open={open} setOpen={setOpen} />
      )}
    </aside>
  );
};

export default Sidebar;
