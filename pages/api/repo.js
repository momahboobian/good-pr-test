import { Octokit } from "@octokit/core";

export default async function handler(req, res) {
  const octokit = new Octokit({
    auth: ProcessingInstruction.env.GITHUB_ACCESS_TOKEN,
  });

  try {
    const repoResponse = await octokit.repos.get({
      owner: "LorenaCapraru",
      repo: "g1-e-commerce-app",
    });

    const collaboratorsResponse = await octokit.repos.listCollaborators({
      owner: "LorenaCapraru",
      repo: "g1-e-commerce-app",
    });

    const { name, owner } = repoResponse.data;
    const collaborators = collaboratorsResponse.data.map(
      (collaborator) => collaborator.login
    );

    res.status(200).json({ name, owner, collaborators });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch repository data" });
  }
}
