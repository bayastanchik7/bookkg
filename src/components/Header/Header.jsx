import React from "react";
import "./header.css";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { RiAdminLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="headert">
          <NavLink to={"/"} >
          <h1>BOOKShop</h1>  
         </NavLink>
          </div>
          <div className="header-input">
            <input type="text" placeholder="Search here" />
            <CiSearch className="search" />
          </div>
          <div className="basket">
            <SlBasket className="sss" />
            <NavLink to={"/admin"}> <RiAdminLine className="admins"/> </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
