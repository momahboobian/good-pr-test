import React, { useState } from "react";
import FormField from "@components/FormField";
import IssueList from "@components/IssueList";
import PullRequestList from "@components/PullRequestList";

const InputForm = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    person: "",
    role: "",
    projectBrief: "",
    slackChannel: "",
    githubUsername: "",
    githubRepo: "",
    githubProjectBoard: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [extractedPath, setExtractedPath] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the form data in the submittedData state
    setSubmittedData(formData);
    // Extract the repository path
    const repoUrlParts = formData.githubRepo.split("https://github.com");
    if (repoUrlParts.length > 1) {
      const extractedPath = repoUrlParts[1];
      setExtractedPath(extractedPath);
    }

    // Reset form data
    setFormData({
      teamName: "",
      person: "",
      role: "",
      projectBrief: "",
      slackChannel: "",
      githubUsername: "",
      githubRepo: "",
      githubProjectBoard: "",
    });
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Team Name"
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
          />
          <FormField
            label="Person"
            name="person"
            value={formData.person}
            onChange={handleChange}
          />
          <FormField
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
          <FormField
            label="Project Brief"
            name="projectBrief"
            value={formData.projectBrief}
            onChange={handleChange}
          />
          <FormField
            label="Slack #channel"
            name="slackChannel"
            value={formData.slackChannel}
            onChange={handleChange}
          />
          <FormField
            label="GitHub Username"
            name="githubUsername"
            value={formData.githubUsername}
            onChange={handleChange}
          />
          <FormField
            label="GitHub Repo"
            name="githubRepo"
            value={formData.githubRepo}
            onChange={handleChange}
          />
          <FormField
            label="GitHub Project Board"
            name="githubProjectBoard"
            value={formData.githubProjectBoard}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
          {extractedPath && (
            <div className="mt-4 bg-blue-500 text-white px-4 py-2 mt-4 rounded">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2">
                  <IssueList
                    repoUrl={`https://api.github.com/repos${extractedPath}/issues`}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <PullRequestList
                    repoUrl={`https://api.github.com/repos${extractedPath}/pulls?state=all`}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InputForm;
