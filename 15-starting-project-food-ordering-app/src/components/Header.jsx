import React from "react";
import Logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="A restaurant logo" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <button className="text-button">Cart (0)</button>
      </nav>
    </header>
  );
}
