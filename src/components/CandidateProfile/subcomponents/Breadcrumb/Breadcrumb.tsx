import React from "react";
import "./Breadcrumb.css";

interface BreadcrumbProps {
  candidateName: string;
  candidateId: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  candidateName,
  candidateId,
}) => {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-left">
        <span>Candidates</span>
        <i className="bx bx-chevron-right"></i>
        <span className="candidate-name">{candidateName}</span>
        <span className="candidate-id">ID - {candidateId}</span>
      </div>
      <div className="breadcrumb-right">
        <button>Request Profile Update</button>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Breadcrumb;
