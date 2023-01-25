import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Mosaiques.css";
//import { dataLicornes } from "./data/dataLicornes.jsx";

export default function Mosaiques({ dataLicornes }) {
  const navigate = useNavigate();
  return (
    <main className="mainMosaiques">
      {dataLicornes.map(({ name, logo, banner, description, tags }, index) => (
        <button
          className="mosaique"
          onClick={() => navigate("/" + name)}
          key={index}
        >
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
            {tags.map((e, index) => (
              <div className="tag" key={index}>
                {e}
              </div>
            ))}
          </div>
          <div className="descMosaique">{description}</div>
        </button>
      ))}
    </main>
  );
}
