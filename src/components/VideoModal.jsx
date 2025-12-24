// src/components/VideoModal.jsx
export default function VideoModal({ video, onClose }) {
  return (
    <div className="video-modal">
      <div className="modal-content">
        <video controls autoPlay>
          <source src={video} type="video/mp4" />
        </video>

        <button className="close-btn" onClick={onClose}>
          Close Player
        </button>
      </div>
    </div>
  );
}
