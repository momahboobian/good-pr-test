import React, { useEffect, useState } from "react";
import jsonData from "../../g1-e-commerce.json";

const PullRequestList = ({ repoUrl }) => {
  const [pullRequests, setPullRequests] = useState([]);

  // useEffect(() => {
  //   const fetchPullRequests = async () => {
  //     try {
  //       const response = await fetch(repoUrl);
  //       const data = await response.json();
  //       setPullRequests(data);
  //     } catch (error) {
  //       console.error("Error fetching pull requests:", error);
  //     }
  //   };

  //   fetchPullRequests();
  // }, [repoUrl]);

  useEffect(() => {
    setPullRequests(jsonData);
  }, []);

  return (
    <div>
      <h2>Number of Pull Requests: {pullRequests.length}</h2>
      <ul>
        {pullRequests.map((pullRequest) => (
          <li key={pullRequest.id}>
            {`${pullRequest.number}. ${pullRequest.title} State: ${pullRequest.state}`}
            <p className=" bg-green-500 text-white">
              Created by: {pullRequest.user.login}
            </p>
            <p>Created at: {pullRequest.created_at}</p>
            <p>Body: {pullRequest.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PullRequestList;
