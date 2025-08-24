import React from "react";
import Tabs, { TabItem } from "../../../common/Tabs/Tabs";
import AllSection from "./subcomponents/AllSection/AllSection";
import "./RightSidebar.css";

interface RightSidebarProps {
  activeRightTab: string;
  onRightTabChange: (tab: string) => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({
  activeRightTab,
  onRightTabChange,
}) => {
  const tabs: TabItem[] = [
    {
      id: "all",
      label: "All",
      component: <AllSection />,
    },
    {
      id: "notes",
      label: "Notes & Calls",
      content: "Notes will be displayed here.",
    },
    {
      id: "tasks",
      label: "Tasks",
      content: "Tasks will be displayed here.",
    },
    {
      id: "meeting",
      label: "Meeting",
      content: "Meetings will be displayed here.",
    },
    {
      id: "files",
      label: "Files",
      content: "Files will be displayed here.",
    },
  ];

  return (
    <div className="right-sidebar">
      <div className="icon-group">
        <button className="icon-button">
          <i className="bxr  bxs-note"></i>
        </button>
        <button className="icon-button">
          <i className="bxr  bxs-phone-ring"></i>
        </button>
        <button className="icon-button">
          <i className="bxr  bxs-check-circle"></i>
        </button>
        <button className="icon-button">
          <i className="bxr  bxs-calendar-event"></i>
        </button>
      </div>
      <Tabs
        tabs={tabs}
        activeTab={activeRightTab}
        onTabChange={onRightTabChange}
        variant="sidebar"
      />
    </div>
  );
};

export default RightSidebar;
