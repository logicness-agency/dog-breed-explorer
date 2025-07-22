import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClasses = (path) =>
    `px-4 py-2 rounded-md ${
      location.pathname === path ? "bg-primary text-beigeLight" : "text-textPrimary hover:bg-primary hover:text-beigeLight"
    }`;

  return (
    <nav className="bg-beigeLight shadow-md p-4">
      <ul className="flex gap-4 justify-center">
        <li>
          <Link to="/" className={linkClasses("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/breeds" className={linkClasses("/breeds")}>
            Breeds
          </Link>
        </li>
        <li>
          <Link to="/favorites" className={linkClasses("/favorites")}>
            Favorites
          </Link>
        </li>
        <li>
          <Link to="/about" className={linkClasses("/about")}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
