import React from "react";
import Navbar from "./components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto">
        <Navbar />
      </div>
      {children}
    </>
  );
};

export default MainLayout;
