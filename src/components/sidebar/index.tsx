import React from "react";
import FullSidebar from "./FullSidebar";
import ShortSidebar from "./ShortSidebar";

const Sidebar = () => {
  return (
    <aside>
      <FullSidebar />
      <ShortSidebar />
    </aside>
  );
};

export default Sidebar;
