import React from "react";
import PropTypes from "prop-types";

import clipboard from "../images/icons/regular/clipboard-text.svg";
import arrowright from "../images/icons/regular/arrow-right.svg";
import "../styles/button.scss";

function getTextWidth(text, font) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  context.font = font || getComputedStyle(document.body).font;

  return context.measureText(text).width;
}

const Button = (props) => {
  return (
    <a
      className="button"
      href="https://www.bechbox.com"
      target="_blank"
      rel="noreferrer"
      role="button"
      style={{ width: parseInt(getTextWidth(props.label) * 1.5 + 90) + "px" }}
    >
      <div className="icon">
        <img src={clipboard} className="button-logo" alt="plan" />
      </div>
      <span>{props.label}</span>
      <div className="icon2">
        <img src={arrowright} className="button-more" alt="more" />
      </div>
    </a>
  );
};

Button.propTypes = {
  label: PropTypes.string,
};
export default Button;
