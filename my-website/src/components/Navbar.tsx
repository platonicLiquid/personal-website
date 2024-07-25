import { Link, useLocation } from "react-router-dom";

import ToggleButton from "./ToggleButton";
import headshot from "../assets/headshot.png";

export default function Navbar() {
  const location = useLocation();
  const sources = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "CV",
      url: "/CV",
    },
  ];
  return (
    <>
      <nav className="navbar bg-bkg text-content font-medium w-full self-start mt-3">
        <div className="max-w-screen-md mx-auto relative flex justify-between">
          <div className="flex justify-items-start items-center pl-16 margin-padding-override ">
            <div className="navbar-image-container pr-5">
              <img
                className="navbar-image hide-image"
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

            <div className="headerLables grid grid-row-2 update-margin">
              <div className="text-xl font-bold place-self-start">
                matthew.yocum.dev
              </div>
              <ul className="flex justify-items-start items-start -ml-1">
                {sources.map((source, index) => {
                  const isActive = location.pathname === source.url;
                  const className = `nav-item mx-1 hover:underline ${
                    isActive ? "underline underline-offset-2 font-bold" : ""
                  }`;
                  return (
                    <li className={className} key={index}>
                      <Link to={source.url}>{source.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="dark-mode-toggle flex justify-items-end items-center pr-14 hide-toggle margin-padding-override">
            <ToggleButton />
          </div>
        </div>
      </nav>
    </>
  );
}
