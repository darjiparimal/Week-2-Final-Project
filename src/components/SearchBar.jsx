// src/components/SearchBar.jsx

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search anime or movies..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
