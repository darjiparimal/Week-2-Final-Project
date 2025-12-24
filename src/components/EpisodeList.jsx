// src/components/EpisodeList.jsx
export default function EpisodeList({ episodes, onPlay }) {
  return (
    <div className="episode-list">
      <h3>Episodes</h3>

      {episodes.map((ep) => (
        <div
          key={ep.ep}
          className="episode-item"
          onClick={() => onPlay(ep.video)}
        >
          <span>EP {ep.ep}</span>
          <p>{ep.title}</p>
        </div>
      ))}
    </div>
  );
}
