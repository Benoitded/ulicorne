import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Header from "./Header";
import Mosaiques from "./Mosaiques";
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Mosaiques />} />
            <Route path="/:unicorn" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
