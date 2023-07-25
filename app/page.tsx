<<<<<<< HEAD
import Sidebar from "./components/Sidebar";
import TeamOverview from "./components/TeamOverview";
import ProjectDiv from "./components/ProjectDiv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between p-6">
      <div className="flex border-neutral-800 rounded-3xl overflow-hidden">
        <div className="flex flex-col items-center gap-10 pt-10 w-[200px] bg-[#1A1E1F] text-white">
          <Sidebar />
        </div>
        <div className="flex-1 w-screen bg-[#070E0E] p-6">
          {/* Content for the right div */}
          <TeamOverview />
          <ProjectDiv />
=======
import Sidebar from "@components/Sidebar";
import TeamOverviewHeader from "@components/TeamOverviewHeader";

export default function Home() {
  return (
    <main className="flex justify-center items-center lg:p-2 lg:bg-zinc-900">
      <div className="flex flex-col xl:flex-row rounded-xl overflow-hidden xl:overflow-x-auto border-gray-950">
        <div>
          <Sidebar />
        </div>
        <div className="flex justify-center items-start bg-[#070E0E] h-full md:w-screen md:p-2">
          <TeamOverviewHeader />
>>>>>>> origin/master
        </div>
      </div>
    </main>
  );
}
