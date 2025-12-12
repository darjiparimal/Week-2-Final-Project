import React from "react";
import "./Sections.css";

function CatalogSection() {
  return (
    <section className="section-container">
      <h1 className="section-title">Catalog</h1>

      <div className="catalog-grid">
        {[1, 2, 3].map((item) => (
          <div key={item} className="catalog-card">
            <h3>Item {item}</h3>
            <p>Beautiful item with stylish modern UI.</p>
            <button className="small-btn">View</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CatalogSection;
