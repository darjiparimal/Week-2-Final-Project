import { useState } from "react";
import ItemCard from "../components/ItemCard";
import DetailsModal from "../components/DetailsModal";

import { animeList } from "../data/animeData";
import { movies } from "../data/moviesData";

export default function Home({
  searchQuery,
  watchlist,
  toggleWatchlist
}) {
  const [selected, setSelected] = useState(null);

  // ✅ Merge Anime + Movies
  const allItems = [...animeList, ...movies];

  // ✅ GLOBAL SEARCH FROM NAVBAR
  const filteredItems = allItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-content">
      <h1>Anime & Movies</h1>

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

      {selected && (
        <DetailsModal
          item={selected}
          close={() => setSelected(null)}
        />
      )}
    </div>
  );
}
