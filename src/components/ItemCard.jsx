import { FaHeart, FaRegHeart, FaCheckCircle, FaTrash } from "react-icons/fa";

export default function ItemCard({ item, onToggleLike, onToggleComplete, onDelete }) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">

        <img 
          src={item.image}
          className="card-img-top"
          alt="thumbnail"
          style={{ height: "180px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="badge bg-primary">{item.category}</p>

          <div className="mt-3 d-flex justify-content-between">
            <button className="btn btn-outline-danger btn-sm" onClick={() => onToggleLike(item.id)}>
              {item.liked ? <FaHeart /> : <FaRegHeart />}
            </button>

            <button className="btn btn-outline-success btn-sm" onClick={() => onToggleComplete(item.id)}>
              <FaCheckCircle />
            </button>

            <button className="btn btn-outline-dark btn-sm" onClick={() => onDelete(item.id)}>
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
