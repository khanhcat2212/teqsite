import React, { createContext, useContext, useState } from "react";
import axios from "axios";

import type { Job } from "@src/interfaces/jd";

interface JobContextType {
  jobs: Job[];
  jobDetail: Job | null;
  loading: boolean;
  error: string | null;
  fetchJobs: () => Promise<void>;
  fetchJobById: (id: string | number) => Promise<void>;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobDetail, setJobDetail] = useState<Job | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3001/jobs");
      setJobs(res.data);
      setError(null);
    } catch (err) {
      setError("Unable to load jobs!");
    } finally {
      setLoading(false);
    }
  };

  const fetchJobById = async (id: string | number) => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:3001/jobs/${id}`);
      setJobDetail(res.data);
      setError(null);
    } catch (err) {
      setError("Can't find job!");
      setJobDetail(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <JobContext.Provider
      value={{ jobs, jobDetail, loading, error, fetchJobs, fetchJobById }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobContext must be used within a JobProvider");
  }
  return context;
};
