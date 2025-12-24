import { useState } from "react";
import { animeList } from "../data/animeData";
import ItemCard from "../components/ItemCard";
import VideoModal from "../components/VideoModal";

export default function Anime({ searchQuery, watchlist, toggleWatchlist }) {
  const [activeVideo, setActiveVideo] = useState(null);

  const filteredAnime = animeList.filter(anime =>
    anime.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="grid">
        {filteredAnime.map(anime => (
          <ItemCard
            key={anime.id}
            item={anime}
            watchlist={watchlist}
            toggleWatchlist={toggleWatchlist}
            onPlay={(item) => item.video && setActiveVideo(item.video)}
          />
        ))}
      </div>

      <VideoModal
        videoUrl={activeVideo}
        close={() => setActiveVideo(null)}
      />
    </>
  );
}
