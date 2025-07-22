import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkClasses = (path) =>
    `px-4 py-2 rounded-md font-semibold ${
      location.pathname === path ? "bg-primary text-white" : "text-primary"
    }`;

  return (
    <nav className="bg-beigeLight p-4 shadow-md">
      <div className="container mx-auto flex space-x-4">
        <Link to="/" className={linkClasses("/")}>Home</Link>
        <Link to="/breeds" className={linkClasses("/breeds")}>Breeds</Link>
        <Link to="/favorites" className={linkClasses("/favorites")}>Favorites</Link>
        <Link to="/about" className={linkClasses("/about")}>About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
