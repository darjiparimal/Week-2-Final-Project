import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Movies from "./pages/Movies";
import Watchlist from "./pages/Watchlist";

export default function App() {
  const [section, setSection] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Load watchlist from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("watchlist");
    if (saved) {
      setWatchlist(JSON.parse(saved));
    }
  }, []);

  // Save watchlist to localStorage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  // Toggle add/remove
  function toggleWatchlist(item) {
    setWatchlist(prev => {
      const exists = prev.some(i => i.id === item.id);
      if (exists) {
        return prev.filter(i => i.id !== item.id);
      }
      return [...prev, item];
    });
  }

  return (
    <div className="app-layout">
      <Navbar
        section={section}
        setSection={setSection}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Sidebar
        open={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
        setSection={setSection}
        section={section}
      />

      <main className="main-content">
        {section === "Home" && (
          <Home
            watchlist={watchlist}
            toggleWatchlist={toggleWatchlist}
          />
        )}

        {section === "Anime" && (
          <Anime
            searchQuery={searchQuery}
            watchlist={watchlist}
            toggleWatchlist={toggleWatchlist}
          />
        )}

        {section === "Movies" && (
          <Movies
            searchQuery={searchQuery}
            watchlist={watchlist}
            toggleWatchlist={toggleWatchlist}
          />
        )}

        {section === "Watchlist" && (
          <Watchlist
            watchlist={watchlist}
            toggleWatchlist={toggleWatchlist}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
