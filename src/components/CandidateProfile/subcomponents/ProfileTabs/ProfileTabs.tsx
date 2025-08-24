import React from "react";
import { Candidate } from "../../../../types/candidate";
import Tabs, { TabItem } from "../../../common/Tabs/Tabs";
import AssignedJobs from "./subcomponents/AssignedJobs/AssignedJobs";
import "./ProfileTabs.css";

interface ProfileTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  candidate: Candidate;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({
  activeTab,
  onTabChange,
  candidate,
}) => {
  const tabs: TabItem[] = [
    {
      id: "all-details",
      label: "All Details",
      content: "All details will be displayed here.",
    },
    {
      id: "assigned-jobs",
      label: "Assigned Jobs",
      component: <AssignedJobs candidate={candidate} />,
    },
    {
      id: "related-emails",
      label: "Related Emails",
      content: "Related emails will be displayed here.",
    },
    {
      id: "candidate-questions",
      label: "Candidate Questions",
      content: "Candidate questions will be displayed here.",
    },
    {
      id: "hotlists",
      label: "Hotlists",
      content: "Hotlists will be displayed here.",
    },
    {
      id: "related-deals",
      label: "Related Deals",
      content: "Related deals will be displayed here.",
    },
    {
      id: "contacts-pitched",
      label: "Contact(s) Pitched",
      content: "Contacts pitched will be displayed here.",
    },
  ];

  return (
    <div className="tabs-section">
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
};

export default ProfileTabs;
