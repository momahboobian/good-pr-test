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
    <Loading />
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
