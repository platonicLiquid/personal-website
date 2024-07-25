import { useEffect, useState } from "react";
import githubDark from "../assets/githubDark.svg";
import githubLight from "../assets/githubLight.svg";
import LIDark from "../assets/LIDark.svg";
import LILight from "../assets/LILight.svg";

export default function Footers() {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "dark"
  );

  useEffect(() => {
    const callback = function (mutationsList: MutationRecord[]) {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          // Provide a fallback value to ensure setTheme always receives a string
          const theme =
            document.documentElement.getAttribute("data-theme") || "dark"; // Assuming "dark" as the default theme
          setTheme(theme);
        }
      }
    };

    const observer = new MutationObserver(callback);

    const config = { attributes: true, attributeFilter: ["data-theme"] };

    observer.observe(document.documentElement, config);

    return () => observer.disconnect();
  }, []);

  const ghImageSrc = theme === "dark" ? githubLight : githubDark;
  const gh = (
    <img
      style={{
        width: "1.25rem",
        height: "1.25rem",
      }}
      src={ghImageSrc}
    />
  );
  const liImageSrc = theme === "dark" ? LILight : LIDark;
  const LI = (
    <img
      style={{
        filter: "invert(0%)",
        width: "1.25rem",
        height: "1.25rem",
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
    <footer className="footer bg-bkg text-content w-full self-end sticky-bottom">
      <nav className="navbar max-w-screen-md mx-auto relative flex justify-between">
        <div className="flex flex-row justify-items-start content-end pl-16">
          <p className="text-sm pr-2">
            © {new Date().getFullYear()} Matthew Yocum
          </p>

          <ul className="social-links flex flex-row mx-1">
            {links.map((link, index) => (
              <li className="nav-item mx-1 svg-footer-filter" key={index}>
                <a className="nav-link" href={link.url} target="_blank">
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </footer>
  );

  return <>{Footer}</>;
}
