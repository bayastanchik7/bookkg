import React, { useState } from "react";
import "./header.css";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { RiAdminLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useBookContext } from "../../context/BookContext";

const Header = ({ handleSearch }) => {
  let { product } = useBookContext();

  const [book, setBook] = useState('');
  const [searching, setSearching] = useState([]);

  function handleSearchData() {
    let res = product.filter((item) => item.name.toLowerCase().includes(book.toLowerCase()));
    setSearching(res);
  }

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="headert">
            <NavLink to={"/"}>
              <h1>BOOKShop</h1>
            </NavLink>
          </div>
          <div className="header-input">
            <input
              type="text"
              placeholder="Search here"
              value={book}
              onChange={(e) => {
                setBook(e.target.value);
                handleSearchData();
              }}
            />
            <button className="search" onClick={handleSearchData}>
              <CiSearch />
            </button>
          </div>
          <div className="basket">
            <SlBasket className="sss" />
            <NavLink to={"/admin"}>
              <RiAdminLine className="admins" />
            </NavLink>
          </div>
        </div>
      </div>
      {searching.length > 0 && (
        <div className="search-results">
          <ul>
            {searching.map((book) => (
              <li key={book.id}>
                <img src={book.image} alt={book.name} />
                <span>{book.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
