import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-container">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search anime or movies..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
