//import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Founders.css";

import website from "../../assets/website.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import crunchbase from "../../assets/crunchbase.svg";
import wikipedia from "../../assets/wikipedia.svg";
import facebook from "../../assets/facebook.svg";

import { dataSchools } from "../../data/dataSchools.jsx";
import { dataExperience } from "../../data/dataSchools.jsx";
import { dataFounders } from "../../data/dataFounders.jsx";

import SchoolBox from "../../components/SchoolBox/SchoolBox";

const imageSources = {
  website: website,
  twitter: twitter,
  linkedin: linkedin,
  crunchbase: crunchbase,
  wikipedia: wikipedia,
  facebook: facebook,
};

export default function Founders({ selectedDataFounders }) {
  console.log("selectedDataFounders");
  console.log(selectedDataFounders);
  //   const school = dataSchools.filter(
  //     (item) => item.school === selectedDataFounders[0].school
  //   )[0];
  //   console.log("school");
  //   console.log(school);

  //const [listAlumnis, setListAlumnis] = useState();

  if (!selectedDataFounders) {
    return (
      <div className="mainFounders error">No founder to diplay so far.</div>
    );
  }
  return (
    <div className="mainFounders">
      {selectedDataFounders.map((e, index) => {
        console.log("eeee");
        console.log(e);
        return (
          <div className="founder" key={index}>
            <div className="firstLineFounder">
              <img src={e.photo} alt="" className="imgFounder" />
              <div className="rightFirstLineFounder">
                <div className="nameFounder">{e.name}</div>
                <div className="titleFounder">
                  {selectedDataFounders.length > 1 && "Co-"}Founder & {e.title}
                </div>
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
              <div className="educationsFounder">
                <div className="categorieFounder">Educations</div>
                {e.schools.map((e) => {
                  const school = dataSchools.filter(
                    (item) => item.school === e.name
                  )[0];
                  //   console.log("school");
                  //   console.log(school);
                  const hecFounders = dataFounders
                    .map((startup) => startup.founders)
                    .flat()
                    .filter((founder) =>
                      founder.schools.some((school) => school.name === e.name)
                    );
                  return (
                    <div className="educationFounder">
                      {school ? (
                        <SchoolBox school={school} listAlumnis={hecFounders} />
                      ) : null}
                      {school ? (
                        <img
                          src={school.logo}
                          alt={"Logo of " + school.fullName}
                          className="logoSchool"
                        />
                      ) : (
                        <div className="noSchool" />
                      )}
                      <div className="descSchool">
                        {school ? (
                          <div className="nameSchool">{school.fullName}</div>
                        ) : (
                          <div className="nameSchool">{e.name}</div>
                        )}
                        <div>{e.master}</div>
                        <div>{e.graduateYear}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="educationsFounder">
                <div className="categorieFounder">Experiences</div>
                {e.experiences.map((e) => {
                  const experience = dataSchools.filter(
                    (item) => item.school === e.name
                  )[0];
                  const hecFounders = dataFounders
                    .map((startup) => startup.founders)
                    .flat()
                    .filter((founder) =>
                      founder.schools.some(
                        (experience) => experience.name === e.name
                      )
                    );
                  return (
                    <div className="educationFounder">
                      {experience ? (
                        <SchoolBox
                          school={experience}
                          listAlumnis={hecFounders}
                        />
                      ) : null}
                      {experience ? (
                        <img
                          src={experience.logo}
                          alt={"Logo of " + experience.fullName}
                          className="logoSchool"
                        />
                      ) : (
                        <div className="noSchool" />
                      )}
                      <div className="descSchool">
                        {experience ? (
                          <div className="nameSchool">
                            {experience.fullName}
                          </div>
                        ) : (
                          <div className="nameSchool">{e.name}</div>
                        )}
                        <div>{e.master}</div>
                        <div>{e.graduateYear}</div>
                      </div>
                    </div>
                  );
                })}
                {/* <div className="experienceFounder">e</div> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
