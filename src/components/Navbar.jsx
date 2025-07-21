import { Link } from "react-router-dom";

export default function Navbar() {
  const icons = {
    home: "https://img.icons8.com/?size=100&id=73&format=png&color=ffffff",
    breeds: "https://img.icons8.com/?size=100&id=821&format=png&color=ffffff",
    favorites: "https://img.icons8.com/?size=100&id=87&format=png&color=ffffff",
    about: "https://img.icons8.com/?size=100&id=3439&format=png&color=ffffff",
  };

  return (
    <nav className="bg-black p-4 shadow-md">
      <ul className="flex justify-center gap-8">
        <li>
          <Link
            to="/"
            className="flex flex-col items-center text-white no-underline hover:no-underline"
            title="Home"
          >
            <img src={icons.home} alt="Home" className="h-6 w-6 mb-1" />
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/breeds"
            className="flex flex-col items-center text-white no-underline hover:no-underline"
            title="Breeds"
          >
            <img src={icons.breeds} alt="Breeds" className="h-6 w-6 mb-1" />
            Breeds
          </Link>
        </li>

        <li>
          <Link
            to="/favorites"
            className="flex flex-col items-center text-white no-underline hover:no-underline"
            title="Favorites"
          >
            <img src={icons.favorites} alt="Favorites" className="h-6 w-6 mb-1" />
            Favorites
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="flex flex-col items-center text-white no-underline hover:no-underline"
            title="About"
          >
            <img src={icons.about} alt="About" className="h-6 w-6 mb-1" />
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
