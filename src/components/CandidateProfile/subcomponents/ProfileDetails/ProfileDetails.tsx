import React from "react";
import type { Candidate } from "../../../../types/candidate";
import ProfileHeader from "./subcomponent/ProfileHeader/ProfileHeader";
import "./ProfileDetails.css";

interface ProfileDetailsProps {
  candidate: Candidate;
  onEditClick: () => void;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({
  candidate,
  onEditClick,
}) => {
  return (
    <div className="profile-details-container">
      <ProfileHeader candidate={candidate} onEditClick={onEditClick} />
      <div className="profile-details">
        <div className="details-grid">
          <div className="detail-item">
            <label>Current Organization</label>
            <span>{candidate.currentOrganization}</span>
          </div>
          <div className="detail-item">
            <label>Summary</label>
            <span>{candidate.summary}</span>
          </div>
          <div className="detail-item">
            <label>Skills</label>
            <span>{candidate.skills}</span>
          </div>
          <div className="detail-item">
            <label>Current Employment Status</label>
            <span>{candidate.currentEmploymentStatus}</span>
          </div>
          <div className="detail-item">
            <label>Available From</label>
            <span>{candidate.availableFrom}</span>
          </div>
          <div className="detail-item">
            <label>Date of Birth</label>
            <span>{candidate.dateOfBirth}</span>
          </div>
          <div className="detail-item">
            <label>Current Salary</label>
            <span>{candidate.currentSalary}</span>
          </div>
          <div className="detail-item">
            <label>Relevant Experience</label>
            <span>{candidate.relevantExperience}</span>
          </div>
          <div className="detail-item">
            <label>Notice Period</label>
            <span>{candidate.noticePeriod}</span>
          </div>
          <div className="detail-item">
            <label>Salary Expectation</label>
            <span>{candidate.salaryExpectation}</span>
          </div>
          <div className="detail-item">
            <label>Full Address</label>
            <span>{candidate.fullAddress}</span>
          </div>
          <div className="detail-item">
            <label>Status</label>
            <span>{candidate.status}</span>
          </div>
          <div className="detail-item">
            <label>Resume</label>
            <span>{candidate.resume}</span>
          </div>
          <div className="detail-item">
            <label>Salary Type</label>
            <span>{candidate.salaryType}</span>
          </div>
          <div className="detail-item">
            <label>Total Experience</label>
            <span>{candidate.totalExperience}</span>
          </div>
          <div className="detail-item">
            <label>Language Skills</label>
            <span>{candidate.languageSkills}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
