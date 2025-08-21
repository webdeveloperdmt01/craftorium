import React from "react";
import blog1 from "@/assets/images/Jewellery.webp";
import blog2 from "@/assets/images/Pottery.webp";
import blog3 from "@/assets/images/Textiles.webp";
import Artisanbg from "@/assets/images/big-at5.png";

export default function BlogAndCTA() {
  const blogs = [
    {
      id: 1,
      category: "Jewellery ideas",
      title: "The Art of Handcrafted Jewelry",
      description:
        "Explore the world of artisanal jewelry, where craftsmanship meets timeless beauty.",
      img: blog1,
    },
    {
      id: 2,
      category: "Pottery ideas",
      title: "The Craft of Pottery",
      description:
        "Delve into the artistry of handcrafted pottery, where clay comes to life in the hands of skilled potters.",
      img: blog2,
    },
    {
      id: 3,
      category: "Textile ideas",
      title: "Handwoven Textiles Unveiled",
      description:
        "Discover the intricate world of handcrafted textiles, where threads tell stories of skill and tradition.",
      img: blog3,
    },
  ];

  return (
    <>
      <section className="px-4 md:px-8 lg:px-16 xl:px-24 py-12 bg-[fffafa]">
        <h2 className="font-cormorant text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text-hover-clr)] mb-8">
          Our Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl border border-gray-300 transition overflow-hidden h-104"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="font-cormorant w-full h-68 object-cover"
              />
              <div className="px-4 pt-3 space-y-2">
                <p className="font-cormorant text-xs font-bold uppercase text-gray-500 tracking-wide mb-2">
                  {blog.category}
                </p>
                <h3 className="font-cormorant text-xl font-semibold text-[var(--text-hover-clr)] mb-1">
                  {blog.title}
                </h3>
                <p className="font-nexa text-sm text-gray-600">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="font-nexa mt-6 flex justify-end">
          <a href="#" className="text-[var(--text-hover-clr)] text-sm font-medium">
            View All
          </a>
        </div>
      </section>
         <section className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 py-8 rounded-3xl mx-4 md:mx-8 lg:mx-16 xl:mx-24 my-6 md:my-12 lg:my-16">
        <div className="grid md:grid-cols-2 gap-2 items-center place-items-center p-2">
         <img
        src={Artisanbg}
        alt="Artisan"
        className="rounded-2xl w-[450px] object-contain border-10 border-[#fef5ef]"
      />
          <div className="text-center md:text-left">
            <h2 className="font-cormorant text-3xl md:text-3xl lg:text-4xl font-bold text-[var(--text-hover-clr)] mb-4">
              Your Purchase Supports a Livelihood
            </h2>
            <p className="text-[var(--text-clr)] text-base md:text-lg max-w-xl font-nexa">
              Every product you explore and buy helps an artisan continue their craft and sustain their community.
            </p>
             <button className="font-nexa bg-[var(--text-hover-clr)] text-white mt-8 md:mt-12 px-6 md:px-8 py-1.5 md:py-3 rounded-[60px] font-semibold shadow hover:bg-[var(--text-hover-clr)] transition">
                Explore Our Collection
              </button>
          </div>
        </div>
      </section>
    </>
  );
}
