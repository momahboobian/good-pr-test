import React, { useEffect, useState } from "react";

const IssueList = ({ repoUrl }) => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch(repoUrl);
        const data = await response.json();
        setIssues(data);
      } catch (error) {
        console.error("Error fetching issues:", error);
      }
    };

    fetchIssues();
  }, [repoUrl]);

  return (
    <div>
      <h2>Number of Issues: {issues.length}</h2>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>{`${issue.number}. ${issue.title}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;
