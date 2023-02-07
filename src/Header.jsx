import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
//import searchLogo from "./assets/searchLogo.svg";
import { ReactComponent as SearchLogo } from "./assets/searchLogo.svg";
import { ReactComponent as UnicorneLogo } from "./assets/unicornLogo.svg";
import { ReactComponent as Croix } from "./assets/croix.svg";
import { ReactComponent as FilterSVG } from "./assets/filter.svg";

import { dataLicornes } from "./data/dataLicornes.jsx";

import Filter from "./components/Filter/Filter";

export default function Header({
  search,
  setSearch,
  dataFiltered,
  setDataFiltered,
}) {
  //const [search, setSearch] = useState();
  const [dataSorted, setDataSorted] = useState(dataLicornes);
  const navigate = useNavigate();
  let inputSearch;
  let eraseButton;
  let toggleDiv = document.querySelector(".toggleFilter");
  let toggleBool = false;
  useEffect(() => {
    inputSearch = document.querySelector("#inputSearch");
    eraseButton = document.querySelector(".eraseSearch");
    inputSearch.value != ""
      ? (eraseButton.style.marginRight = "10px")
      : eraseButton.style.removeProperty("margin-right");
    // console.log("inputSearch");
    // console.log(inputSearch.value);

    const searchLower = search.toLowerCase().replaceAll(",", "");
    const searchTerms = searchLower.split(" ");
    setDataFiltered(
      dataSorted.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchLower) ||
          searchTerms.every((term) =>
            item.tags.some((tag) => tag.toLowerCase().includes(term))
          ) ||
          item.description.toLowerCase().includes(searchLower)
        );
      })
    );
    // console.log(dataFiltered);
  }, [search]);
  useEffect(() => {
    inputSearch = document.querySelector("#inputSearch");
    eraseButton = document.querySelector(".eraseSearch");
    toggleDiv = document.querySelector(".toggleFilter");
  }, []);
  // useEffect(() => {
  //   setSearch(search);
  // }, [dataSorted]);

  function eraseText() {
    inputSearch = document.querySelector("#inputSearch");
    eraseButton = document.querySelector(".eraseSearch");
    inputSearch.value = "";
    setSearch("");
  }

  function toggleFilter() {
    console.log("toggle");
    toggleBool
      ? (toggleDiv.style.height = "0px")
      : (toggleDiv.style.height = "169px");
    toggleBool
      ? (toggleDiv.style.marginBottom = "0px")
      : (toggleDiv.style.marginBottom = "20px");
    toggleBool = !toggleBool;
  }

  return (
    <header className="mainHeader">
      <div className="firstLineHeader">
        <div
          className="logo"
          onClick={() => {
            navigate("/");
            eraseText();
          }}
        >
          ulicorne.
        </div>
        <div className="searchBarAndFilter">
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
              autofocus
            />
            <div className="eraseSearch" onClick={eraseText}>
              <Croix />
            </div>
          </div>
          <button className="filterButton" onClick={toggleFilter}>
            <FilterSVG />
          </button>
        </div>
        <div className="unicorne">
          <UnicorneLogo />
        </div>
      </div>
      {/* <Filter dataLicornes={dataLicornes} setDataLicornes={setDataToDisplay} /> */}
      <div className="toggleFilter">
        <Filter dataFiltered={dataSorted} setDataFiltered={setDataSorted} />
      </div>
    </header>
  );
}
