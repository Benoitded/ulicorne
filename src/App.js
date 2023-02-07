import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./Header";
import Mosaiques from "./Mosaiques";
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./Footer";

import { dataLicornes } from "./data/dataLicornes.jsx";

export default function App() {
  const [search, setSearch] = useState("");
  const [dataFiltered, setDataFiltered] = useState(dataLicornes);
  useEffect(() => {
    const searchLower = search.toLowerCase().replaceAll(",", "");
    const searchTerms = searchLower.split(" ");
    // setDataFiltered(
    //   dataLicornes.filter((item) => {
    //     return (
    //       item.name.toLowerCase().includes(searchLower) ||
    //       searchTerms.every((term) =>
    //         item.tags.some((tag) => tag.toLowerCase().includes(term))
    //       ) ||
    //       item.description.toLowerCase().includes(searchLower)
    //     );
    //   })
    // );
    console.log(dataFiltered);
  }, [search]);
  return (
    <div className="App">
      <Router>
        <Header
          search={search}
          setSearch={setSearch}
          dataFiltered={dataFiltered}
          setDataFiltered={setDataFiltered}
        />
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<Mosaiques dataLicornes={dataFiltered} />}
            />
            <Route
              path="/:unicorn"
              element={<Dashboard setSearch={setSearch} />}
            />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
