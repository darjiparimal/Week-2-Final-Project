import { useState } from "react";

export default function AddItemForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !image.trim()) {
      alert("Please fill all fields");
      return;
    }

    const newItem = {
      id: Date.now(),
      title,
      image,
    };

    onAdd(newItem);

    setTitle("");
    setImage("");
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h4 className="text-danger mb-2">Add New</h4>

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button className="btn btn-danger w-100">Add</button>
    </form>
  );
}
