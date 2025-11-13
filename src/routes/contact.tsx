/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@src/components/button/Button";
import Input from "@src/components/input/Input";
import Modal from "@src/feature/contact/Modal";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    message: yup.string().required(),
  })
  .required();

function RouteComponent() {
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });
  const [showModal, setShowModal] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema) as any,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = () => {
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 10500);
  };

  return (
    <div className="w-full py-8 px-8">
      <div className="flex flex-col items-center justify-center mb-16 md:mb-0">
        <h1 className="text-[1.5rem] md:text-[2.25rem] font-bold">
          Contact Us
        </h1>

        <p className="text-[1.125rem] md:text-[1.5rem] text-black-100 mt-4 max-w-150 md:max-w-500 text-center">
          Our team would love to hear from you!
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-16">
        <img
          className="w-[80%] md:w-[40%] lg:w-[464px]"
          src="/contact.svg"
          alt="contact"
        />

        <form
          className="py-8 w-full md:w-[60%] lg:w-[660px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="text-[14px] py-4 text-grey-300">
            All fields are required
          </p>
          <div className="flex flex-col w-full gap-3">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  variant={errors.name ? "error" : "primary"}
                  placeholder="Full Name"
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  variant={errors.email ? "error" : "primary"}
                  placeholder="Email"
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  variant={errors.email ? "error" : "primary"}
                  placeholder="Phone Number"
                />
              )}
            />

            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <Input {...field} variant="area" placeholder="Your Message" />
              )}
            />
          </div>

          <div className="w-full flex justify-end mt-4">
            <Button
              type="submit"
              variant="primary"
              size={isLg ? "lg" : isMd ? "md" : "sm"}
            >
              SUBMIT
            </Button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <Modal />
        </div>
      )}
    </div>
  );
}
