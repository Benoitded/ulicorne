import React, { useState, useEffect } from "react";
import "./SchoolBox.css";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import website from "../../assets/website.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";

const imageSources = {
  website: website,
  twitter: twitter,
  linkedin: linkedin,
};

const countryFlag = {
  France: "🇫🇷",
  Suisse: "🇨🇭",
};

export default function SchoolBox({ school, listAlumnis }) {
  //   console.log("school.networks");
  //   console.log(school.networks);
  return (
    <div className="schoolBox">
      <div className="firstLineSchoolBox">
        <img
          src={school.logo}
          alt={"Logo of " + school.fullName}
          className="logoSchool"
        />
        <div className="descSchool boxSchool">
          <div className="nameSchool">{school.fullName}</div>
          {school.type ? <div className="tag">{school.type}</div> : null}
          <div className="lastLineDescSchoolBox">
            <div>
              {countryFlag[school.country]}&nbsp;
              {school.country}, {school.city}
            </div>
            <div className="networksFounder">
              {Object.keys(school.networks || {}).map((network, index) => (
                <a
                  href={school.networks[network]}
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
      </div>
      <div className="secondLineSchoolBox">
        <div className="alumnisSchoolBox">Alumnis:</div>
        <div className="picturesSchoolBox">
          {listAlumnis.map((e) => (
            <img
              src={e.photo}
              alt={"Logo of " + e.name}
              className="pictureSchoolBox"
              title={"Photo of " + e.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
