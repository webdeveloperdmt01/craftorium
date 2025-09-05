import { ShopProvider } from "./ShopComponants/ShopProvider";
import ShopHero from "./ShopComponants/ShopHero";
import ShopFilters from "./ShopComponants/ShopFilters";
import ProductGrid from "./ShopComponants/ProductGrid";

export default function Shop() {
  return (
    <ShopProvider>
      <div className="bg-[#fef6eb] px-4 md:px-8 lg:px-12 xl:px-24 pt-7 pb-16 md:pt-10 lg:py-12">
        <ShopHero />
        <ShopFilters />
        <ProductGrid />
      </div>
    </ShopProvider>
  );
}
