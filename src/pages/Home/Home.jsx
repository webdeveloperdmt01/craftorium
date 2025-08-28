import HeroSection from "./HomeComponants/HeroSection";
import CollectionsSection from "./HomeComponants/CollectionsSection";
import PopularItems from "./HomeComponants/PopularItems";
import ArtisanalElegance from "./HomeComponants/ArtisanalElegance";
import BlogsSection from "./HomeComponants/BlogsSection";
import StartExploring from "./HomeComponants/StartExploring";
import ArtisanSection from "./HomeComponants/ArtisanSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <CollectionsSection />
      <PopularItems />
      <ArtisanalElegance />
      <BlogsSection />
      <ArtisanSection/>
      <StartExploring/>
    </div>
  );
}
