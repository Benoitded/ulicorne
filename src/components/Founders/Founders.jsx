//import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Founders.css";

import website from "../../assets/website.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import crunchbase from "../../assets/crunchbase.svg";

const imageSources = {
  website: website,
  twitter: twitter,
  linkedin: linkedin,
  crunchbase: crunchbase,
};

export default function Founders({ dataFounders }) {
  console.log(dataFounders);

  return (
    <main className="mainFounders">
      {dataFounders.map((e) => (
        <div className="founder">
          <div className="firstLineFounder">
            <img src={e.photo} alt="" className="imgFounder" />
            <div className="rightFirstLineFounder">
              <div className="nameFounder">{e.name}</div>
              <div className="titleFounder">Co-Founder & {e.title}</div>
              <div className="networksFounder">
                {Object.keys(e.networks || {}).map((network, index) => (
                  <a
                    href={e.networks[network]}
                    className="networkFounder"
                    key={index}
                    target="_blank"
                  >
                    <img src={imageSources[network]} alt={network} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="secondLineFounder">
            <div className="educationFounder">
              ezergr yre y ey re ree atr t ret erg rze zerb er brteb reb er{" "}
            </div>
            <div className="experienceFounder">e</div>
          </div>
        </div>
      ))}
    </main>
  );
}
