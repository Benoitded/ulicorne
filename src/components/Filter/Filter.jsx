import React, { useState, useEffect } from "react";
import "./Filter.css";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import website from "../../assets/website.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import { dataLicornes } from "../../data/dataLicornes";

const imageSources = {
  website: website,
  twitter: twitter,
  linkedin: linkedin,
};

const countryFlag = {
  France: "🇫🇷",
  Suisse: "🇨🇭",
};

let boolAlpha = true;

function sortFilter(e) {
  console.log(e);
  switch (e.target.id) {
    case "alphabetic":
      console.log("alphabetic sorting");
      //console.log(dataLicornes);
      if (boolAlpha) {
        dataLicornes.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      } else {
        dataLicornes.sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0;
        });
      }
      boolAlpha = !boolAlpha;
      console.log(dataLicornes);
      break;
    case "valuation.":
      console.log("valuation sorting");
      break;
    default:
      console.log("No filter");
  }
}

function plusPetitAuPlusGrand(data, a, b) {
  data.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}

export default function Filter({ dataLicornes, setDataLicornes }) {
  //   console.log("school.networks");
  //   console.log(school.networks);
  return (
    <div className="filterBox">
      <div className="titleFilter">filter the ulicornes.</div>
      <div className="allFilters">
        <div className="oneFilter">
          <div className="nameFilter">sort by</div>
          <button id="alphabetic" onClick={sortFilter}>
            alphabitic.
          </button>
          <button>creation date.</button>
          <button>valuation.</button>
          <button>money raised.</button>
        </div>
        <div className="oneFilter">
          <div className="nameFilter">sort by</div>
          <button id="alphabetic" onClick={sortFilter}>
            alphabitic.
          </button>
          <button>creation date.</button>
          <button>valuation.</button>
          <button>money raised.</button>
        </div>
      </div>
    </div>
  );
}
