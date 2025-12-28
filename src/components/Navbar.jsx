export default function Navbar({
  section,
  setSection,
  toggleSidebar,
  searchQuery,
  setSearchQuery
}) {
  // Logo from public folder (Netlify safe)
  const logo = "/favicon.png";

  return (
    <nav className="neon-nav">
      {/* LEFT */}
      <div className="nav-left">
        <button
          className="menu-btn"
          onClick={toggleSidebar}
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* LOGO + BRAND */}
        <div
          className="brand"
          onClick={() => setSection("Home")}
          role="button"
          aria-label="Go to Home"
        >
          <img
            src={logo}
            alt="AnimeWorld Logo"
            className="brand-logo"
          />
          <span className="brand-text">
            Anime<span>World</span>
          </span>
        </div>
      </div>

      {/* SEARCH */}
      <div className="nav-search">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search anime or movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <button
          className={`nav-btn ${section === "Home" ? "active" : ""}`}
          onClick={() => setSection("Home")}
        >
          Home
        </button>

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
        <button
  className="nav-btn"
  onClick={() => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  }}
>
  Logout
</button>
      </div>
    </nav>
  );
}
