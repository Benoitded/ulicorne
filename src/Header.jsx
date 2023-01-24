import React, { useState, useEffect } from "react";
import "./Header.css";
//import searchLogo from "./assets/searchLogo.svg";
import { ReactComponent as SearchLogo } from "./assets/searchLogo.svg";
import { ReactComponent as UnicorneLogo } from "./assets/unicornLogo.svg";

export default function Header() {
  return (
    <header className="mainHeader">
      <div className="logo">ulicorne.</div>
      <div className="searchBar">
        <button className="btnSearch">
          <SearchLogo />
        </button>
        <input className="inputSearch" type="text" placeholder="Search ..." />
      </div>
      <div className="unicorne">
        <UnicorneLogo />
      </div>
    </header>
  );
}
