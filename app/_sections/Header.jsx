"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navigation } from "../_constants";
import svg from "@/public/assets/";
import { PokeBallPark } from "../_components/design";
import { useNavigation } from "../_context/NavigationContext";
import MenuSvg from "@/public/assets/svg/NavSvg";

const logoVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const toggleVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.6 },
  },
};

const navParentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Header = () => {
  const { openNavigation, setOpenNavigation } = useNavigation();
  const [openSideNav, setOpenSideNav] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleSideNav = () => {
    const newState = !openSideNav;
    setOpenSideNav(newState);
    setOpenNavigation(newState);
  };

  // when scroll down nav disapears and vice versa
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.section
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 z-50 w-full backdrop-blur-sm bg-background-transparent ${
        openSideNav ? "backdrop-blur-sm" : "backdrop-blur-none max-lg:h-[68px]"
      }`}
    >
      <div className="flex max-lg:h-full items-center justify-between ">
        {/* fade in */}
        <motion.a
          href="/"
          className={`block pl-4 ${
            openSideNav
              ? "max-lg:w-1/3 max-lg:h-screen max-lg:backdrop-blur-sm relative max-sm:z-50 max-sm:backdrop-blur-none"
              : ""
          }`}
          variants={logoVariants}
          initial="hidden"
          animate="visible"
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
        </motion.a>
        <motion.div
          className="absolute top-3 right-4 w-fit group"
          variants={toggleVariants}
          initial="hidden"
          animate="visible"
        >
          <button
            className="relative group lg:hidden inline-flex items-center bg-background justify-center z-50 border-2 h-[45px] border-foreground pr-3 rounded-lg  w-fit transition-transform duration-200 group-hover:-translate-x-[4px] cursor-pointer"
            onClick={toggleSideNav}
          >
            <PokeBallPark location={"nav"} />
            <MenuSvg openNavigation={openNavigation} />
          </button>
          <div className="absolute inset-0 z-10 border border-foreground bg-foreground rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </motion.div>

        <nav
          className={`fixed max-lg:w-2/3 max-sm:w-full top-0 right-0 bottom-0 bg-n-8 lg:static ${
            openSideNav ? "flex" : "hidden"
          } lg:bg-transparent lg:flex bg-nav pr-4`}
        >
          <motion.div
            className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row"
            variants={navParentVariants}
            initial="hidden"
            animate="visible"
          >
            {/* fade in each one one by one */}
            {navigation.map((item) => (
              <motion.a
                key={item.id}
                href={item.url}
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector(item.url);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                  if (openSideNav) {
                    setOpenSideNav(false);
                    setOpenNavigation(false);
                  }
                }}
                className={`block text-nowrap relative text-sm transition-colors px-6 py-8 max-xl:py-6 font-red-hat text-font hover:text-foreground`}
                variants={navItemVariants}
              >
                <span className="font-nippo-light text-foreground mr-2">
                  {item.id}.
                </span>
                {item.title}
              </motion.a>
            ))}

            <motion.div
              variants={navItemVariants}
              className="group max-lg:mt-4 h-[45px] relative"
            >
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
            </motion.div>
          </motion.div>
        </nav>
      </div>
    </motion.section>
  );
};

export default Header;
