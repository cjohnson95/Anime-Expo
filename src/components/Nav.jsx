import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/">
        <div>My To Watch List</div>
      </Link>
      <Link to="/">
        <div>My Watched List</div>
      </Link>
    </div>
  );
}
