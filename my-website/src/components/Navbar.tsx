import ToggleButton from "./ToggleButton";

import headshot from "../assets/headshot.png";

export default function Navbar() {
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

  return (
    <>
      <nav className="navbar bg-bkg text-content w-full">
        <div className="max-w-screen-md mx-auto relative flex justify-between">
          <div className="flex justify-items-start items-center">
            <div className="navbar-image-container">
              <img
                className="p-1"
                style={{
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                  display: "block",
                }}
                src={headshot}
              />
            </div>

            <div className="headerLables pl-3">
              <ul className="flex justify-items-start items-center ">
                {links.map((link, index) => (
                  <li className="nav-item mx-1" key={index}>
                    <a className="nav-link" href={link.url}>
                      {link.name}
                    </a>
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
