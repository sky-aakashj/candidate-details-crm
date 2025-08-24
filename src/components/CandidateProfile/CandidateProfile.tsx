/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditModal from "../EditModal/EditModal";
import Breadcrumb from "./subcomponents/Breadcrumb/Breadcrumb";
import ProfileDetails from "./subcomponents/ProfileDetails/ProfileDetails";
import ProfileTabs from "./subcomponents/ProfileTabs/ProfileTabs";
import RightSidebar from "./subcomponents/RightSidebar/RightSidebar";
import { updateCandidate } from "../../redux/actions/candidateactions.ts";
import { Candidate } from "../../types/candidate";
import "./CandidateProfile.css";

const CandidateProfile: React.FC = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("assigned-jobs");
  const [activeRightTab, setActiveRightTab] = useState("all");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { candidate, loading, error } = useSelector(
    (state: any) => state.candidate
  );
  console.log("Candidate from Redux store:", candidate);

  const handleEditSave = (updatedCandidate: Candidate) => {
    console.log("Updated candidate:", updatedCandidate);
    dispatch(updateCandidate(updatedCandidate));
    setIsEditModalOpen(false);
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

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

      <EditModal
        isOpen={isEditModalOpen}
        candidate={candidate}
        onSave={handleEditSave}
        onClose={() => setIsEditModalOpen(false)}
      />
    </div>
  );
};

export default CandidateProfile;
