import { Candidate, AssignedJob, AllTabsDataObj } from "../../types/candidate";

export const mockCandidate: Candidate = {
  id: "231",
  name: "William Sample",
  title: "Senior Product Manager",
  country: "United States",
  city: "Dallas",
  email: "williamsample@gmail.com",
  phone: "+91 9021232326",
  updatedBy: "Phyllis Yang",
  currentOrganization: "World Bank Group",
  skills: "HTML, CSS, Javascript",
  availableFrom: "Jul, 14, 2023 4:04 pm",
  currentSalary: "$6000",
  noticePeriod: "90 Days",
  fullAddress: "9400 Ashton Rd, Philadelphia...",
  resume: "Resume",
  totalExperience: "5 Years",
  currentEmploymentStatus: "Employed",
  dateOfBirth: "15 June 1993",
  relevantExperience: "7 Years",
  salaryExpectation: "$9000",
  status: "Submitted to Client",
  salaryType: "Annual",
  languageSkills: "English (Elementary proficiency)",
  summary: "Experienced product manager with expertise in digital solutions",
  socialLinks: {
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/",
  },
};

const mockAssignedJobs: AssignedJob[] = [
  {
    id: "1",
    title: "Senior Product Manager",
    company: "Recruit CRM",
    assignedDate: "Jul 10, 2023",
    status: "Assigned",
    candidateName: "William Sample",
  },
  {
    id: "2",
    title: "Senior Product Manager",
    company: "Recruit CRM",
    assignedDate: "Jul 10, 2023",
    status: "Assigned",
    candidateName: "William Sample",
  },
  {
    id: "3",
    title: "Senior Product Manager",
    company: "Recruit CRM",
    assignedDate: "Jul 10, 2023",
    status: "Assigned",
    candidateName: "William Sample",
  },
];

const mocAllTabsData: AllTabsDataObj[] = [
  {
    id: "1",
    content:
      "Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cilium laboris occaecat ipsum Lorem cupidatat.",
    author: "John Doe",
    date: "Jul 12, 2023, 11:54 am",
    associations: 1,
  },
  {
    id: "2",
    content:
      "Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cilium laboris occaecat ipsum Lorem cupidatat.",
    author: "John Doe",
    date: "Jul 12, 2023, 11:54 am",
    associations: 1,
  },
  {
    id: "3",
    content:
      "Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cilium laboris occaecat ipsum Lorem cupidatat.",
    author: "John Doe",
    date: "Jul 12, 2023, 11:54 am",
    associations: 1,
  },
];

const mockCandidateState = {
  candidate: mockCandidate,
  assignedJobs: mockAssignedJobs,
  allTabsData: mocAllTabsData,
};

// Mock API function
export const mockFetchCandidate = (candidateId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (candidateId) {
        resolve(mockCandidateState);
      }
    }, 3000); // Simulate network delay
  });
};
