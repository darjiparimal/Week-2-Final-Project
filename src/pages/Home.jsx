import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import DetailsModal from "../components/DetailsModal";

import { animeList } from "../data/animeData";
import { movies } from "../data/moviesData";
import { spotlightItems } from "../data/spotlightData";

export default function Home({
  searchQuery,
  watchlist,
  toggleWatchlist
}) {
  const [selected, setSelected] = useState(null);
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  // 🔍 Merge Anime + Movies
  const allItems = [...animeList, ...movies];

  // 🔍 SEARCH FILTER
  const filteredItems = allItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ⏱ AUTO SLIDE EVERY 5 SECONDS
  useEffect(() => {
    if (searchQuery) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [spotlightIndex, searchQuery]);

  // ▶ NEXT SLIDE
  const nextSlide = () => {
    setSpotlightIndex(
      (prev) => (prev + 1) % spotlightItems.length
    );
  };

  // ◀ PREVIOUS SLIDE
  const prevSlide = () => {
    setSpotlightIndex(
      (prev) =>
        prev === 0 ? spotlightItems.length - 1 : prev - 1
    );
  };

  const currentSpotlight = spotlightItems[spotlightIndex];

  return (
    <div className="main-content">

      {/* 🔥 SPOTLIGHT SLIDER */}
      {!searchQuery && currentSpotlight && (
        <div className="spotlight">

          <img
            src={currentSpotlight.image}
            alt={currentSpotlight.title}
            className="spotlight-img"
          />

          {/* ◀ ▶ CONTROLS */}
          <button className="spotlight-btn left" onClick={prevSlide}>
            ◀
          </button>

          <button className="spotlight-btn right" onClick={nextSlide}>
            ▶
          </button>

          <div className="spotlight-overlay">
            <h2>{currentSpotlight.title}</h2>
            <p>
              {currentSpotlight.description ||
                "Top trending anime & movies"}
            </p>

            <button
              className="spotlight-details-btn"
              onClick={() => setSelected(currentSpotlight)}
            >
              View Details
            </button>
          </div>
        </div>
      )}

      {/* 📦 CONTENT GRID */}
      <h1 style={{ marginTop: "30px" }}>
        {searchQuery ? "Search Results" : "Anime & Movies"}
      </h1>

      <div className="grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist}
              onOpen={() => setSelected(item)}
            />
          ))
        ) : (
          <p style={{ color: "#aaa" }}>No results found</p>
        )}
      </div>

      {/* 🎬 DETAILS MODAL */}
      {selected && (
        <DetailsModal
          item={selected}
          close={() => setSelected(null)}
        />
      )}
    </div>
  );
}
