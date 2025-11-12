import React from "react";

import { companies } from "@src/constants/companies";
import { galleryNavs } from "@src/constants/galleryNavs";
import { services } from "@src/constants/services";
import { Link } from "@tanstack/react-router";

const Footer: React.FC = () => {
  return (
    <div className="flex w-screen bg-grey-200 flex-col lg:flex-row lg:h-[454px] h-[758px] lg:justify-center">
      <div className="hidden lg:flex items-start h-[454px] py-16 w-full px-36">
        <div className="w-1/2 flex flex-col justify-between h-full items-start">
          <div className="flex flex-col gap-8">
            <img
              src="/logo.svg"
              className="h-13 w-auto self-start"
              alt="logo"
            />

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[16px] text-black-200">
                <img
                  src="/contacts/contact_1.svg"
                  alt="contact"
                  className="w-6"
                />
                <p>(+84) 335 3335 88</p>
              </div>

              <div className="flex items-center gap-2 text-[16px] text-black-200">
                <img
                  src="/contacts/contact_2.svg"
                  alt="contact"
                  className="w-6"
                />
                <p>contact@teqnological.asia</p>
              </div>

              <div className="flex max-w-[300px] items-start gap-2 text-[16px] text-black-200">
                <img
                  src="/contacts/contact_3.svg"
                  alt="contact"
                  className="w-6"
                />
                <p>
                  No. 301, Floor 3, Block B, Waseco Plaza, 10 Pho Quang, Ward 2,
                  Tan Binh, Ho Chi Minh city, Vietnam
                </p>
              </div>
            </div>
          </div>

          <p className="text-[16px] text-black-200">
            © 2023 Teqnological Asia, Inc
          </p>
        </div>

        <div className="w-1/2 grid grid-cols-3 gap-28 h-full items-start">
          <div className="flex flex-col gap-6">
            <h3 className="text-[20px] font-bold">Company</h3>
            <ul className="flex flex-col gap-4 text-[1rem]  text-grey">
              {companies.map((com, index) => (
                <li key={index} className="relative group">
                  <Link
                    to={com.url}
                    className="py-1 hover:text-black hover:font-bold whitespace-nowrap"
                  >
                    {com.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-[20px] font-bold">Services</h3>
            <ul className="flex flex-col gap-4 text-[1rem]  text-grey">
              {services.map((srv, index) => (
                <li key={index} className="relative group">
                  <Link
                    to={srv.url}
                    className="py-1 hover:text-black hover:font-bold whitespace-nowrap"
                  >
                    {srv.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-[20px] font-bold">Gallery</h3>
            <ul className="flex flex-col gap-4 text-[1rem]  text-grey">
              {galleryNavs.map((nav, index) => (
                <li key={index} className="relative group">
                  <Link
                    to={nav.url}
                    className="py-1 hover:text-black hover:font-bold whitespace-nowrap"
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex flex-col justify-between gap-12 px-8 md:px-20 py-20 h-full">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            <img
              src="/logo.svg"
              className="h-13 w-auto self-start"
              alt="logo"
            />

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[16px] text-black-200">
                <img
                  src="/contacts/contact_1.svg"
                  alt="contact"
                  className="w-6"
                />
                <p>(+84) 335 3335 88</p>
              </div>

              <div className="flex items-center gap-2 text-[16px] text-black-200">
                <img
                  src="/contacts/contact_2.svg"
                  alt="contact"
                  className="w-6"
                />
                <p>contact@teqnological.asia</p>
              </div>

              <div className="flex max-w-[300px] items-start gap-2 text-[16px] text-black-200">
                <img
                  src="/contacts/contact_3.svg"
                  alt="contact"
                  className="w-6"
                />
                <p>
                  No. 301, Floor 3, Block B, Waseco Plaza, 10 Pho Quang, Ward 2,
                  Tan Binh, Ho Chi Minh city, Vietnam
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-12 h-full w-full">
          <div className="flex flex-col gap-6 w-full min-w-[283px]">
            <h3 className="text-[20px] font-bold">Company</h3>
            <ul className="flex flex-col gap-4 text-[1rem]  text-grey">
              {companies.map((com, index) => (
                <li key={index} className="relative group">
                  <Link
                    to={com.url}
                    className="py-1 hover:text-black hover:font-bold whitespace-nowrap"
                  >
                    {com.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6 w-full min-w-[283px]">
            <h3 className="text-[20px] font-bold">Services</h3>
            <ul className="flex flex-col gap-4 text-[1rem]  text-grey">
              {services.map((srv, index) => (
                <li key={index} className="relative group">
                  <Link
                    to={srv.url}
                    className="py-1 hover:text-black hover:font-bold whitespace-nowrap"
                  >
                    {srv.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex flex-col gap-6 w-full min-w-[283px]">
            <h3 className="text-[20px] font-bold">Gallery</h3>
            <ul className="flex flex-col gap-4 text-[1rem]  text-grey">
              {galleryNavs.map((nav, index) => (
                <li key={index} className="relative group">
                  <Link
                    to={nav.url}
                    className="py-1 hover:text-black hover:font-bold whitespace-nowrap"
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-[16px] text-black-200">
          © 2023 Teqnological Asia, Inc
        </p>
      </div>
    </div>
  );
};

export default Footer;
