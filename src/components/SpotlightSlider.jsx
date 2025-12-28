import { useEffect, useState } from "react";

export default function SpotlightSlider({ items, onSelect }) {
  const [index, setIndex] = useState(0);

  // ⏱ Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [items.length]);

  const current = items[index];

  return (
    <div className="spotlight">
      <img
        src={current.image}
        alt={current.title}
        className="spotlight-img"
      />

      <div className="spotlight-overlay">
        <h2>{current.title}</h2>
        <p>{current.description || "Top rated spotlight content"}</p>

        <button onClick={() => onSelect(current)}>
          View Details
        </button>
      </div>
    </div>
  );
}
