import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-beigeLight text-textPrimary p-6">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="mb-2">
        Hi, I’m Enes. I’m 27 and just started coding.
      </p>
      <p className="mb-2">
        This is my project for a web development bootcamp.
      </p>
      <p>
        My code is on GitHub:{" "}
        <a
          href="https://github.com/logicness-agency/dog-breed-explorer"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          github.com/logicness-agency/dog-breed-explorer
        </a>
      </p>
    </div>
  );
}
