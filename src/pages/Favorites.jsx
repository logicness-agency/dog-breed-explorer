import React, { useEffect, useState } from "react";

function Favorites() {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const res = await fetch(
        "https://dog-breeds-8c105-default-rtdb.europe-west1.firebasedatabase.app/breeds.json"
      );
      const data = await res.json();
      const loadedBreeds = Object.entries(data).map(([id, breed]) => ({
        id,
        ...breed,
      }));
      setBreeds(loadedBreeds);
    };
    fetchBreeds();
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((fav) => fav !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const favoriteBreeds = breeds.filter((breed) => favorites.includes(breed.id));

  return (
    <div className="p-8 bg-black min-h-screen text-silver">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Favorite Breeds</h1>

      {favoriteBreeds.length === 0 ? (
        <p className="text-center">You have no favorite breeds yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoriteBreeds.map((breed) => (
            <div
              key={breed.id}
              className="max-w-sm rounded-lg overflow-hidden shadow-lg relative bg-metallicGray flex flex-col"
            >
              <img
                src={breed.imageUrl}
                alt={breed.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-gray-100 flex-1">
                <h2 className="text-lg font-semibold">{breed.name}</h2>
                <p className="text-gray-300 text-sm">{breed.notes}</p>
              </div>

            
              <div className="flex items-center justify-end p-4 border-t border-gray-700">
                <button
                  onClick={() => removeFavorite(breed.id)}
                  className="rounded-full px-3 py-1 text-2xl cursor-pointer select-none bg-gray-700 hover:bg-gray-600 text-red-500"
                  aria-label="Remove from favorites"
                >
                  ❤️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
