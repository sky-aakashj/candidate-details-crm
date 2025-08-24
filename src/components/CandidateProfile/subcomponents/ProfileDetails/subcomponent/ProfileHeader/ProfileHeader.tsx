import React from "react";
import type { Candidate } from "../../../../../../types/candidate";
import "./ProfileHeader.css";

interface ProfileHeaderProps {
  candidate: Candidate;
  onEditClick: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  candidate,
  onEditClick,
}) => {
  return (
    <>
      <div className="profile-header">
        <div className="profile-info">
          <div className="avatar">
            <i className="bx  bxs-user"></i>
          </div>
          <div className="basic-info">
            <div className="name-section">
              <span>{candidate.name}</span>
              <div className="social-links">
                <a href={candidate.socialLinks.facebook}>
                  <i className="bxl  bx-facebook-circle"></i>
                </a>
                <a href={candidate.socialLinks.twitter}>
                  <i className="bxl bx-twitter"></i>
                </a>
                <a href={candidate.socialLinks.linkedin}>
                  <i className="bxl bx-linkedin"></i>
                </a>
                <a href={candidate.socialLinks.github}>
                  <i className="bxl  bx-github"></i>
                </a>
              </div>
            </div>
            <div className="addional-info">
              <span>{candidate.title}</span>
              <span>{candidate.country}</span>
              <span>{candidate.city}</span>
            </div>
          </div>
        </div>
        <div className="profile-actions">
          <span className="contact-status">Contact Linked</span>
          <button className="action-btn">
            <i className="bx  bxs-star"></i>
          </button>
          <button className="action-btn">
            <i className="bx  bxs-fire-alt"></i>
          </button>
          <button className="action-btn" onClick={onEditClick}>
            <i className="bx  bxs-pencil"></i>
          </button>
          <button className="action-btn">
            <i className="bx bxs-dots-vertical-rounded"></i>
          </button>
        </div>
      </div>
      <div className="profile-header-footer">
        <div className="contact-details">
          <div className="contact-item">
            <i className="bx  bx-envelope"></i>
            <span>{candidate.email}</span>
          </div>
          <div className="contact-item">
            <i className="bx  bx-phone"></i>
            <span>{candidate.phone}</span>
          </div>
        </div>
        <div className="additional-details">
          <div className="additional-details-item">
            <i className="bx bx-user-circle"></i>
            <span> {candidate.updatedBy}</span>
          </div>
          <div className="additional-details-item">
            <i className="bx  bxs-timer"></i>
            <span>{candidate.availableFrom}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
