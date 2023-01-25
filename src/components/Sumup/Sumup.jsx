import React, { useState, useEffect } from "react";
import "./Sumup.css";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import website from "../../assets/website.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";

const imageSources = {
  website: website,
  twitter: twitter,
  linkedin: linkedin,
};

export default function Sumup({ element }) {
  return (
    <div className="mosaique dashboard">
      <div className="bannerMosaique">
        <img src={element.banner} alt={"Banner of " + element.name} />
      </div>
      <div className="logoAnameMosaique">
        <img
          src={element.logo}
          alt={"Logo of " + element.name}
          className="logoMosaique"
        />
        <div className="nameMosaique">{element.name}</div>
      </div>
      <div className="tags">
        {element.tags.map((e, index) => (
          <div className="tag" key={index}>
            {e}
          </div>
        ))}
      </div>
      <div className="descMosaique">{element.description}</div>
      <div className="listNetworks">
        {Object.keys(element.networks).map((key, index) => (
          <a
            href={element.networks[key]}
            target="_blank"
            className="networks"
            key={index}
          >
            <img src={imageSources[key]} alt="" className="logoNetworks" />
            {element.networks[key]}
          </a>
        ))}
      </div>
    </div>
  );
}
