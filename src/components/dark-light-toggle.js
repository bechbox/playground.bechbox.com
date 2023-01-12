import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

import "../styles/darkToggle.scss";
import { ReactComponent as SunIcon } from "../images/icons/regular/sun.svg";
import { ReactComponent as MoonIcon } from "../images/icons/regular/moon.svg";

export default function DarkLightToggle() {
  const [checked, setChecked] = useLocalStorage("checked", false);

  useEffect(() => {
    if (checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  function handleChange(e) {
    setChecked(e.target.checked);
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }

  return (
    <div className="darkmode">
      <input
        type="checkbox"
        id="darkmode-toggle"
        checked={checked}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="darkmode-toggle">
        <SunIcon className="sun" />
        <MoonIcon className="moon" />
      </label>
    </div>
  );
}
