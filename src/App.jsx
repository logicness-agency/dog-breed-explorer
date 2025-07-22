import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Breeds from "./pages/Breeds";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import EditBreed from "./pages/EditBreed";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/edit/:id" element={<EditBreed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
