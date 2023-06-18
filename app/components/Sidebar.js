import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faProjectDiagram,
  faUsers,
  faCalendarAlt,
  faFileAlt,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center gap-10 pt-10 w-[200px] bg-[#1A1E1F] text-white">
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faGithub}
          className="text-[#37BCBA] w-[20px] mr-2"
        />

        <h1 className="font-bold text-xl text-white">
          <span className="mr-2">GOOD</span>
          <span className="text-[#37BCBA]">PR</span>
        </h1>
      </div>

      <ul className="flex flex-col items-start gap-6 pt-20">
        <li className="flex items-center text-[#37BCBA]">
          <FontAwesomeIcon icon={faHome} className=" w-[15px] mr-3" />
          Dashboard
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon icon={faProjectDiagram} className=" w-[15px] mr-3" />
          Projects
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon icon={faUsers} className=" w-[15px] mr-3" />
          Team
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon icon={faCalendarAlt} className=" w-[15px] mr-3" />
          Calendar
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon icon={faFileAlt} className="w-[15px] mr-3" />
          Reports
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
