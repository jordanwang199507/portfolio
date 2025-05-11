"use client";
import React from "react";
import { useState } from "react";
import { navigation } from "../_constants";
import svg from "@/public/assets/";
import { PokeBallPark } from "../_components/design";
import { useNavigation } from "../_context/NavigationContext";
import MenuSvg from "@/public/assets/svg/NavSvg";

const Header = () => {
  const { openNavigation, setOpenNavigation } = useNavigation();
  const [openSideNav, setOpenSideNav] = useState(false);

  const toggleSideNav = () => {
    const newState = !openSideNav;
    setOpenSideNav(newState);
    setOpenNavigation(newState);
  };

  return (
    <section
      className={`fixed top-0 left-0 z-50 w-full backdrop-blur-sm bg-background-transparent ${
        openSideNav ? "backdrop-blur-sm" : "backdrop-blur-none max-lg:h-[68px]"
      } `}
    >
      <div className="flex max-lg:h-full items-center justify-between ">
        <a
          href=""
          className={`block pl-4 ${
            openSideNav
              ? "max-lg:w-1/3 max-lg:h-screen max-lg:backdrop-blur-sm relative max-sm:z-50 max-sm:backdrop-blur-none"
              : ""
          }  `}
        >
          <img
            src={svg.logo}
            alt="Jordan (Yu-Lin) Wang Portfolio Logo"
            width={40}
            height={45}
            className={`${
              openSideNav
                ? "max-lg:absolute max-lg:top-[0.6rem] max-lg:left-4"
                : ""
            }`}
          />
        </a>

        <div className="absolute top-3 right-4 w-fit group ">
          <button
            className="relative group lg:hidden inline-flex items-center bg-background justify-center z-50 border-2 h-[45px] border-foreground pr-3 rounded-lg  w-fit transition-transform duration-200 group-hover:-translate-x-[4px] cursor-pointer"
            onClick={toggleSideNav}
          >
            <PokeBallPark location={"nav"} />
            <MenuSvg openNavigation={openNavigation} />
          </button>
          <div className="absolute inset-0 z-10 border border-foreground bg-foreground rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>

        <nav
          className={`fixed max-lg:w-2/3 max-sm:w-full top-0 right-0 bottom-0 bg-n-8 lg:static ${
            openSideNav ? "flex" : "hidden"
          } lg:bg-transparent lg:flex bg-nav pr-4`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block text-nowrap relative text-sm transition-colors px-6 py-8 max-xl:py-6 font-red-hat text-font hover:text-foreground`}
              >
                <span className="font-nippo-light text-foreground mr-2">
                  {item.id}.
                </span>
                {item.title}
              </a>
            ))}

            <div className="group max-lg:mt-4 h-[45px] relative">
              <a
                className="relative flex items-center bg-background justify-center z-50 border-2 border-foreground pr-3 rounded-lg  w-fit transition-transform duration-200 group-hover:text-foreground group-hover:-translate-y-[3px] group-hover:-translate-x-1 group-active:-translate-y-[1px] group-active:-translate-x-0.5 group-active:inset-ring-2 group-active:inset-ring-foreground cursor-pointer text-sm"
                href="/assets/resume2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PokeBallPark location={"nav"} />
                Resume
              </a>
              <div className="absolute inset-0 z-10 border border-foreground bg-foreground rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
