import React, { useState } from "react";
import Modal from "../common/Modal/Modal";
import { Candidate } from "../../types/candidate";
import "./EditModal.css";

interface EditModalProps {
  isOpen: boolean;
  candidate: Candidate;
  onSave: (candidate: Candidate) => void;
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  candidate,
  onSave,
  onClose,
}) => {
  const [formData, setFormData] = useState<Candidate>(candidate);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof Candidate, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleSocialLinkChange = (
    platform: keyof Candidate["socialLinks"],
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value,
      },
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.title.trim()) newErrors.title = "Title is required";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSave(formData);
    }
  };

  const handleClose = () => {
    setFormData(candidate); // Reset form data
    setErrors({}); // Clear errors
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Edit Candidate Details"
      size="lg"
    >
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Job Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              className={errors.title ? "error" : ""}
            />
            {errors.title && <span className="error-text">{errors.title}</span>}
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Phone *</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Current Organization</label>
            <input
              type="text"
              value={formData.currentOrganization}
              onChange={(e) =>
                handleInputChange("currentOrganization", e.target.value)
              }
            />
          </div>

          <div className="form-group full-width">
            <label>Skills</label>
            <textarea
              value={formData.skills}
              onChange={(e) => handleInputChange("skills", e.target.value)}
              rows={3}
            />
          </div>

          <div className="form-group">
            <label>Current Salary</label>
            <input
              type="text"
              value={formData.currentSalary}
              onChange={(e) =>
                handleInputChange("currentSalary", e.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label>Salary Expectation</label>
            <input
              type="text"
              value={formData.salaryExpectation}
              onChange={(e) =>
                handleInputChange("salaryExpectation", e.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label>Total Experience</label>
            <input
              type="text"
              value={formData.totalExperience}
              onChange={(e) =>
                handleInputChange("totalExperience", e.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label>Relevant Experience</label>
            <input
              type="text"
              value={formData.relevantExperience}
              onChange={(e) =>
                handleInputChange("relevantExperience", e.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label>Notice Period</label>
            <input
              type="text"
              value={formData.noticePeriod}
              onChange={(e) =>
                handleInputChange("noticePeriod", e.target.value)
              }
            />
          </div>
        </div>

        <div className="social-links-section">
          <h3>Social Links</h3>
          <div className="social-grid">
            <div className="form-group">
              <label>LinkedIn</label>
              <input
                type="url"
                value={formData.socialLinks.linkedin}
                onChange={(e) =>
                  handleSocialLinkChange("linkedin", e.target.value)
                }
                placeholder="https://linkedin.com/in/username"
              />
            </div>

            <div className="form-group">
              <label>Twitter</label>
              <input
                type="url"
                value={formData.socialLinks.twitter}
                onChange={(e) =>
                  handleSocialLinkChange("twitter", e.target.value)
                }
                placeholder="https://twitter.com/username"
              />
            </div>

            <div className="form-group">
              <label>GitHub</label>
              <input
                type="url"
                value={formData.socialLinks.github}
                onChange={(e) =>
                  handleSocialLinkChange("github", e.target.value)
                }
                placeholder="https://github.com/username"
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" onClick={handleClose} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="save-btn">
            Save Changes
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
