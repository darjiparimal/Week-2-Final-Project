import { useState } from "react";
import { movies } from "../data/moviesData";
import ItemCard from "../components/ItemCard";
import VideoModal from "../components/VideoModal";

export default function Movies({ searchQuery, watchlist, toggleWatchlist }) {
  const [activeVideo, setActiveVideo] = useState(null);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="grid">
        {filteredMovies.map(movie => (
          <ItemCard
            key={movie.id}
            item={movie}
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
