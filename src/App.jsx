import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ItemForm from "./components/ItemForm";
import ItemCard from "./components/ItemCard";
import Footer from "./components/Footer";
import { sampleItems } from "./data/sampleData";

export default function App() {
  const [active, setActive] = useState("Home"); // Home | About | Project
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");

  // load from localStorage or sample items
  useEffect(() => {
    try {
      const raw = localStorage.getItem("neon_items");
      setItems(raw ? JSON.parse(raw) : sampleItems);
    } catch {
      setItems(sampleItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("neon_items", JSON.stringify(items));
  }, [items]);

  function addItem(newItem) {
    // newItem should already be formed {id,title,category,description,image,...}
    setItems(prev => [newItem, ...prev]);
  }

  function toggleLike(id) {
    setItems(prev => prev.map(it => it.id === id ? {...it, liked: !it.liked} : it));
  }

  function toggleComplete(id) {
    setItems(prev => prev.map(it => it.id === id ? {...it, completed: !it.completed} : it));
  }

  function deleteItem(id) {
    if (!confirm("Delete this item?")) return;
    setItems(prev => prev.filter(it => it.id !== id));
  }

  function clearAll() {
    if (!confirm("Clear all items?")) return;
    setItems([]);
  }

  const visible = items.filter(it => 
    !filter || it.title.toLowerCase().includes(filter.toLowerCase()) || it.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="neon-app">
      <Navbar active={active} onSwitch={setActive} />
      <div className="container-fluid">
        <div className="row gx-0">
          <aside className="col-md-3 neon-sidebar p-4 d-none d-md-block">
            <Sidebar active={active} onSwitch={setActive} itemCount={items.length} />
          </aside>

          <main className="col-md-9 p-4">
            {/* HERO on Home */}
            {active === "Home" && (
              <>
                <section className="hero mb-4">
                  <h1 className="hero-title">Welcome To The Anime World</h1>
                  <p className="hero-sub">A futuristic anime + movie dashboard — add, manage, and like your favorites.</p>

                  <div className="chip-row mt-3">
                    {["Anime","Movie","Web Series","Favorites","Reviews"].map(label => (
                      <button key={label} className="chip">{label}</button>
                    ))}
                    <button className="chip outline">Fast Add</button>
                    <button className="chip outline">Organize</button>
                    <button className="chip outline">Watchlist</button>
                  </div>
                </section>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="search-wrap">
                    <input className="form-control" placeholder="Search by title or category..." value={filter} onChange={e => setFilter(e.target.value)} />
                  </div>
                  <div>
                    <button className="btn btn-danger me-2" onClick={clearAll}>Clear All</button>
                    <button className="btn btn-outline-light" onClick={() => { setItems(sampleItems); }}>Load Sample</button>
                  </div>
                </div>

                <section className="grid">
                  <div className="row">
                    {visible.length === 0 && <div className="col-12"><div className="alert alert-info">No items — add one in Project section.</div></div>}
                    {visible.map(item => (
                      <ItemCard key={item.id} item={item} toggleLike={toggleLike} toggleComplete={toggleComplete} deleteItem={deleteItem} />
                    ))}
                  </div>
                </section>
              </>
            )}

            {/* Project - Add Form */}
            {active === "Project" && (
              <section>
                <h2 className="mb-3">Add Item</h2>
                <ItemForm addItem={addItem} />
              </section>
            )}

            {/* About */}
            {active === "About" && (
              <section>
                <h2>About</h2>
                <p>This Week-2 project is a red-X-black themed UI built with React. It includes add/list/delete features and is ready to connect to a backend.</p>
                <ul>
                  <li>Navbar & Sidebar</li>
                  <li>Hero and chips</li>
                  <li>Add item form & thumbnails</li>
                </ul>
              </section>
            )}

            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
