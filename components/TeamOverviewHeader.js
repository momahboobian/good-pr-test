"use client";

import React, { useEffect, useState, useRef } from "react";
import ShareButton from "@components/ShareButton";
import TeamNameLink from "@components/TeamNameLink";
import ProjectCard from "@components/ProjectCard";
import OverallInfoCard from "@components/OverallInfoCard";
import TeamActivityPie from "@components/TeamActivityPie";
import TasksActivity from "@components/TasksActivity";

export default function TeamOverview() {
  const [repo, setRepo] = useState({});
  const [issuesClosed, setIssuesClosed] = useState([]);
  const [issuesOpen, setIssuesOpen] = useState([]);
  const [pr, setPR] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/GitHubInfo");
        const data = await response.json();
        setRepo(data[0]);
        setIssuesClosed(data[1]);
        setIssuesOpen(data[2]);
        setPR(data[3]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const containerRef = useRef(null);

  return isLoading ? (
    <div className="flex items-center justify-center min-h-screen">
      <svg
        className="animate-spin h-20 w-20 text-[#36BCBA]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          className="fill-current"
          d="M12 0a12 12 0 00-3.91 23.38c.62.12.84-.27.84-.6l-.02-2.1c-3.44.75-4.18-1.66-4.18-1.66-.57-1.46-1.4-1.85-1.4-1.85-1.14-.78.09-.76.09-.76 1.27.09 1.94 1.31 1.94 1.31 1.13 1.94 2.97 1.38 3.69 1.06.11-.82.44-1.38.8-1.7-2.81-.32-5.75-1.4-5.75-6.22 0-1.37.49-2.48 1.31-3.36-.13-.32-.57-1.59.12-3.31 0 0 1.05-.34 3.44 1.28a11.98 11.98 0 016 0c2.39-1.62 3.44-1.28 3.44-1.28.69 1.73.25 2.99.12 3.31.81.88 1.31 1.99 1.31 3.36 0 4.83-2.94 5.89-5.76 6.2.45.38.85 1.15.85 2.32l-.01 3.44c0 .33.22.72.85.6A12 12 0 0012 0z"
        />
      </svg>
    </div>
  ) : (
    <div className="flex flex-col justify-start w-full">
      <div className="flex justify-between items-center md:pt-2 p-4">
        <div className="flex flex-col justify-between p-4 -ml-3">
          <h1 className="font-bold text-white py-4">Team Overview</h1>
          <p className="font-light text-xs text-gray-500">
            Track your projects, tasks & team activity here
          </p>
        </div>
        <TeamNameLink name={repo.name} homepage={repo.homepage} />
        <ShareButton />
      </div>

      <div className="relative">
        <div
          ref={containerRef}
          className="grid sm:flex gap-6 md:gap-8 xl:gap-12 2xl:gap-16 p-4 lg:p-6 overflow-x-auto"
        >
          <ProjectCard repo={repo} pr={pr} />
          <TeamActivityPie pr={pr} />
          <OverallInfoCard
            issuesClosed={issuesClosed}
            issuesOpen={issuesOpen}
          />
        </div>
        {/* <div className="absolute -bottom-8 left-0 right-0 flex justify-center md:hidden">
          <button
            className="px-3 py-2 bg-[#3da09f] text-white rounded-l"
            onClick={handleSlideLeft}
          >
            {"<<<"}
          </button>
          <button
            className="px-3 py-2 bg-[#3da09f] text-white rounded-r"
            onClick={handleSlideRight}
          >
            {">>>"}
          </button>
        </div> */}
      </div>
      <TasksActivity
        issuesClosed={issuesClosed}
        issuesOpen={issuesOpen}
        repo={repo}
      />
    </div>
  );
}
