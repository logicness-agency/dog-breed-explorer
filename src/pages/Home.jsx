import myDog from "../assets/my-dog.jpg";

export default function Home() {
  return (
    <div className="hero bg-beigeLight min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={myDog}
          alt="My Dog"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-textPrimary">
            Welcome to Dog Breed Explorer!
          </h1>
          <p className="py-6 text-textPrimary max-w-md">
            Discover and explore a wide variety of dog breeds with images and fun facts.
          </p>
          <button className="btn bg-primary text-beigeLight hover:bg-metallicGray border-none">
            Explore Breeds
          </button>
        </div>
      </div>
    </div>
  );
}
