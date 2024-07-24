import { useState } from "react";

type CVTabsProps = {
  setSelectedTab: (tabName: string) => void;
};

export default function CVTabs({ setSelectedTab }: CVTabsProps) {
  const tabsList = [
    { name: "Software Development", content: "" },
    { name: "Technical Writing", content: "" },
    { name: "Games", content: "" },
  ];
  const [activeTab, setActiveTab] = useState(tabsList[0].name); // Default to the first tab

  return (
    <>
      <div className="tabs text-center border-content border-b-2">
        <ul className="flex flex-wrap justify-items-start">
          {tabsList.map((tab, index) => {
            return (
              <li className="me-2" key={index}>
                <a
                  href="#"
                  className={`inline-block p-4  ${
                    tab.name === activeTab
                      ? "border-current border-content border-b-2 rounded-t-lg"
                      : "border-transparent"
                  } rounded-t-lg`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(tab.name);
                    setSelectedTab(tab.name);
                  }}
                >
                  {tab.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
