import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 style={headerStyle}>To Do List</h1>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  padding: "10px",
  textAlign: "center"
};

export default Header;
