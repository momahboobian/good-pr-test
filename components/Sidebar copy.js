"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SidebarLogo from "@components/SidebarLogo";
import SidebarDashboard from "@components/SidebarDashboard";
import SidebarTeams from "@components/SidebarTeams";
import SidebarDarkMode from "@components/SidebarDarkMode";

export default function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (!isMobile) {
      document.body.style.overflow = showMenu ? "auto" : "hidden";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for mobile
    setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex xl:flex-col justify-start items-center gap-10 p-4 xl:pt-10 h-full xl:w-[200px] bg-[#1A1E1F] text-white min-h-[100px]">
      <div className="flex items-center sm:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="z-20 text-white cursor-pointer text-3xl pl-3"
          onClick={toggleMenu}
        />
        <div
          className={`z-20 fixed top-24 left-0 w-1/2 h-screen bg-[#1A1E1F] transform transition-transform duration-300 ${
            showMenu ? "translate-x-0 w-1/3" : "-translate-x-full"
          }`}
        >
          <div className="fixed top-5 p-10">
            <SidebarDashboard toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>

      <div>
        <SidebarLogo className="z-20 w-auto h-8" />
      </div>

      <div className="fixed z-10 bg-gray-300 top-0 left-0 h-screen sm:hidden"></div>

      {!isMobile ? (
        <>
          <SidebarDashboard />
          {/* <SidebarTeams />
          <SidebarDarkMode /> */}
        </>
      ) : null}
    </div>
  );
}
