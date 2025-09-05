import { createContext, useContext, useState } from "react";

import vaseImg from "@/assets/images/d-1.jpg";
import clockImg from "@/assets/images/d-2.jpg";
import jacketImg from "@/assets/images/d-3.jpg";
import dressImg from "@/assets/images/d-4.jpg";
import lampImg from "@/assets/images/d-5.jpg";
import shirtImg from "@/assets/images/d-6.jpg";

const ShopContext = createContext();

const products = [
  {
    id: 1,
    name: "Handmade Ceramic Vase – Modern Minimalist Design",
    category: "home-decor",
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    rating: 4.7,
    description:
      "Crafted from premium ceramic, this modern minimalist vase adds elegance to any living room or office space. Perfect for fresh flowers or as a standalone decor piece. Hand-glazed for a smooth finish.",
    image: vaseImg,
  },
  {
    id: 2,
    name: "Artisan Wall Clock – Rustic Wooden Frame",
    category: "home-decor",
    price: 2199,
    originalPrice: 2699,
    discount: 18,
    rating: 4.6,
    description:
      "This artisan wall clock features a handcrafted wooden frame and silent quartz movement. Adds rustic charm to bedrooms, living rooms, or study areas. Easy to mount with included hardware.",
    image: clockImg,
  },
  {
    id: 3,
    name: "Men’s Linen Jacket – Casual & Office Wear",
    category: "clothes",
    price: 2999,
    originalPrice: 3599,
    discount: 17,
    rating: 4.5,
    description:
      "Premium men’s linen jacket with a tailored fit. Breathable and lightweight, ideal for office or casual outings. Features button closure, pockets, and a stylish collar. Machine washable.",
    image: jacketImg,
  },
  {
    id: 4,
    name: "Women’s Boho Maxi Dress – Summer Collection",
    category: "clothes",
    price: 2499,
    originalPrice: 3199,
    discount: 22,
    rating: 4.8,
    description:
      "Flowy bohemian maxi dress with vibrant floral prints. Perfect for summer parties, beach outings, or casual gatherings. Made with soft, breathable fabric for all-day comfort.",
    image: dressImg,
  },
  {
    id: 5,
    name: "Rustic Table Lamp – Vintage Wooden Base",
    category: "home-decor",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.4,
    description:
      "Decorative rustic table lamp with vintage wooden base and soft LED lighting. Adds warmth and ambiance to bedrooms, offices, or study tables. Durable design with easy bulb replacement.",
    image: lampImg,
  },
  {
    id: 6,
    name: "Casual Cotton Shirt – Everyday Comfort",
    category: "clothes",
    price: 1799,
    originalPrice: 2199,
    discount: 18,
    rating: 4.3,
    description:
      "Soft and breathable casual cotton shirt for everyday wear. Features button closure, classic collar, and long sleeves. Perfect for casual outings, office, or layering under jackets.",
    image: shirtImg,
  },
];

export function ShopProvider({ children }) {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  let filteredProducts =
    category === "all" ? products : products.filter((p) => p.category === category);

  filteredProducts = filteredProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sortOrder === "low-high") filteredProducts.sort((a, b) => a.price - b.price);
  if (sortOrder === "high-low") filteredProducts.sort((a, b) => b.price - a.price);

  return (
    <ShopContext.Provider
      value={{
        products: filteredProducts,
        category,
        setCategory,
        search,
        setSearch,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);
