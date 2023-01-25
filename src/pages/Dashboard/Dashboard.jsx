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
  console.log("unicorn");
  console.log(unicorn);
  const [contentDashboard, setContentDashboard] = useState(
    dataLicornes.filter((item) => item.name === unicorn)[0]
  );
  console.log("contentDashboard");
  console.log(contentDashboard);

  return (
    <main className="mainDashboard">
      <Sumup element={contentDashboard} />
      <Chartboard />
      <Founders dataFounders={dataFounders} />
      <div>{unicorn}</div>
      <div>{contentDashboard.description}</div>
    </main>
  );
}
