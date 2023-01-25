//import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Founders.css";

import website from "../../assets/website.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import crunchbase from "../../assets/crunchbase.svg";
import wikipedia from "../../assets/wikipedia.svg";

import { dataSchools } from "../../data/dataSchools.jsx";

const imageSources = {
  website: website,
  twitter: twitter,
  linkedin: linkedin,
  crunchbase: crunchbase,
  wikipedia: wikipedia,
};

export default function Founders({ dataFounders }) {
  console.log("dataFounders");
  console.log(dataFounders);
  //   const school = dataSchools.filter(
  //     (item) => item.school === dataFounders[0].school
  //   )[0];
  //   console.log("school");
  //   console.log(school);
  if (!dataFounders) {
    return (
      <div className="mainFounders error">No founder to diplay so far.</div>
    );
  }
  return (
    <div className="mainFounders">
      {dataFounders.map((e, index) => {
        const school = dataSchools.filter(
          (item) => item.school === e.school
        )[0];
        return (
          <div className="founder" key={index}>
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
                <img
                  src={school.logo}
                  alt={"Logo of " + school.fullName}
                  className="logoSchool"
                />
                <div className="descSchool">
                  <div className="nameSchool">{school.fullName}</div>
                  <div>{e.master}</div>
                  <div>{e.graduateYear}</div>
                </div>
              </div>
              {/* <div className="experienceFounder">e</div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
