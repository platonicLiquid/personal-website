import { useState } from "react";
import CVTabs from "./CVTabs";

import Dev from "../pages/Dev.mdx";
import Games from "../pages/Games.mdx";
import TW from "../pages/TW.mdx";

export default function Tabs() {
  // State to track the currently selected tab
  const [selectedTab, setSelectedTab] = useState("Software Development");

  // Function to render the selected MDX content
  const renderContent = () => {
    switch (selectedTab) {
      case "Software Development":
        return <Dev />;
      case "Games":
        return <Games />;
      case "Technical Writing":
        return <TW />;
      default:
        return null;
    }
  };

  return (
    <>
      <div>
        <CVTabs setSelectedTab={setSelectedTab} />
        <div className="mt-5">{renderContent()}</div>
      </div>
    </>
  );
}
