import { useState } from "react";
import { movies } from "../data/moviesData";
import ItemCard from "../components/ItemCard";
import DetailsModal from "../components/DetailsModal";

export default function Movies({ watchlist, toggleWatchlist }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="main-content">
      <h1>Movies</h1>

      <div className="grid">
        {movies.map((movie) => (
          <ItemCard
            key={movie.id}
            item={movie}
            watchlist={watchlist}
            toggleWatchlist={toggleWatchlist}
            onOpen={() => setSelected(movie)}
          />
        ))}
      </div>

      {selected && (
        <DetailsModal
          item={selected}
          close={() => setSelected(null)}
        />
      )}
    </div>
  );
}
