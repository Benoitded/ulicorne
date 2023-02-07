import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Mosaiques.css";
//import { dataLicornes } from "./data/dataLicornes.jsx";
import Filter from "./components/Filter/Filter";

export default function Mosaiques({ dataLicornes, setSearch }) {
  const [dataToDisplay, setDataToDisplay] = useState(dataLicornes);
  useEffect(() => {
    setDataToDisplay(dataLicornes);
  }, [dataLicornes]);

  const navigate = useNavigate();

  function searchTag(e) {
    e.stopPropagation(); //Don't click below
    //console.log(e.target.innerHTML);
    setSearch("tech");
  }
  //let dataToDisplay;
  //console.log(dataLicornes);
  if (!dataLicornes.length) {
    return (
      <div className="error">
        <div>
          I do not find any startup with this name. Please try something else.
        </div>
      </div>
    );
  }
  return (
    <main>
      {/* <Filter dataLicornes={dataToDisplay} setDataLicornes={setDataToDisplay} /> */}
      <div className="mainMosaiques">
        {dataLicornes.map(
          ({ name, logo, banner, description, tags }, index) => (
            <button
              className="mosaique"
              onClick={() => navigate("/" + name)}
              key={index}
            >
              <div className="bannerMosaique">
                <img src={banner} alt={"Banner of " + name} />
              </div>
              <div className="logoAnameMosaique">
                <img
                  src={logo}
                  alt={"Logo of " + name}
                  className="logoMosaique"
                />
                <div className="nameMosaique">{name}</div>
              </div>
              <div className="tags">
                {tags.map((e, index) => (
                  <div className="tag" key={index} onClick={searchTag}>
                    {e}
                  </div>
                ))}
              </div>
              <div className="descMosaique">{description}</div>
            </button>
          )
        )}
      </div>
    </main>
  );
}
