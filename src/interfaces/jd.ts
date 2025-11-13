export interface Job {
  id: string;
  title: string;
  category: string;
  type: string;
  workplace: string;
  postedDate: string;
  description: string;
  responsibilities: string[];
  requirements: {
    general: string[];
    skills: string[];
  };
  benefits: {
    compensation: string[];
    spiritual: string[];
  };
  workingTime: string[];
  contact: {
    email: string;
  };
}
