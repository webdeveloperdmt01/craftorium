import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "./CartContext.jsx";

export default function ProductPage() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product;

    const { addToCart } = useCart();
    const [selectedImage, setSelectedImage] = useState(product?.image);
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <p className="text-center mt-20 text-xl font-nexa">
                Product not found!
            </p>
        );
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        alert(`${product.name} (${quantity}) added to cart!`);
    };

    return (
        <div className="bg-[#fef6eb] px-4 md:px-8 lg:px-12 xl:px-24 py-20 flex flex-col lg:flex-row gap-10">

            <div className="flex flex-col gap-4 lg:w-1/2">
                <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full h-[420px] object-cover rounded-xl border border-[#184309]"
                />
                <div className="flex gap-4 mt-2 overflow-x-auto">
                    {product.images?.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`Thumbnail ${idx}`}
                            className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${selectedImage === img ? "border-black" : "border-gray-200"
                                }`}
                            onClick={() => setSelectedImage(img)}
                        />
                    ))}
                </div>
            </div>

            <div className="lg:w-1/2 flex flex-col justify-between">
                <div>
                    <h1 className="text-4xl font-bold mb-4 font-cormorant">{product.name}</h1>

                    <div className="flex items-center gap-4 mb-4">
                        <p className="text-3xl font-semibold font-nexa">₹{product.price}</p>
                        {product.originalPrice && (
                            <p className="text-gray-500 line-through font-nexa">
                                ₹{product.originalPrice}
                            </p>
                        )}
                        {product.discount && (
                            <p className="text-green-600 font-medium font-nexa">
                                {product.discount}% OFF
                            </p>
                        )}
                    </div>

                    {product.rating && (
                        <p className="mb-4 text-yellow-500 font-medium font-nexa">
                            ⭐ {product.rating} / 5
                        </p>
                    )}

                    <p className="text-gray-700 mb-6 font-nexa">{product.description}</p>

                    <div className="flex items-center gap-4 mb-6">
                        <span className="font-semibold">Quantity:</span>
                        <div className="flex items-center border rounded-lg overflow-hidden">
                            <button
                                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                            >
                                -
                            </button>
                            <span className="px-4">{quantity}</span>
                            <button
                                onClick={() => setQuantity(q => q + 1)}
                                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={() => {
                            handleAddToCart();
                            navigate("/cart");
                        }}
                        className="font-nexa w-full sm:w-auto px-6 py-3 bg-[var(--text-hover-clr)] text-white rounded-xl hover:bg-[var(--text-clr)] transition font-semibold"
                    >
                        Add to Cart
                    </button>

                    <button
                        className="font-nexa w-full sm:w-auto px-6 py-3 border border-[var(--text-hover-clr)] rounded-xl hover:bg-[var(--text-hover-clr)] hover:text-white transition font-semibold"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}
