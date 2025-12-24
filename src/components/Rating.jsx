export default function Rating({ value }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (value >= i) stars.push("full");
    else if (value >= i - 0.5) stars.push("half");
    else stars.push("empty");
  }

  return (
    <div className="rating">
      {stars.map((type, i) => (
        <span key={i} className={`star ${type}`}>
          ★
        </span>
      ))}
      <span className="rating-text">{value}</span>
    </div>
  );
}
