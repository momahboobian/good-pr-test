"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faUsers,
  faFileAlt,
  faHome,
  faDashboard,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
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
          className="text-white cursor-pointer text-2xl"
          onClick={toggleMenu}
        />
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faGithub}
          className="text-[#3da09f] w-[20px] mr-2"
          onClick={toggleMenu}
        />

        <h1 className="font-bold text-xl text-white">
          <span className="mr-2">GOOD</span>
          <span className="text-[#37BCBA]">PR</span>
        </h1>
      </div>

      {(showMenu || !isMobile) && ( // Render the sidebar when showMenu is true or on larger screens
        <ul
          className={`flex xl:flex-col justify-start items-start gap-6 xl:pt-20 whitespace-nowrap`}
        >
          <li className="flex items-center">
            <Link href="/" className="flex items-center">
              <FontAwesomeIcon icon={faHome} className="w-[15px] mr-3" />
              <span>Teams</span>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

// useEffect(() => {
//   const checkIsMobile = () => {
//     setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
//   };

//   // Initial check
//   checkIsMobile();

//   // Event listener for window resize
//   window.addEventListener("resize", checkIsMobile);

//   // Clean up the event listener on component unmount
//   return () => window.removeEventListener("resize", checkIsMobile);
// }, []);

// const handleBurgerMenuClick = () => {
//   setShowSidebar(!showSidebar);
// };

// if (isMobile) {
//   return (
//     <div className="relative">
//       <div
//         className=" flex fixed space-x-6 p-6 bg-local bg-[#1A1E1F]
//        bg-repeat-x w-full m-0 h-24 z-50 items-center"
//       >
//         <FiMenu
//           size={40} // Increase the size to 40
//           className="cursor-pointer text-[#606467] mr-2
//           "
//           onClick={handleBurgerMenuClick}
//         />
//         <SidebarLogo className="w-auto h-8" />
//       </div>
//       <div
//         className={`fixed z-20 first-letter:top-0 left-0 w-56 h-full bg-black bg-opacity-50 transform transition-transform duration-300 ${
//           showSidebar ? "translate-x-0 w-1/3" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col items-center gap-10 pt-14 p-4 h-full min-w-sm bg-[#1A1E1F] text-white">
//           <SidebarDashboard />
//           {showSidebar && (
//             <>
//               {/* <SidebarTeams /> */}
//               {/* <SidebarDarkMode /> */}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
