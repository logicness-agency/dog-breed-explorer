import React from "react";
import { useLocation } from "react-router-dom";

function Favorites() {
  const location = useLocation();
  const { favorites } = location.state || { favorites: [] };

  return (
    <div className="p-8 bg-cream min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Favorite Breeds</h1>
      {favorites.length === 0 ? (
        <p className="text-center">You have no favorite breeds yet.</p>
      ) : (
        <ul>
          {favorites.map((id) => (
            <li key={id} className="mb-2">
              {/* Hier kannst du Breed-Details noch laden oder nur ID anzeigen */}
              Breed ID: {id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
