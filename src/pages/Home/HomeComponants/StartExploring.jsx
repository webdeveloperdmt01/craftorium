import React from "react";
import StrartExp from "@/assets/images/ct-exploring.webp";

const StartExploring = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center text-center text-white">
      <img
        src={StrartExp}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="font-cormorant font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
          Experience Crafted Elegance
        </h1>
        <p className="font-nexa text-sm md:text-lg mb-6 text-gray-200">
          Sample the sampling in the sample for samples as handcraft items.
          Sample the sampling.
        </p>
        <button className= "font-nexa bg-white text-[var(--text-hover-clr)] px-6 md:px-8 py-2 md:py-3 rounded-[60px] text-xl font-semibold transition">
          Start Exploring
        </button>
      </div>
    </section>
  );
};

export default StartExploring;
