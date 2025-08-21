import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ArtisanStories from "./pages/Home/HomeComponants/ArtisanStories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artisan/:id" element={<ArtisanStories />} />
      </Routes>
    </Router>
  );
}

export default App;
