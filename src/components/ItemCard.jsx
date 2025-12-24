import Rating from "./Rating";

export default function ItemCard({
  item,
  watchlist,
  toggleWatchlist,
  onDetails
}) {
  const isSaved = watchlist?.some(i => i.id === item.id);

  return (
    <div className="item-card" onClick={onDetails}>
      <img src={item.image} alt={item.title} />

      <div className="card-overlay">
        <h5>{item.title}</h5>

        <Rating value={item.rating} />

        <button
          className={`watch-btn ${isSaved ? "saved" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWatchlist(item);
          }}
        >
          {isSaved ? "✔ In Watchlist" : "+ Add to Watchlist"}
        </button>
      </div>
    </div>
  );
}
