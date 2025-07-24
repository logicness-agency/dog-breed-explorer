
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Breeds from "./pages/Breeds";
import EditBreed from "./pages/EditBreed";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage"; 
import AddBreed from "./pages/AddBreed";


export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/edit/:id" element={<EditBreed />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/add-breed" element={<AddBreed />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
