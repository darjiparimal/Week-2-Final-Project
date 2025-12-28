import { useState } from "react";
import ItemCard from "../components/ItemCard";
import DetailsModal from "../components/DetailsModal";
import { movies } from "../data/moviesData";

export default function Movies({
  searchQuery,
  watchlist,
  toggleWatchlist
}) {
  const [selected, setSelected] = useState(null);

  // 🔍 SEARCH FILTER (FIXED)
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-content">
      <h1>Movies</h1>

      <div className="grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <ItemCard
              key={movie.id}
              item={movie}
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist}
              onOpen={() => setSelected(movie)}
            />
          ))
        ) : (
          <p style={{ color: "#aaa" }}>No movies found</p>
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
