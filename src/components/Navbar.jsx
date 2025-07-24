import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkClasses = (path) =>
    `px-2 md:px-4 py-2 rounded-md font-semibold text-sm md:text-base ${
      location.pathname === path 
        ? "bg-primary text-white" 
        : "text-primary hover:bg-primary hover:text-white transition-colors duration-200"
    }`;

  return (
    <nav className="bg-beigeLight p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4">
        <Link to="/" className={linkClasses("/")}>
          Home
        </Link>
        <Link to="/breeds" className={linkClasses("/breeds")}>
          Breeds
        </Link>

        <Link to="/add-breed" className={`md:hidden ${linkClasses("/add-breed")}`}>
          Add Breed
        </Link>
        <Link to="/favorites" className={linkClasses("/favorites")}>
          Favorites
        </Link>
        <Link to="/about" className={linkClasses("/about")}>
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;