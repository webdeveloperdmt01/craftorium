import React from "react";
import Grid1 from "@/assets/images/G1.webp";
import Grid2 from "@/assets/images/G6.webp";
import Grid3 from "@/assets/images/G5.webp";
import Grid4 from "@/assets/images/G2.webp";
import Grid5 from "@/assets/images/G4.webp";
import Grid6 from "@/assets/images/G3.webp";


const PopularItems = () => {
const products = [
  { id: 1, title: "Gold Necklaces with Pendants", price: "₹2999", img: Grid1, size: "col-span-2 row-span-2" },
  { id: 2, title: "Pure Cotton Fabric", price: "₹1440", img: Grid2 },
  { id: 3, title: "Blue Silk Fabric", price: "₹500", img: Grid3},
  { id: 4, title: "Gold Necklace", price: "₹999", img: Grid4, size: "col-span-2 row-span-2" },
  { id: 5, title: "Engagement Ring", price: "₹3999", img: Grid5 },
  { id: 6, title: "Gold and Pink Jewelries", price: "₹399", img: Grid6 },
];

  return (
    <section className="px-4 md:px-8 lg:px-16 xl:px-24 pt-4 md:pt-10 pb-16 bg-white">
      <div className="text-center mb-6 md:mb-10">
        <h2 className="text-[var(--text-hover-clr)] text-2xl md:text-3xl lg:text-4xl font-medium">
          Popular Items Right Now
        </h2>
        <p className="text-gray-600 mt-2 max-w-md mx-auto text-sm">
          From intricate Jewelry to exquisite pottery and clothes, explore a
          world of creativity and craftsmanship.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] lg:auto-rows-[320px] gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className={`relative rounded-xl overflow-hidden shadow group flex flex-col justify-end p-3 bg-gray-100 ${item.size || ""}`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="relative z-10 text-white rounded-lg p-2 text-sm">
              <h3 className="font-semibold text-[22px]">{item.title}</h3>
              <p className="text-xl">{item.price}</p>
            </div>
            <button className="absolute top-2 right-2 rounded-full shadow hover:scale-110 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-8 h-8 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 
                     1.126-4.312 2.733C11.285 4.876 9.623 
                     3.75 7.688 3.75 5.099 3.75 3 5.765 
                     3 8.25c0 7.22 9 12 9 12s9-4.78 
                     9-12z"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularItems;
