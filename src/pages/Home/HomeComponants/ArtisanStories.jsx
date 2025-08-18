import { useNavigate } from "react-router-dom";
import CtAvtar from "@/assets/images/ct-avatar.png";

const artisans = [
  {
    id: 1,
    name: "Aarav Sharma",
    location: "Jaipur, India",
    craft: "Hand Block Printing",
    image: CtAvtar,
  },
  {
    id: 2,
    name: "Meera Patel",
    location: "Kutch, India",
    craft: "Embroidery",
    image: CtAvtar,
  },
  {
    id: 3,
    name: "Ravi Kumar",
    location: "Varanasi, India",
    craft: "Silk Weaving",
    image: CtAvtar,
  },
];

export default function ArtisanStories() {
  const navigate = useNavigate();

  return (
    <section className="pt-4 md:pt-8 lg:pt-12 pb-8 md:pb-12 lg:pb-20 bg-[#ffe6cd]" id="artisans">
      <div className="px-4 md:px-8 lg:px-16 xl:px-24 text-center">
        <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-bold font-cormorant text-[var(--text-hover-clr)] mb-4">
          Meet the Hands Behind the Art
        </h2>
        <p className="font-nexa text-gray-600 max-w-2xl mx-auto mb-6 md:mb-12">
          Discover the incredible journeys of our artisans — their struggles,
          achievements, and timeless crafts that make every product unique.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {artisans.map((artisan) => (
            <div
              key={artisan.id}
              onClick={() => navigate(`/artisan/${artisan.id}`)}
              className="cursor-pointer bg-gray-50 rounded-2xl border-2 border-gray-200 overflow-hidden transition"
            >
              <img
                src={artisan.image}
                alt={artisan.name}
                className="w-full object-contain"
              />
              <div className="p-4 lg:p-6 text-left">
                <h3 className="font-nexa text-xl font-semibold text-[var(--text-hover-clr)]">
                  {artisan.name}
                </h3>
                <p className="text-gray-500 font-nexa">{artisan.location}</p>
                <p className="text-[var(--text-clr)] font-medium mt-2 font-nexa">
                  {artisan.craft}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
}
