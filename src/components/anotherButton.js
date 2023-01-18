import React from "react";
import PropTypes from "prop-types";

import clipboard from "../images/icons/regular/clipboard-text.svg";
import arrowright from "../images/icons/regular/arrow-right.svg";
import "../styles/another-button.scss";

function getTextWidth(text, font) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  context.font = font || getComputedStyle(document.body).font;

  return context.measureText(text).width;
}

const AnotherButton = (props) => {
  const textWidth = parseInt(getTextWidth(props.label, "bold 18px Inter"));
  return (
    <>
      <a
        className="another-button"
        href="https://www.bechbox.com"
        target="_blank"
        rel="noreferrer"
        role="button"
        style={{
          width: textWidth + 100 + "px",
        }}
      >
        <div className="icon">
          <img src={clipboard} className="button-logo" alt="plan" />
        </div>
        <span style={{ width: textWidth + 2 + "px" }}>{props.label}</span>
        <div className="icon2">
          <img src={arrowright} className="button-more" alt="more" />
        </div>
      </a>
      <div>
        <div style={{ fontSize: "18px", fontWeight: "bold" }}>
          {props.label}
        </div>
        <div
          style={{
            width: parseInt(getTextWidth(props.label, "bold 18px Inter")),
            height: "80px",
            backgroundColor: "#ff0000",
          }}
        ></div>
      </div>
    </>
  );
};

AnotherButton.propTypes = {
  label: PropTypes.string,
};
export default AnotherButton;
