import React, { useState } from "react";

export default function ItemForm({ addItem }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("General");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return alert("Please add a title");
    const newItem = {
      id: crypto.randomUUID(),
      title: title.trim(),
      category,
      description,
      liked: false,
      completed: false,
      image: image || `https://picsum.photos/seed/${Math.floor(Math.random()*1000)}/800/450`
    };
    addItem(newItem);
    setTitle(""); setCategory("General"); setDescription(""); setImage("");
    alert("Item added");
  }

  return (
    <form className="card card-dark p-4 mb-4" onSubmit={handleSubmit}>
      <div className="row gx-2">
        <div className="col-md-6 mb-2">
          <label className="form-label">Title</label>
          <input value={title} onChange={e=>setTitle(e.target.value)} className="form-control" placeholder="Item title" />
        </div>
        <div className="col-md-6 mb-2">
          <label className="form-label">Category</label>
          <select className="form-select" value={category} onChange={e=>setCategory(e.target.value)}>
            <option>General</option>
            <option>Anime</option>
            <option>Movie</option>
            <option>Web Series</option>
          </select>
        </div>
        <div className="col-12 mb-2">
          <label className="form-label">Description</label>
          <input value={description} onChange={e=>setDescription(e.target.value)} className="form-control" placeholder="Short description" />
        </div>
        <div className="col-12 mb-2">
          <label className="form-label">Image URL (optional)</label>
          <input value={image} onChange={e=>setImage(e.target.value)} className="form-control" placeholder="Paste image link or leave blank for random" />
        </div>
        <div className="col-12">
          <button className="btn btn-neon w-100" type="submit">Add Item</button>
        </div>
      </div>
    </form>
  );
}
