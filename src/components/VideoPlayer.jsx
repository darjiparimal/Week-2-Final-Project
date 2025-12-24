export default function VideoPlayer({ episode, close }) {
  if (!episode) return null;

  return (
    <div className="video-modal" onClick={close}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>
          Episode {episode.ep}: {episode.title}
        </h2>

        <video
          src={episode.video}
          controls
          autoPlay
        />

        <button onClick={close} className="close-btn">
          Close
        </button>
      </div>
    </div>
  );
}
