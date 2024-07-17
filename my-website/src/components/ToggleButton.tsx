import { useState } from "react";

export default function ToggleButton() {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute(localStorage.theme)
  );

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <>
      <div
        className="toggle-wrapper mr-2"
        onClick={toggleTheme}
        style={{ fontSize: ".75rem" }}
      >
        <input className="toggle-checkbox" type="checkbox" />
        <div className="toggle-container">
          <div className="toggle-button">
            <div className="toggle-button-circles-container">
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
