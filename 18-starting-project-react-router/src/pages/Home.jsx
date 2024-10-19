import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>My home page!</h1>
      <p>
        Go to the <Link to="/products">list of products</Link>
      </p>
    </>
  );
}
