import { useShop } from "./ShopProvider";

export default function ShopFilters() {
  const { category, setCategory, search, setSearch, sortOrder, setSortOrder } = useShop();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 md:mb-10 font-nexa">
      <div className="flex gap-3 flex-wrap">
        {["all", "home-decor", "clothes"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 md:px-5 py-1 md:py-2 rounded-full border transition text-xs md:text-sm font-medium shadow-sm ${
              category === cat
                ? "bg-[var(--text-hover-clr)] text-white border-[#184309]"
                : "bg-white text-gray-800 border-[#184309] hover:[#184309]"
            }`}
          >
            {cat === "all" ? "All Products" : cat === "home-decor" ? "Home Decor" : "Clothes"}
          </button>
        ))}
      </div>
<div className="flex gap-6">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-[#184309] px-3 md:px-4 py-1 md:py-2 rounded-xl w-full md:w-64 focus:outline-none text-xs md:text-sm lg:text-md"
      />

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="border border-[#184309] px-3 md:px-4 py-1 md:py-2 rounded-xl focus:outline-none text-xs md:text-sm lg:text-md"
      >
        <option value="default">Sort by</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
      </select>
      </div>
    </div>
  );
}
