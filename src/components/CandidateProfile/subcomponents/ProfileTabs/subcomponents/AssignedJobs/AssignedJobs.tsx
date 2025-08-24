/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useSelector } from "react-redux";
import type { Candidate } from "../../../../../../types/candidate";
import "./AssignedJobs.css";

interface AssignedJobsProps {
  candidate: Candidate;
}

const AssignedJobs: React.FC<AssignedJobsProps> = ({ candidate }) => {
  const { assignedJobs, loading, error } = useSelector(
    (state: any) => state.candidate
  );

  if (loading) {
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
    <div className="assigned-jobs">
      <div className="jobs-header">
        <span>Assigned Job to {candidate.name}</span>
        <div className="jobs-actions">
          <button className="assign-btn">Assign To Job</button>
          <button className="view-all-btn">View All Assigned Jobs</button>
        </div>
      </div>

      <div className="jobs-list">
        {assignedJobs?.map((job) => (
          <div key={job.id} className="job-item">
            <div className="job-info-section">
              <div className="job-avatar">M</div>
              <div className="job-details">
                <span>{job.title}</span>
                <p>{job.company}</p>
              </div>
            </div>
            <div className="job-meta">
              <div className="job-info">
                <i className="bx bx-user-circle"></i>
                <span>{job.candidateName}</span>
              </div>
              <div className="job-info">
                <i className="bxr  bx-clock-3"></i>
                <span>{job.assignedDate}</span>
              </div>
            </div>
            <span className="status-badge">{job.status}</span>
            <button className="view-files-btn">View Files</button>
            <div className="toggle-switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignedJobs;
