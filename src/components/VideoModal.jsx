export default function VideoModal({ videoUrl, close }) {
  if (!videoUrl) return null;

  return (
    <div className="video-modal">
      <div className="video-content">
        <button className="close-btn" onClick={close}>✕</button>

        <iframe
          src={videoUrl}
          title="Video Player"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
