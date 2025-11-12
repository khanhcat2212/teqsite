import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { navs } from "@src/constants/navs";
import { socials } from "@src/constants/socials";
import { Link } from "@tanstack/react-router";

import Button from "../button/Button";

const Header: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });

  return (
    <nav className="w-screen">
      <div className="h-17.25 xl:h-25 flex items-center justify-between px-8 xl:px-12 bg-white-400">
        <img src="/logo.svg" className="h-[50%]" alt="teq_logo" />

        <div className="hidden xl:flex items-center gap-18">
          <ul className="flex space-x-13 text-[1rem] font-medium text-grey">
            {navs.map((nav, index) => (
              <li key={index} className="relative group">
                <Link
                  to={nav.url}
                  className="py-1 hover:text-black hover:font-bold"
                >
                  {nav.label}
                </Link>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
          <Button variant="primary" size={isLg ? "md" : "sm"}>
            CONTACT US
          </Button>
        </div>

        <div
          onClick={() => setIsOpenMenu((prev) => !prev)}
          className="flex xl:hidden gap-3 cursor-pointer"
        >
          <p className="text-[1rem] font-medium">MENU</p>
          <img src="/menu.svg" alt="menu" className="w-3 object-cover" />
        </div>
      </div>

      {isOpenMenu && (
        <div className="flex flex-col flex-1 xl:hidden justify-between py-10 bg-[url('/menu_bg.svg')] bg-cover bg-center bg-no-repeat h-[calc(100vh-69px)] w-full">
          <div className="flex flex-col flex-wrap space-y-8 items-center">
            <ul className="flex flex-col flex-wrap space-y-8 justify-center items-center text-[1.125rem] md:text-[1.5rem] font-medium text-grey">
              {navs.map((nav, index) => (
                <li key={index} className="relative group">
                  <Link
                    to={nav.url}
                    className="py-1 hover:text-black hover:font-bold"
                  >
                    {nav.label}
                  </Link>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              size={isLg ? "lg" : isMd ? "md" : "sm"}
              className="self-center"
            >
              CONTACT US
            </Button>

            <div className="flex items-center justify-center gap-4 mt-2">
              {socials.map((social, index) => (
                <img
                  key={index}
                  src={social.image}
                  className="w-11 md:w-12 object-cover cursor-pointer"
                  alt="social"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 items-center">
            <img
              src="/logo.svg"
              className="h-12 md:h-17 object-cover"
              alt="logo"
            />
            <p className="text-black-200 text-[16px]">
              © 2023 Teqnological Asia, Inc
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
