/* eslint-disable @typescript-eslint/no-explicit-any */
import { Upload } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@src/components/button/Button";
import Input from "@src/components/input/Input";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  resume: File | null;
  message: string;
  linkedin: string;
  github: string;
  portfolio: string;
  orderSite: string;
}

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    message: yup.string().required(),
    resume: yup
      .mixed<File>()
      .nullable()
      .test(
        "fileSize",
        "File must be less than 10MB",
        (value) => !value || (value && value.size <= 10 * 1024 * 1024)
      )
      .test(
        "fileType",
        "Only PDF files are accepted",
        (value) => !value || (value && value.type === "application/pdf")
      ),
    linkedin: yup.string().notRequired(),
    github: yup.string().notRequired(),
    portfolio: yup.string().notRequired(),
    orderSite: yup.string().notRequired(),
  })
  .required();

interface FormProps {
  onSuccess?: () => void;
}

const Form: React.FC<FormProps> = ({ onSuccess }) => {
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });

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
      resume: null,
      message: "",
      linkedin: "",
      github: "",
      portfolio: "",
      orderSite: "",
    },
  });

  const onSubmit = () => {
    if (onSuccess) onSuccess();
  };

  return (
    <div className="flex flex-col items-center lg:justify-center border-dashed border-grey-350 border-t border-b py-12 px-4">
      <p className="text-[1.5rem] md:text-[2rem] font-bold mb-7">
        Submit Your Application
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full lg:w-[660px] gap-3">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                variant={errors.name ? "error" : "primary"}
                placeholder="Nguyen Van A"
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
                placeholder="youremail@gmail.com"
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
                placeholder="(+84) 936 456 789"
              />
            )}
          />
          <Controller
            name="resume"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => {
                    const file = e.target.files?.[0] ?? null;
                    field.onChange(file);
                  }}
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="border border-grey-100 rounded-sm w-fit px-4 h-[50px] flex items-center justify-center gap-4 cursor-pointer"
                >
                  <Upload size={24} className="text-black" />
                  <span className="text-[14px]">
                    {field.value ? field.value.name : "Add Résume"}
                  </span>
                </label>
                {errors.resume && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.resume.message}
                  </p>
                )}
              </div>
            )}
          />

          <p className="text-[14px] text-black-200">
            Resume should be a PDF under 10MB
          </p>
        </div>

        <div className="py-8 border-b border-grey-100 pb-10">
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <Input {...field} variant="area" placeholder="Your Message" />
            )}
          />
        </div>

        <p className="text-[14px] py-4">
          <b>Optionally, </b>include links to your social media profiles.
        </p>

        <div className="flex flex-col w-full lg:w-[660px] gap-3">
          <Controller
            name="linkedin"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                variant="secondary"
                label="linkedin.com/in/"
                placeholder="handle"
              />
            )}
          />
          <Controller
            name="github"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                variant="secondary"
                label="github.com/"
                placeholder="handle"
              />
            )}
          />
          <Controller
            name="portfolio"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                variant="secondary"
                label="https://"
                placeholder="portfolio.com"
              />
            )}
          />
          <Controller
            name="orderSite"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                variant="secondary"
                label="https://"
                placeholder="order-site.com"
              />
            )}
          />
        </div>

        <div className="w-full flex justify-center pt-8">
          <Button
            type="submit"
            variant="primary"
            size={isLg ? "lg" : isMd ? "md" : "sm"}
          >
            APPLY
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
