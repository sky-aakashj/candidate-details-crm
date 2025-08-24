/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useSelector } from "react-redux";
import "./AllSection.css";

const AllSection: React.FC = () => {
  const { allTabsData } = useSelector((state: any) => state.candidate);

  return (
    <div className="notes-section">
      <div className="notes-list">
        {allTabsData.map((note) => (
          <div key={note.id} className="note-item">
            <div className="note-tabs">
              <div className="note-icon">
                <i className="bxr  bxs-note"></i>
              </div>
              <button className="note-tab active">Note</button>
              <button className="note-tab">To Do</button>
            </div>
            <p>{note.content}</p>
            <div className="note-meta">
              <span>{note.associations} Association(s)</span>
              <div className="note-author">
                <i className="bx bx-user-circle"></i>
                <span>{note.author}</span>
                <span className="note-date">{note.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSection;
