import { Link } from "react-router-dom";
import myDog from "../assets/my-dog.jpg";
import CircularGallery from "../components/CircularGallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative"> {/* Verwende Tailwind-Klassen statt inline styles */}
      {/* Absolute positioned gallery */}
      <div className="absolute top-0 left-0 w-full h-[600px] z-10">
        <CircularGallery bend={3} borderRadius={0.05} scrollEase={0.02} />
      </div>

      {/* Hero content with padding to avoid overlap */}
      <div className="hero bg-beigeLight min-h-screen pt-0">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-primary mb-6">
              Welcome to Dog Breed Explorer!
            </h1>
            <p className="py-6 text-primary text-lg">
              Discover and explore a wide variety of dog breeds with images and fun facts.
            </p>
            <Link
              to="/breeds"
              className="inline-block rounded-full px-6 py-4 text-sm font-semibold bg-primary hover:bg-beigeDark text-beigeLight transition-colors duration-200 shadow-lg"
            >
              Explore Breeds
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}