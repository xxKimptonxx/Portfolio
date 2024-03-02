import React from 'react';

function ProjectsPage({ dark }) {
  document.title = "Projects | Kimpton";
  return (
    <>
      <h1 style={{ color: dark ? "#ffffff" : "#000000" }}>Projects:</h1>
      <p style={{ color: dark ? "#ffffff" : "#000000" }}>
        My projects are uploaded to{" "}
        <a
          target="_blank"
          rel="noreferrer"
          style={{ color: dark ? "#ffffff" : "#000000" }}
          href="https://github.com/xxKimptonxx"
        >
          my github at https://github.com/xxKimptonxx.
        </a>
      </p>
    </>
  );
}

export default ProjectsPage;