import React, { useState, useEffect } from "react";
import "./Filter.css";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import website from "../../assets/website.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import { dataLicornes } from "../../data/dataLicornes";

const imageSources = {
  website: website,
  twitter: twitter,
  linkedin: linkedin,
  facebook: facebook,
};

const countryFlag = {
  France: "🇫🇷",
  Suisse: "🇨🇭",
};

let boolAlpha = true;

// function sortFilter(setDataFiltered) {
//   console.log("googo");
//   if (boolAlpha) {
//     setDataFiltered(
//       dataLicornes.sort(function (a, b) {
//         return a.name.localeCompare(b.name);
//       })
//     );
//   } else {
//     setDataFiltered(
//       dataLicornes.sort(function (a, b) {
//         return b.name.localeCompare(a.name);
//       })
//     );
//   }
//   boolAlpha = !boolAlpha;
//   console.log(dataLicornes);
// }

function ascending(setDataFiltered) {
  console.log("ascending");
  setDataFiltered(
    dataLicornes.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    })
  );
}

export default function Filter({ dataFiltered, setDataFiltered }) {
  useEffect(() => {
    console.log("dataFiltered");
    console.log(dataFiltered);
  }, [dataFiltered]);

  function sortFilter(e) {
    console.log(e);
    switch (e.target.id) {
      case "alphabetic":
        console.log("alphabetic sorting");
        //console.log(dataLicornes);
        if (boolAlpha) {
          setDataFiltered(
            dataLicornes.sort(function (a, b) {
              return a.name.localeCompare(b.name);
            })
          );
        } else {
          setDataFiltered(
            dataLicornes.sort(function (a, b) {
              return b.name.localeCompare(a.name);
            })
          );
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
  return (
    <div className="filterBox">
      <div className="titleFilter">filter the ulicornes.</div>
      <div className="allFilters">
        <div className="oneFilter">
          <div className="nameFilter">sort by</div>
          <button id="alphabetic" onClick={sortFilter}>
            alphabitic.
          </button>
          <button onClick={sortFilter}>creation date.</button>
          <button>valuation.</button>
          <button>money raised.</button>
        </div>
        <div className="oneFilter">
          <div className="nameFilter">founders' school.</div>
          <button id="alphabetic" onClick={sortFilter}>
            HEC.
          </button>
          <button>ESSEC.</button>
          <button>INSEAD.</button>
          <button>money raised.</button>
        </div>
      </div>
    </div>
  );
}
