import { useParams, useNavigate } from "react-router-dom";
import CtAvtar from "@/assets/images/ct-avatar.webp";
import SilkDupatta from "@/assets/images/SilkDupatta.webp";
import { FaArrowLeft } from "react-icons/fa";

const artisanData = {
  1: {
    name: "Aarav Sharma",
    bio: "Aarav has been practicing block printing for 20+ years. His journey began with his father...",
    photos: [CtAvtar, SilkDupatta, SilkDupatta],
    products: ["Handmade Scarf", "Printed Tablecloth", "Decorative Cushion"],
  },
  2: {
    name: "Meera Patel",
    bio: "Meera is a skilled embroiderer from Kutch, known for her intricate designs...",
    photos: [CtAvtar, SilkDupatta, SilkDupatta],
    products: ["Embroidered Bag", "Traditional Shawl", "Wall Hanging"],
  },
  3: {
    name: "Ravi Kumar",
    bio: "Ravi comes from a family of weavers in Varanasi, keeping the silk weaving tradition alive...",
    photos: [CtAvtar, SilkDupatta, SilkDupatta],
    products: ["Banarasi Saree", "Silk Dupatta", "Table Runner"],
  },
};

export default function ArtisanSection() {
  const { id } = useParams();
  const navigate = useNavigate();
  const artisan = artisanData[parseInt(id)];

  if (!artisan) return <p className="p-10 text-center text-red-500">Artisan not found</p>;

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
  <button
  onClick={() => navigate(-1)}
  className="font-cormorant mb-8 flex items-center gap-2 text-[var(--text-clr)] hover:text-[var(--text-hover-clr)] font-medium transition"
>
  <FaArrowLeft className="text-2xl" /> Back to Artisans
</button>
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <img
          src={artisan.photos[0]}
          alt={artisan.name}
          className="w-48 h-48 border-2 border-r-amber-300 rounded-full object-contain shadow-lg"
        />
        <div>
          <h1 className="font-nexa text-4xl md:text-5xl font-bold mb-4 text-[var(--text-clr)]">{artisan.name}</h1>
          <p className=" font-nexa text-gray-600 text-lg">{artisan.bio}</p>
        </div>
      </div>
      <h2 className="font-cormorant text-2xl font-semibold mb-6 text-gray-800">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {artisan.photos.map((photo, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow-md transform transition hover:scale-105"
          >
            <img
              src={photo}
              alt={`${artisan.name} work ${i + 1}`}
              className="w-full object-contain"
            />
          </div>
        ))}
      </div>
      <h2 className="font-cormorant text-2xl font-semibold mb-6 text-[var(--text-hover-clr)]">Products by {artisan.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artisan.products.map((product, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl shadow-sm p-4 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <p className="font-nexa font-medium text-gray-700 text-center">{product}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
