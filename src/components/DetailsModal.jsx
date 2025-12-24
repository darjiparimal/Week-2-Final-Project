import "./DetailsModal.css";

export default function DetailsModal({ item, close }) {
  if (!item) return null;

  return (
    <div className="modal-backdrop" onClick={close}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={close}>
          ✖
        </button>

        <h2>{item.title}</h2>

        {item.video ? (
          <video
            src={item.video}
            controls
            playsInline
            preload="metadata"
          />
        ) : (
          <p>No video available</p>
        )}

        <p className="modal-desc">{item.description}</p>
      </div>
    </div>
  );
}
