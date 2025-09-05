import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Blog from "./pages/Blogs/Blog";
import Shop from "./pages/Shop/Shop";
import ProductPage from "./pages/Shop/ShopComponants/ProductPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArtisanStories from "./pages/Home/HomeComponants/ArtisanStories";
import Artisans from "./pages/Artisans/artisan";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact-us" element={<Contact/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/blogs" element={<Blog/>}/>
        <Route path="/shop" element={<Shop/>}/>
          <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/artisans" element={<Artisans/>}/>
        <Route path="/artisan/:id" element={<ArtisanStories />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;




