import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Breeds from "./pages/Breeds";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />  {/* Navbar hier, immer sichtbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
