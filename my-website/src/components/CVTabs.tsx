import { useState, useEffect } from "react";

type CVTabsProps = {
  setSelectedTab: (tabName: string) => void;
};

export default function CVTabs({ setSelectedTab }: CVTabsProps) {
  const tabsList = [
    { name: "Software Development", shortname: "DEV", content: "" },
    { name: "Technical Writing", shortname: "TW", content: "" },
    { name: "Games", shortname: "G", content: "" },
  ];
  const [activeTab, setActiveTab] = useState(tabsList[0].name);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="tabs text-center border-content border-b-2">
        <ul className="flex flex-auto">
          {tabsList.map((tab, index) => {
            return (
              <li className="me-2" key={index}>
                <a
                  href="#"
                  className={`inline-block p-4 h-full ${
                    tab.name === activeTab
                      ? "border-current border-content border-b-2 rounded-t-lg "
                      : "border-transparent"
                  } rounded-t-lg`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(tab.name);
                    setSelectedTab(tab.name);
                  }}
                >
                  {isMobile && tab.name === activeTab
                    ? tab.name
                    : isMobile
                    ? tab.shortname
                    : tab.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
