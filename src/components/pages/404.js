import React from 'react';
import { Link } from 'react-router-dom';

function Page404({ dark }) {
  document.title = "404 | Kimpton"
  return (
    <>
      <h1 style={{ color: dark ? "#ffffff" : "#000000" }}>
        You seem to be lost.
      </h1>
      <h2 style={{ color: dark ? "#ffffff" : "#000000" }}>Error:404</h2>
      <Link to="/" style={{ color: dark ? "#ffffff" : "#000000" }}>
        Do you want to return to the homepage?
      </Link>
    </>
  );
}

export default Page404;