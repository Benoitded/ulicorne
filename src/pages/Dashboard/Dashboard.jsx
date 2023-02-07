import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { dataLicornes } from "../../data/dataLicornes.jsx";
import { dataFounders } from "../../data/dataFounders.jsx";
import Sumup from "../../components/Sumup/Sumup";
import Chartboard from "../../components/Chartboard/Chartboard";
import Founders from "../../components/Founders/Founders";

export default function Dashboard() {
  const location = useLocation();
  let unicorn = location.pathname.substring(1).replaceAll("%20", " ");
  //   console.log("unicorn");
  //   console.log(unicorn);
  const [contentDashboard, setContentDashboard] = useState(
    dataLicornes.filter((item) => item.name === unicorn)[0]
  );
  const [founders, setFounders] = useState();
  const [raised, setRaised] = useState();
  const filteredFounders = dataFounders.filter(
    (item) => item.startup === unicorn
  )[0];
  if (filteredFounders && filteredFounders.raised !== raised)
    setRaised(filteredFounders.raised);
  console.log("raised");
  console.log(contentDashboard.raised);
  if (filteredFounders && filteredFounders.founders !== founders)
    setFounders(filteredFounders.founders);

  return (
    <main className="mainDashboard">
      <Sumup element={contentDashboard} />
      <Chartboard raised={contentDashboard.raised} />
      <Founders selectedDataFounders={founders} />
    </main>
  );
}
