import React from "react";
import menu_icon from "../../assets/menu.svg";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="nav-left flex items-center py-[10px] px-[2%] justify-between bg-black sticky top-0 shadow-md z-[10]">
      <div className="flex items-center">
        <img src={menu_icon} alt="menu-icon" className="w-[22px] mr-[25px] lg:flex hidden" onClick={() => setSidebar((prev) => (prev === false ? true : false))} />
        <Link to="/">
          <img src={logo} alt="logo" className="lg:w-[40px] w-[30px]" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
