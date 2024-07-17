import { Link } from "react-router-dom";

import ToggleButton from "./ToggleButton";
import headshot from "../assets/headshot.png";

export default function Navbar() {
  const sources = [
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

  return (
    <>
      <nav className="navbar bg-bkg text-content font-medium w-full self-start">
        <div className="max-w-screen-md mx-auto relative flex justify-between">
          <div className="flex justify-items-start items-center">
            <div className="navbar-image-container">
              <img
                className="m-1"
                style={{
                  borderRadius: "50%",
                  width: "2.5em",
                  height: "2.5em",
                  border: ".0625em solid",
                  borderColor: "var(--color-content)",
                }}
                src={headshot}
              />
            </div>

            <div className="headerLables grid grid-row-2 pl-3">
              <div className="text-xl font-bold place-self-start m-0 mt-1">
                matthew.yocum.dev
              </div>
              <ul className="flex justify-items-start items-start -mt-1">
                {sources.map((source, index) => (
                  <li className="nav-item mx-1" key={index}>
                    <Link to={source.url}>{source.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="dark-mode-toggle flex justify-items-end items-center">
            <ToggleButton />
          </div>
        </div>
      </nav>
    </>
  );
}
