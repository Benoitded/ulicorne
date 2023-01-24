import React, { useState, useEffect } from "react";
import "./Mosaiques.css";
import { dataLicornes } from "./data/dataLicornes.jsx";

export default function Mosaiques() {
  return (
    <main className="mainMosaiques">
      {dataLicornes.map(({ name, logo, banner, description, tags }) => (
        <a href="" className="mosaique">
          <div className="bannerMosaique">
            <img src={banner} alt={"Banner of " + { name }} />
          </div>
          <div className="logoAnameMosaique">
            <img
              src={logo}
              alt={"Logo of " + { name }}
              className="logoMosaique"
            />
            <div className="nameMosaique">{name}</div>
          </div>
          <div className="tags">
            {tags.map((e) => (
              <div className="tag">{e}</div>
            ))}
          </div>
          <div className="descMosaique">{description}</div>
        </a>
      ))}
    </main>
  );
}
