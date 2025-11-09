import Navbar from "@/components/Navbar";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto">
        <Navbar></Navbar>
      </div>
      {children}
    </>
  );
};

export default AuthLayout;
