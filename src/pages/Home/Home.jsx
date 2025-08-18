import Header from "@/components/Header";
import Footer from "@/components/Footer";

import HeroSection from "./HomeComponants/HeroSection";
import CollectionsSection from "./HomeComponants/CollectionsSection";
import PopularItems from "./HomeComponants/PopularItems";
import ArtisanalElegance from "./HomeComponants/ArtisanalElegance";
import BlogsSection from "./HomeComponants/BlogsSection";
import StartExploring from "./HomeComponants/StartExploring";
import ArtisanStories from "./HomeComponants/ArtisanStories";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <CollectionsSection />
      <PopularItems />
      <ArtisanalElegance />
      <BlogsSection />
      <ArtisanStories/>
      <StartExploring/>
      <Footer />
    </div>
  );
}
