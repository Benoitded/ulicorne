import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { dataLicornes } from "../../data/dataLicornes.jsx";

export default function Dashboard() {
  const location = useLocation();
  let unicorn = location.pathname.substring(1);
  console.log(unicorn);
  const [contentMenu, setContentMenu] = useState(
    dataLicornes.filter((item) => item.name === unicorn)[0]
  );
  setInterval(function () {
    console.log(contentMenu);
  }, 1000);

  return (
    <header className="mainHeader">
      <div>{unicorn}</div>
      <div>{contentMenu.description}</div>
    </header>
  );
}
