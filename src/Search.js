import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <header>
        <form>
          <input
            type="search"
            class="searchBar"
            placeholder="Enter a city.."
            id="search-bar"
            autofocus
            required
          />
          <input
            type="submit"
            class="searchButton"
            value="Search"
            id="search-button"
          />
        </form>
      </header>
    </div>
  );
}
