import React, { useState, useEffect } from "react";
import "./Footer.css";
//import searchLogo from "./assets/searchLogo.svg";

export default function Footer() {
  return (
    <footer className="mainFooter">
      <div className="leftFooter">
        <div>
          <a
            href="https://twitter.com/benoitded"
            target="_blank"
            className="linkFooter"
          >
            contact.
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/benoitded"
            target="_blank"
            className="linkFooter"
          >
            propose update.
          </a>
        </div>
        <div>
          ulicorne is a free tool to analyse, compare and get updates about all
          french unicorn startups.
        </div>
      </div>
      <div className="rightFooter">
        <div>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/Benoitded"
            target="_blank"
            className="linkFooter"
          >
            Benoît
          </a>
        </div>
      </div>
    </footer>
  );
}
