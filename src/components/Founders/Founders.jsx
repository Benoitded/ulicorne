//import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Founders.css";

export default function Founders({ dataFounders }) {
  console.log(dataFounders);
  return (
    <main className="mainFounders">
      {dataFounders.map((e) => (
        <div>sa</div>
      ))}
      <div>found</div>
    </main>
  );
}
