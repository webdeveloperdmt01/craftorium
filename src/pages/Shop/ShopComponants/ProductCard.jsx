import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div
      className="rounded-xl shadow-md p-3 hover:shadow-xl transition bg-white font-nexa cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-72 object-fill rounded-md"
      />
      <h3 className="text-lg font-semibold mt-4 text-[var(--text-clr)]">{product.name}</h3>
      <p className="text-gray-600 text-sm">₹{product.price}</p>
      <button
        className="mt-3 w-full bg-[var(--text-hover-clr)] text-white py-2 rounded-xl hover:bg-[var(--text-clr)] transition"
        onClick={(e) => {
          e.stopPropagation(); 
          
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
