import { useState, useEffect } from "react";

export default function ToggleButton() {
  // Initialize theme based on localStorage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    // Apply the theme on component mount and when theme changes
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save theme to localStorage
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <>
      <div
        className="toggle-wrapper mr-2"
        onClick={toggleTheme}
        style={{ fontSize: ".75rem" }}
      >
        <input
          className="toggle-checkbox"
          type="checkbox"
          checked={theme === "dark"}
          readOnly
        />
        <div className="toggle-container">
          <div className="toggle-button">
            <div className="toggle-button-circles-container">
              {/* Toggle button circles */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
