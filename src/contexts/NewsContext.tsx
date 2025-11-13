import React, { createContext, useContext, useState } from "react";
import axios from "axios";

import type { News } from "@src/interfaces/news";

interface NewsContextType {
  news: News[];
  newsDetail: News | null;
  loading: boolean;
  error: string | null;
  fetchNews: () => Promise<void>;
  fetchNewsById: (id: string | number) => Promise<void>;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [news, setNews] = useState<News[]>([]);
  const [newsDetail, setNewsDetail] = useState<News | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3001/news");
      setNews(res.data);
      setError(null);
    } catch (err) {
      setError("Unable to load jobs!");
    } finally {
      setLoading(false);
    }
  };

  const fetchNewsById = async (id: string | number) => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:3001/news/${id}`);
      setNewsDetail(res.data);
      setError(null);
    } catch (err) {
      setError("Can't find news!");
      setNewsDetail(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <NewsContext.Provider
      value={{ news, newsDetail, loading, error, fetchNews, fetchNewsById }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNewsContext must be used within a JobProvider");
  }
  return context;
};
