import React, { useState } from "react";
import { useSelector } from "react-redux";
import Breadcrumb from "./subcomponents/Breadcrumb/Breadcrumb";
import ProfileDetails from "./subcomponents/ProfileDetails/ProfileDetails";
import ProfileTabs from "./subcomponents/ProfileTabs/ProfileTabs";
import RightSidebar from "./subcomponents/RightSidebar/RightSidebar";
import "./CandidateProfile.css";

const CandidateProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("assigned-jobs");
  const [activeRightTab, setActiveRightTab] = useState("all");

  const { candidate, loading, error } = useSelector(
    (state: any) => state.candidate
  );

  const handleEditClick = () => {};

  if (loading || !candidate) {
    return (
      <div className="container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="container">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="candidate-container">
      <div className="main-profile">
        <Breadcrumb candidateName={candidate.name} candidateId={candidate.id} />
        <ProfileDetails candidate={candidate} onEditClick={handleEditClick} />
        <ProfileTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          candidate={candidate}
        />
      </div>

      <RightSidebar
        activeRightTab={activeRightTab}
        onRightTabChange={setActiveRightTab}
      />
    </div>
  );
};

export default CandidateProfile;
