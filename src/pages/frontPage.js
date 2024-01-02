import React from "react";
import DarkLightToggle from "../components/dark-light-toggle";

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
        <div className="frontpage-main">
          <div className="frontpage-content">
            <div className="frontpage-content-inner">
              <h1>code / UI experiments</h1>
              <a className="playground-card" href="/tray">
                <div className="playground-card-content">
                  <div className="playground-card-title">
                    Simple mobile tray
                  </div>
                  <div className="playground-card-description">
                    Making mobile websites feel more native
                  </div>
                </div>
              </a>

              <a className="playground-card" href="/blur-card">
                <div className="playground-card-content">
                  <div className="playground-card-title">Blur hover card</div>
                  <div className="playground-card-description">
                    Background blur on mouseover. Inspired by Linear
                  </div>
                </div>
              </a>
              <a className="playground-card" href="/the-button">
                <div className="playground-card-content">
                  <div className="playground-card-title">
                    Pretty cool button
                  </div>
                  <div className="playground-card-description">
                    Inspired by Coffee
                  </div>
                </div>
              </a>
              <a className="playground-card" href="/another-button">
                <div className="playground-card-content">
                  <div className="playground-card-title">Another button</div>
                  <div className="playground-card-description">
                    In reply to frostin.dev
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
