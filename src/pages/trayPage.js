import React, { useState } from "react";
import "../styles/tray-page.scss";
import clipboard from "../images/icons/regular/clipboard-text.svg";

export default function TrayPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="tray-page">
      <div className="tray-open">
        <button className="tray-button" onClick={toggleMenu}>
          Open
        </button>
      </div>
      <div
        className={`menu ${isMenuOpen ? "open" : "closed"}`}
        onClick={toggleMenu}
      >
        <div className="menu-backdrop"></div>
        <div className="menu-overlay">
          <div className="menu-content">
            <div className="menu-header">
              <h3>Options</h3>
            </div>
            <div className="menu-items">
              <a className="menu-item" href="https://www.bechbox.com">
                <img src={clipboard} alt="icon" className="menu-item-icon" />
                Portfolio
              </a>
              <a className="menu-item" href="https://www.bechbox.com">
                <img src={clipboard} alt="icon" className="menu-item-icon" />
                Portfolio
              </a>
              <a className="menu-item" href="https://www.bechbox.com">
                <img src={clipboard} alt="icon" className="menu-item-icon" />
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
