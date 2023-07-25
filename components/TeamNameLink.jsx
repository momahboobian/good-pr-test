import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const TeamNameLink = ({ name, homepage }) => {
  return (
    <ul className="space-y-4 z-20 -ml-20 hidden sm:block">
      <li className="flex items-center">
        <a
          href={homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-xl text-white font-light p-2 border rounded-md  hover:text-[#37BCBA] hover:border-[#37BCBA] "
        >
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            className="w-[15px] mr-3 hidden md:block"
          />
          Team {name}
        </a>
      </li>
      {/* Other list items */}
    </ul>
  );
};

export default TeamNameLink;
