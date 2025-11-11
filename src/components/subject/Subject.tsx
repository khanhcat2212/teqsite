import React from "react";

interface SubjectProps {
  title: string;
}

const Subject: React.FC<SubjectProps> = ({ title }) => {
  return (
    <div className="h-15.5 flex flex-col justify-between">
      <div className="w-11 h-2 mb-3 bg-ocean" />
      <h3 className="text-[1.75rem] font-semibold">{title}</h3>
    </div>
  );
};

export default Subject;
