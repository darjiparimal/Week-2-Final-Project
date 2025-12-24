import ItemCard from "../components/ItemCard";

export default function Watchlist({ watchlist, toggleWatchlist }) {
  if (watchlist.length === 0) {
    return (
      <div style={{ textAlign: "center", color: "#aaa" }}>
        <h2>Your Watchlist is Empty</h2>
        <p>Add anime or movies to see them here.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>My Watchlist</h1>

      <div className="grid">
        {watchlist.map(item => (
          <ItemCard
            key={item.id}
            item={item}
            watchlist={watchlist}
            toggleWatchlist={toggleWatchlist}
          />
        ))}
      </div>
    </div>
  );
}
