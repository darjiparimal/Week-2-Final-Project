export default function Sidebar({ open, closeSidebar, setSection, section }) {
  function handleNavigate(page) {
    setSection(page);
    closeSidebar(); // ✅ VERY IMPORTANT
  }

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <button className="close-btn" onClick={closeSidebar}>✖</button>

      <button
        className={section === "Home" ? "active" : ""}
        onClick={() => handleNavigate("Home")}
      >
        Home
      </button>

      <button
        className={section === "Anime" ? "active" : ""}
        onClick={() => handleNavigate("Anime")}
      >
        Anime
      </button>

      <button
        className={section === "Movies" ? "active" : ""}
        onClick={() => handleNavigate("Movies")}
      >
        Movies
      </button>

      <button
        className={section === "Watchlist" ? "active" : ""}
        onClick={() => handleNavigate("Watchlist")}
      >
        Watchlist
      </button>
    </div>
  );
}
