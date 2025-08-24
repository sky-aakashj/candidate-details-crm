import React, { ReactNode } from "react";
import "./Tabs.css";

export interface TabItem {
  id: string;
  label: string;
  component?: ReactNode;
  content?: string;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  variant?: "default" | "sidebar";
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  variant = "default",
  className = "",
}) => {
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className={`tabs-container ${variant} ${className}`}>
      <div className={`tabs-header-${variant}`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? `active-${variant}` : ""}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTabData?.component || (
          <div className="default-tab-content">
            {activeTabData?.content || activeTabData?.label}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
