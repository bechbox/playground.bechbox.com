import React from "react";
import DarkLightToggle from "./dark-light-toggle";

import "../styles/index.scss";

export default function FrontPage() {
  return (
    <div className="frontpage">
      <div className="inner">
        <div className="header">
          <div className="logo"></div>
          <div className="theme-switcher">
            <DarkLightToggle />
          </div>
        </div>
        <div>
          <h1>playground</h1>
        </div>
      </div>
    </div>
  );
}
