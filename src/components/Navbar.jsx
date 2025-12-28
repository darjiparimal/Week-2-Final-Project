export default function Navbar({
  section,
  setSection,
  toggleSidebar,
  searchQuery,
  setSearchQuery
}) {
  const logo = "/favicon.png";

  return (
    <nav className="neon-nav">
      <div className="nav-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>

        {/* LOGO + BRAND */}
        <div className="brand" onClick={() => setSection("Home")}>
          <img src={logo} alt="Logo" className="brand-logo" />
          Anime<span>World</span>
        </div>
      </div>

      <div className="nav-search">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search anime or movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="nav-right">
        <button
          className={`nav-btn ${section === "Anime" ? "active" : ""}`}
          onClick={() => setSection("Anime")}
        >
          Anime
        </button>
        <button
          className={`nav-btn ${section === "Movies" ? "active" : ""}`}
          onClick={() => setSection("Movies")}
        >
          Movies
        </button>
        <button
          className={`nav-btn ${section === "Watchlist" ? "active" : ""}`}
          onClick={() => setSection("Watchlist")}
        >
          Watchlist
        </button>
      </div>
    </nav>
  );
}
