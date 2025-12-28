import { useState } from "react";
import ItemCard from "../components/ItemCard";
import DetailsModal from "../components/DetailsModal";
import { animeList } from "../data/animeData";

export default function Anime({ searchQuery, watchlist, toggleWatchlist }) {
  const [selected, setSelected] = useState(null);

  const filteredAnime = animeList.filter((anime) =>
    anime.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-content">
      <h1>Anime</h1>

      <div className="grid">
        {filteredAnime.length > 0 ? (
          filteredAnime.map((anime) => (
            <ItemCard
              key={anime.id}
              item={anime}
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist}
              onOpen={() => setSelected(anime)} // ✅ FIX
            />
          ))
        ) : (
          <p style={{ color: "#aaa" }}>No anime found</p>
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
