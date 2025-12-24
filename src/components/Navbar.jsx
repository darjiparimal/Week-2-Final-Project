import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";

export default function Navbar({ section, setSection, toggleSidebar, searchQuery, setSearchQuery }) {
  return (
    <nav className="neon-nav">
      {/* LEFT */}
      <div className="nav-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>

        <h2 className="brand" onClick={() => setSection("Home")}>
          <span>ANIME</span> WORLD
        </h2>
      </div>

      {/* CENTER SEARCH */}
      <div className="nav-search">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search anime or movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* RIGHT BUTTONS */}
      <div className="nav-right">
        {["Home", "Anime", "Movies", "Watchlist"].map(btn => (
          <button
            key={btn}
            className={`nav-btn ${section === btn ? "active" : ""}`}
            onClick={() => setSection(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </nav>
  );
}
