import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
//import searchLogo from "./assets/searchLogo.svg";
import { ReactComponent as SearchLogo } from "./assets/searchLogo.svg";
import { ReactComponent as UnicorneLogo } from "./assets/unicornLogo.svg";
import { ReactComponent as Croix } from "./assets/croix.svg";

export default function Header({ search, setSearch }) {
  //const [search, setSearch] = useState();
  const navigate = useNavigate();
  let inputSearch;
  let eraseButton;
  useEffect(() => {
    inputSearch = document.querySelector("#inputSearch");
    eraseButton = document.querySelector(".eraseSearch");
    inputSearch.value != ""
      ? (eraseButton.style.marginRight = "10px")
      : eraseButton.style.removeProperty("margin-right");
  }, [search]);
  useEffect(() => {
    inputSearch = document.querySelector("#inputSearch");
    eraseButton = document.querySelector(".eraseSearch");
  }, []);

  function eraseText() {
    inputSearch = document.querySelector("#inputSearch");
    eraseButton = document.querySelector(".eraseSearch");
    inputSearch.value = "";
    setSearch("");
  }

  return (
    <header className="mainHeader">
      <div
        className="logo"
        onClick={() => {
          navigate("/");
          eraseText();
        }}
      >
        ulicorne.
      </div>
      <div className="searchBar">
        <button className="btnSearch">
          <SearchLogo />
        </button>
        <input
          className="inputSearch"
          type="text"
          placeholder="Search ..."
          onChange={(e) => setSearch(e.target.value)}
          id="inputSearch"
        />
        <div className="eraseSearch" onClick={eraseText}>
          <Croix />
        </div>
      </div>
      <div className="unicorne">
        <UnicorneLogo />
      </div>
    </header>
  );
}
