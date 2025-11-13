/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { useJobContext } from "@src/contexts/JobContext";
import Applied from "@src/feature/careers/CareerDetail/Applied";
import Form from "@src/feature/careers/CareerDetail/Form";
import JobDescription from "@src/feature/careers/CareerDetail/JobDescription";
import Modal from "@src/feature/careers/CareerDetail/Modal";
import Overview from "@src/feature/careers/CareerDetail/Overview";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/careers/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const { jobDetail, fetchJobById } = useJobContext();
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchJobById(id);
  }, [id]);

  if (!jobDetail) return null;

  const handleSuccess = () => {
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
      setSubmitted(true);
    }, 10500);
  };
  return (
    <>
      <Overview {...jobDetail} />
      <JobDescription {...jobDetail} />
      <div key="form-applied" className="relative">
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <Modal />
          </div>
        )}
        {!submitted ? <Form onSuccess={handleSuccess} /> : <Applied />}
      </div>
    </>
  );
}
