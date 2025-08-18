import Header from "@/components/Header";
import Footer from "@/components/Footer";

import HeroSection from "./HomeComponants/HeroSection";
import CollectionsSection from "./HomeComponants/CollectionsSection";
import PopularItems from "./HomeComponants/PopularItems";
import ArtisanalElegance from "./HomeComponants/ArtisanalElegance";
import BlogsSection from "./HomeComponants/BlogsSection";
import StartExploring from "./HomeComponants/StartExploring";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <CollectionsSection />
      <PopularItems />
      <ArtisanalElegance />
      <BlogsSection />
      <StartExploring/>
      <Footer />
    </div>
  );
}
