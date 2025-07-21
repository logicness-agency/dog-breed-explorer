import { Link } from "react-router-dom";
import myDog from "../assets/my-dog.jpg";

export default function Home() {
  return (
   <div className="hero bg-cream min-h-screen">

      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={myDog} alt="My Dog" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Welcome to Dog Breed Explorer!</h1>
          <p className="py-6">
            Discover and explore a wide variety of dog breeds with images and fun facts.
          </p>
          <Link to="/breeds">
            <button className="btn bg-primary text-cream">Explore Breeds</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
