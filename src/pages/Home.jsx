import { Link } from "react-router-dom";
import myDog from "../assets/my-dog.jpg";
import CircularGallery from "../components/CircularGallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative"> 
     
      <div className="hidden lg:block absolute top-0 left-0 w-full h-[600px] z-10"> {/*gallery on dekstop*/}
        <CircularGallery bend={3} borderRadius={0.05} scrollEase={0.02} />
      </div>

    
      <div className="hero bg-beigeLight min-h-screen pt-8 lg:pt-96">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left w-full">
      
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 md:mb-6 leading-tight">
              Welcome to Dog Breed Explorer!
            </h1>
           
            <p className="py-4 md:py-6 text-primary text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
              Discover and explore a wide variety of dog breeds with images and fun facts.
            </p>
            
      
            <Link
              to="/breeds"
              className="inline-block rounded-full px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold bg-primary hover:bg-beigeDark text-beigeLight transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
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