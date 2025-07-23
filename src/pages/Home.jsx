import { Link } from "react-router-dom";
import myDog from "../assets/my-dog.jpg";
import CircularGallery from "../components/CircularGallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ position: 'relative' }}> {/* 👈 Parent container needs to be relative */}
      {/* Absolute positioned gallery */}
      <div style={{ 
        height: '600px', position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10
      }}>
        <CircularGallery bend={3}  borderRadius={0.05} scrollEase={0.02} />
      </div>

      {/* Hero content with padding to avoid overlap */}
      <div className="hero bg-beigeLight min-h-screen" style={{ paddingTop: '00px' }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold text-primary">Welcome to Dog Breed Explorer!</h1>
            <p className="py-6 text-primary">
              Discover and explore a wide variety of dog breeds with images and fun facts.
            </p>
            <Link
              to="/breeds"
              className="rounded-full px-4 py-4 text-sm font-semibold bg-primary hover:bg-beigeDark text-beigeLight transition-colors duration-200"
            >
              Explore Breeds
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}