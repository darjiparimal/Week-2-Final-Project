import { useState } from "react";
import ItemCard from "../components/ItemCard";
import DetailsModal from "../components/DetailsModal";
import { animeList } from "../data/animeData";
import { movies } from "../data/moviesData";

export default function Home({ watchlist, toggleWatchlist }) {
  const [selected, setSelected] = useState(null);

  const allItems = [...animeList, ...movies];

  return (
    <div>
      <h1>All Anime & Movies</h1>

      <div className="grid">
        {allItems.map(item => (
          <ItemCard
            key={item.id}
            item={item}
            watchlist={watchlist}
            toggleWatchlist={toggleWatchlist}
            onDetails={() => setSelected(item)}
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
