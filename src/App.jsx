import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ArtisanSection from "./pages/Home/HomeComponants/ArtisanSection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artisan/:id" element={<ArtisanSection />} />
      </Routes>
    </Router>
  );
}

export default App;
