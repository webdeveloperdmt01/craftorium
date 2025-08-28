import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArtisanStories from "./pages/Home/HomeComponants/ArtisanStories";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/artisan/:id" element={<ArtisanStories />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
