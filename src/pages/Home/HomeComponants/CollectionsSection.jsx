import jewelleryImg from "@/assets/images/Jewellery.webp";
import potteryImg from "@/assets/images/Pottery.webp";
import textilesImg from "@/assets/images/Textiles.webp";
import wallDecorImg from "@/assets/images/Wall-Decor.webp";

export default function Collections() {
  const collections = [
    { title: "Jewellery", image: jewelleryImg },
    { title: "Pottery", image: potteryImg },
    { title: "Textiles", image: textilesImg },
    { title: "Wall Decor", image: wallDecorImg },
  ];

  return (
   <section className="bg-[#FFF] py-12 md:py-16">
  <div className="px-4 md:px-8 lg:px-16 xl:px-24 text-center">
    <h2 className="font-cormorant text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text-hover-clr)] mb-1 md:mb-4">
      Browse Collections
    </h2>
    <p className="font-nexa text-gray-700 max-w-xl mx-auto mb-6 md:mb-12">
      From intricate Jewelry to exquisite pottery and cloths, explore a world of creativity and craftsmanship.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {collections.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-[20px] border border-gray-300 overflow-hidden cursor-pointer group transition h-74"
        >
          <div className="overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-54 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <div className="font-cormorant pt-6 pb-4 text-center">
          <h3
  className="font-nexa font-medium text-2xl text-[var(--text-hover-clr)] 
             transition-all duration-300 ease-in-out 
             group-hover:text-black group-hover:-translate-y-1"
>
  {item.title}
</h3>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
