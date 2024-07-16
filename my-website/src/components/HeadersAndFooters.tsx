import { useState, useEffect } from "react";

import headshot from "../assets/headshot.png";
import githubDark from "../assets/githubDark.svg";
import githubLight from "../assets/githubLight.svg";
import LIDark from "../assets/LIDark.svg";
import LILight from "../assets/LILight.svg";
import ToggleButton from "./ToggleButton";

function useTheme() {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-bs-theme")
  );

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-bs-theme") {
          setTheme(document.documentElement.getAttribute("data-bs-theme"));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-bs-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return theme;
}

function currentTheme() {
  const theme = document.documentElement.getAttribute("data-bs-theme");
  return theme;
}

function DarkModeToggle() {
  const toggleTheme = () => {
    const newTheme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", newTheme);
  };

  return (
    <div className="toggle-button-wrapper" onClick={toggleTheme}>
      <ToggleButton />
    </div>
  );
}

export function Headers() {
  const headshotImage = (
    <img
      style={{
        borderRadius: "50%",
        width: 50,
        height: 50,
        display: "block",
      }}
      src={headshot}
    />
  );

  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "CV",
      url: "/CV",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  const NavBar = (
    <header className="header container w-50 p-3">
      <nav className="navbar navbar-expand bg-body">
        <div className="container-fluid">
          <span>{headshotImage}</span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link" href={link.url}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );

  return <>{NavBar}</>;
}

export function Footers() {
  const theme = useTheme(); // Use the custom hook to get the current theme
  const ghImageSrc = theme === "dark" ? githubLight : githubDark; // Update image source based on theme
  const gh = (
    <img
      style={{
        width: 25,
        height: 25,
        display: "block",
      }}
      src={ghImageSrc}
    />
  );
  const liImageSrc = theme === "dark" ? LILight : LIDark;
  const LI = (
    <img
      style={{
        filter: "invert(0%)",
        width: 25,
        height: 25,
        display: "block",
      }}
      src={liImageSrc}
    />
  );

  const links = [
    {
      name: "Github",
      url: "https://github.com/platonicLiquid",
      icon: gh,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/myocum/",
      icon: LI,
    },
  ];

  const Footer = (
    <footer className="footer container w-50 p-3">
      <nav className="navbar navbar-expand bg-body">
        <div className="container-fluid">
          <span>
            <p>© {new Date().getFullYear()} Matthew Yocum</p>
          </span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link" href={link.url} target="_blank">
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  );

  return <>{Footer}</>;
}
