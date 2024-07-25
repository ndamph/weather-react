import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <header>
        <form>
          <input
            type="search"
            classNaame="searchBar"
            placeholder="Enter a city.."
            autofocus
            required
          />
          <input type="submit" className="searchButton" value="Search" />
        </form>
      </header>
    </div>
  );
}
