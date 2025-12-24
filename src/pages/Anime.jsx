import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/ItemCard";
import { animeList } from "../data/animeData";

export default function Anime({ watchlist, toggleWatchlist }) {
  const [search, setSearch] = useState("");

  const filteredAnime = animeList.filter((anime) =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main-content">
      <h1>Anime</h1>

      <SearchBar value={search} onChange={setSearch} />

      <div className="grid">
        {filteredAnime.map((anime) => (
          <ItemCard
            key={anime.id}
            item={anime}
            watchlist={watchlist}
            toggleWatchlist={toggleWatchlist}
          />
        ))}
      </div>
    </div>
  );
}
