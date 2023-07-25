import React, { useEffect, useState } from "react";
import jsonData from "g1-e-commerce.json";

const IssueList = ({ repoUrl }) => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    console.log("jsonData.pulls:", jsonData.pulls);
    setIssues(jsonData.issues || []);
  }, []);

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
