import React from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();

  return (
    <>
      <h1>Product detail</h1>
      <p>{params.id}</p>
      <Link to=".." relative="path">
        Go back to products page
      </Link>
    </>
  );
}
