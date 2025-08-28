import React from "react";
import feature1 from "@/assets/images/who-we-are.webp"; 
import feature2 from "@/assets/images/who-we-are.webp"; 
import feature3 from "@/assets/images/who-we-are.webp"; 
import feature4 from "@/assets/images/who-we-are.webp"; 

export default function WhyChooseCraftorium() {
  const features = [
    {
      id: 1,
      title: "Trusted Marketplace",
      desc: "Buyers and vendors interact confidently in our secure and transparent ecosystem.",
      img: feature1,
    },
    {
      id: 2,
      title: "Empowering Sellers",
      desc: "From nano to large-scale vendors, we provide tools to grow your business.",
      img: feature2,
    },
    {
      id: 3,
      title: "Creative Community",
      desc: "Connect, collaborate, and discover amazing products with a vibrant community.",
      img: feature3,
    },
    {
      id: 4,
      title: "Seamless Experience",
      desc: "Intuitive platform design ensures a smooth experience for everyone.",
      img: feature4,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-[var(--section-bg-clr)]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="inline-block bg-[var(--text-hover-clr)] text-white font-nexa px-5 py-2 rounded-full text-sm mb-5 shadow-lg">
          Why Choose Craftorium
        </h2>
        <h3 className="text-4xl md:text-5xl font-cormorant font-semibold text-[var(--text-clr)]">
          Discover the Craftorium Advantage
        </h3>
        <p className="text-lg md:text-xl font-nexa text-[var(--text-clr)] mt-4 max-w-2xl mx-auto">
          Craftorium is designed to empower creators, provide trust, and ensure a seamless experience for buyers and sellers alike.
        </p>
      </div>

      <div className="space-y-24 relative">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col lg:flex-row items-center gap-12 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="lg:w-1/2">
              <h4 className="text-2xl md:text-3xl font-cormorant font-semibold text-[var(--text-clr)] mb-4 text-center lg:text-left">
                {feature.title}
              </h4>
              <p className="text-[var(--text-clr)] font-nexa leading-relaxed text-center lg:text-left">
                {feature.desc}
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
              <div className="rounded-3xl shadow-2xl overflow-hidden w-full max-w-md transform transition-transform hover:scale-105">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <button
            className="font-nexa bg-[var(--text-hover-clr)] text-white px-6 md:px-8 py-1.5 md:py-2 
             rounded-[40px] md:rounded-[60px] text-md md:text-xl font-bold 
             transition-transform duration-300 ease-out
             hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
          >
          Join Craftorium Today
          </button>
      </div>
    </section>
  );
}
