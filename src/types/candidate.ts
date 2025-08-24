export interface UserProfile {
  name: string;
  company: string;
  imageUrl: string;
}

export interface Candidate {
  id: string;
  name: string;
  title: string;
  country: string;
  city: string;
  email: string;
  phone: string;
  currentOrganization: string;
  skills: string;
  availableFrom: string;
  updatedBy: string;
  currentSalary: string;
  noticePeriod: string;
  fullAddress: string;
  resume: string;
  totalExperience: string;
  currentEmploymentStatus: string;
  dateOfBirth: string;
  relevantExperience: string;
  salaryExpectation: string;
  status: string;
  salaryType: string;
  languageSkills: string;
  summary?: string; // Added optional summary field
  socialLinks: {
    linkedin: string;
    twitter: string;
    facebook: string;
    github: string;
  };
}

export interface AssignedJob {
  id: string;
  title: string;
  company: string;
  assignedDate: string;
  status: string;
  candidateName: string;
}

export interface AllTabsDataObj {
  id: string;
  content: string;
  author: string;
  date: string;
  associations: number;
}

export interface mockCandidateState {
  candidate: Candidate;
  assignedJobs: AssignedJob[];
  allTabsData: AllTabsDataObj[];
}
