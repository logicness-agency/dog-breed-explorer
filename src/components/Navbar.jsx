import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar  bg-sage shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sand rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/breeds">Breeds</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="text-xl font-bold">Dog Explorer</Link>
      </div>
    </div>
  );
}

export default Navbar;
