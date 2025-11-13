import React from "react";

import Subject from "@src/components/subject/Subject";
import type { Job } from "@src/interfaces/jd";
import { Link } from "@tanstack/react-router";

const JobDescription: React.FC<Job> = ({
  description,
  responsibilities,
  requirements,
  benefits,
  workingTime,
  contact,
}) => {
  return (
    <div className="flex flex-col px-8 pb-12 py-12 lg:px-44 bg-grey-50">
      <div className="flex flex-col w-full text-black-200 gap-3">
        <Subject title="JOB DESCRIPTION" />
        <div>
          {description.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <p>Your key responsibilities:</p>
        <ul className="list-disc list-inside pl-2">
          {responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col w-full max-w-[736px] text-black-200 mt-8 gap-3">
        <Subject title="REQUIREMENTS" />

        <p>General:</p>
        <ul className="list-disc list-inside pl-2">
          {requirements.general.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>

        <p>Skills/experience skills:</p>
        <ul className="list-disc list-inside pl-2">
          {requirements.skills.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col w-full max-w-[736px] text-black-200 mt-8 gap-3">
        <Subject title="WHY YOU'LL LOVE WORKING HERE" />

        <p className="text-[16px] md:text-[18px] font-semibold text-black py-2">
          Compensation and benefits:
        </p>
        <ul className="list-disc list-inside pl-2">
          {benefits.compensation.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>

        <p className="text-[16px] md:text-[18px] font-semibold text-black py-2">
          Spiritual life:
        </p>
        <ul className="list-disc list-inside pl-2">
          {benefits.spiritual.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>

        <p className="text-[16px] md:text-[18px] font-semibold text-black py-2">
          Working time and place of working time:
        </p>
        <ul className="list-disc list-inside pl-2">
          {workingTime.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col w-full max-w-[736px] text-black-200 mt-8 gap-3">
        <Subject title="CONTACT" />

        <p>General:</p>
        <p>
          If you are interested in this position, please email your resume/CV to
          email:
        </p>
        <Link
          to={contact.email}
          className="py-1 text-ocean hover:font-bold underline whitespace-nowrap"
        >
          {contact.email}
        </Link>
      </div>
    </div>
  );
};

export default JobDescription;
