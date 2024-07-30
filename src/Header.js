import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <header>
        <form className="rounded-pill">
          <input
            type="search"
            className="searchBar"
            placeholder="Enter a city.."
            autoFocus
            required
          />
          <input type="submit" className="searchButton" value="Search" />
        </form>
      </header>
    </div>
  );
}
