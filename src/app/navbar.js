import React from "react";
import ThemeSwitch from "./theme-switcher";
import Image from "next/image";
import logo from "../assets/images/logo.svg";

export default (Navbar) => {
  return (
    <div className="flex items-center justify-between">
      <Image src={logo} alt="logo" width={35} height={35} />

      <div className="flex items-center justify-end">
        <ThemeSwitch />
      </div>
    </div>
  );
};
