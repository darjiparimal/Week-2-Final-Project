import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Movies from "./pages/Movies";
import Watchlist from "./pages/Watchlist";
import Login from "./pages/Login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [section, setSection] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  /* 🔐 CHECK LOGIN STATUS */
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  /* 💾 LOAD WATCHLIST */
  useEffect(() => {
    const saved = localStorage.getItem("watchlist");
    if (saved) {
      setWatchlist(JSON.parse(saved));
    }
  }, []);

  /* 💾 SAVE WATCHLIST */
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  /* ⭐ ADD / REMOVE FROM WATCHLIST */
  function toggleWatchlist(item) {
    setWatchlist((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item]
    );
  }

  /* 🔒 SHOW LOGIN PAGE */
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
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
            searchQuery={searchQuery}
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
