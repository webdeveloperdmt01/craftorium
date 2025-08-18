import React from "react";
import blog1 from "@/assets/images/Jewellery.webp";
import blog2 from "@/assets/images/Pottery.webp";
import blog3 from "@/assets/images/Textiles.webp";

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

      <section className="bg-gray-200 py-8 px-6 text-center rounded-2xl mx-6 md:mx-16 my-4 md:my-12 lg:my-16">
        <h2 className="text-2xl md:text-4xl font-bold text-[var(--text-hover-clr)] mb-6">
          Your purchase supports a livelihood
        </h2>
        <p className="text-[var(--text-clr)] text-sm md:text-lg mb-8 max-w-xl mx-auto">
          Every product you explore and buy helps an artisan continue their craft
          and sustain their community.
        </p>
        <button className="bg-white text-[#8E81FA] font-semibold px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300">
          Explore Our Collection
        </button>
      </section>
    </>
  );
}
