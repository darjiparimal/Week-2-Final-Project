export default function ItemCard({
  item,
  watchlist,
  toggleWatchlist,
  onOpen
}) {
  const isSaved = watchlist.some((w) => w.id === item.id);

  return (
    <div className="item-card" onClick={onOpen}>
      <img src={item.image} alt={item.title} />

      <div className="card-overlay">
        <h5>{item.title}</h5>

        <button
          className={`watch-btn ${isSaved ? "saved" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWatchlist(item);
          }}
        >
          {isSaved ? "✓ Saved" : "+ Watchlist"}
        </button>
      </div>
    </div>
  );
}
