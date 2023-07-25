import { useEffect, useState } from "react";

export default function Home() {
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    fetch("/api/repo")
      .then((response) => response.json())
      .then((data) => setRepoData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!repoData) {
    return <div> Loading...</div>;
  }

  const { name, owner, collaborators } = repoData;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <div className="mb-2">
          <span className="font-bold">Owner: </span>
          <span>{owner}</span>
        </div>
        <div className="mb-2">
          <span className="font-bold">Collaborators: </span>
          <ul>
            {collaborators.map((collaborator) => (
              <li key={collaborator}>{collaborator}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
