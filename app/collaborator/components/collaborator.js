import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: "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",
});

export async function fetchContributors() {
  try {
    const response = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "nataliiazab",
      repo: "good-pr",
    });

    // Handle the response data here
    const contributors = response.data;

    // Render the collaborator information or update your app state
    console.log(contributors);
  } catch (error) {
    // Handle any errors that occur during the request
    console.error("Error fetching contributors:", error);
  }
}
