import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
//import searchLogo from "./assets/searchLogo.svg";
import { ReactComponent as SearchLogo } from "./assets/searchLogo.svg";
import { ReactComponent as UnicorneLogo } from "./assets/unicornLogo.svg";

export default function Header({ setSearch }) {
  //const [search, setSearch] = useState();
  const navigate = useNavigate();
  return (
    <header className="mainHeader">
      <div className="logo" onClick={() => navigate("/")}>
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
        />
      </div>
      <div className="unicorne">
        <UnicorneLogo />
      </div>
    </header>
  );
}
