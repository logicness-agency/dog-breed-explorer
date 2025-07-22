import { Link } from "react-router-dom";
import myDog from "../assets/my-dog.jpg";

function Home() {
  return (
    <div className="hero bg-beigeLight min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={myDog} alt="My Dog" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold text-primary">Welcome to Dog Breed Explorer!</h1>
          <p className="py-6 text-primary">
            Discover and explore a wide variety of dog breeds with images and fun facts.
          </p>
          <Link to="/breeds" className="btn btn-primary">Explore Breeds</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
