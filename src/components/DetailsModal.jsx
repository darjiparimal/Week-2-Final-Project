import { useState } from "react";

export default function DetailsModal({ item, close }) {
  const [playingVideo, setPlayingVideo] = useState(null);

  if (!item) return null;

  const isAnime = Array.isArray(item.episodes);
  const isMovie = !!item.video;

  return (
    <div className="details-modal">
      <div className="modal-content">
        {/* HEADER */}
        <h2>{item.title}</h2>

        {/* IMAGE */}
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "100%",
              maxHeight: "350px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "16px"
            }}
          />
        )}

        {/* DESCRIPTION */}
        <p style={{ color: "#ccc", marginBottom: "14px" }}>
          {item.description}
        </p>

        {/* RATING */}
        {item.rating && (
          <p style={{ marginBottom: "16px" }}>
            ⭐ <strong>{item.rating}</strong> / 10
          </p>
        )}

        {/* ===== ANIME EPISODES ===== */}
        {isAnime && (
          <div className="episode-list">
            <h3>Episodes</h3>

            {item.episodes.map((ep) => (
              <div
                key={ep.ep}
                className="episode-item"
                onClick={() => setPlayingVideo(ep)}
              >
                <span>EP {ep.ep}</span>
                <p>{ep.title}</p>
              </div>
            ))}
          </div>
        )}

        {/* ===== MOVIE PLAY BUTTON ===== */}
        {isMovie && (
          <button
            className="watch-btn"
            style={{ marginTop: "16px" }}
            onClick={() =>
              setPlayingVideo({
                title: item.title,
                video: item.video
              })
            }
          >
            ▶ Play Movie
          </button>
        )}

        {/* CLOSE */}
        <button className="close-btn" onClick={close}>
          Close
        </button>
      </div>

      {/* ===== VIDEO MODAL ===== */}
      {playingVideo && (
        <div className="video-modal">
          <div className="modal-content">
            <h2>{playingVideo.title}</h2>

            <video
              src={playingVideo.video}
              controls
              autoPlay
            />

            <button
              className="close-btn"
              onClick={() => setPlayingVideo(null)}
            >
              Close Video
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
