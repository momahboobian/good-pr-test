"use client";

import React, { useEffect, useState } from "react";
import { fetchContributors } from "./components/collaborator";

export default function Home() {
  const [collaborators, setCollaborators] = useState<Contributor[]>([]);

  useEffect(() => {
    fetchContributors().then((data) => {
      setCollaborators(data);
    });
  }, []);

  return (
    <div>
      <h1>Collaborators</h1>
      {/* <div id="collaborator-container" className="flex flex-wrap">
        {collaborators.length > 0 ? (
          collaborators.map((collaborator: Contributor) => (
            <div key={collaborator.id}>
              <h3>{collaborator.login}</h3>
              <img src={collaborator.avatar_url} alt={collaborator.login} />
            </div>
          ))
        ) : (
          <p>No collaborators found.</p>
        )}
      </div> */}
    </div>
  );
}
