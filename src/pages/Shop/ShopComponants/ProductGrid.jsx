import { useShop } from "./ShopProvider";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const { products } = useShop();

  if (products.length === 0) {
    return <p className="text-center text-gray-500 mt-10 font-nexa">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
