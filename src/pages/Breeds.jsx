import React, { useEffect, useState } from "react";
import AddBreedForm from "../components/AddBreedForm";

function Breeds() {
  const [breeds, setBreeds] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

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

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="px-6 py-8 min-h-screen bg-black text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center text-silver-300">
        All Dog Breeds
      </h1>

      <div className="flex gap-8">
        <div className="w-80 bg-black rounded-lg p-6 shadow-lg text-metallicGray max-h-[350px]">
          <AddBreedForm />
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {breeds.map((breed) => {
            const isFavorite = favorites.includes(breed.id);
            return (
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

              
                <div className="flex items-center justify-end space-x-2 p-4 border-t border-gray-700">
                  <button
                    onClick={() => toggleFavorite(breed.id)}
                    className="rounded-full px-3 py-1 text-2xl cursor-pointer select-none bg-gray-700 hover:bg-gray-600 text-red-500"
                    aria-label={
                      isFavorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                    }
                  >
                    {isFavorite ? "❤️" : "♡"}
                  </button>
                  <button
                    className="rounded-full px-3 py-1 text-sm font-semibold bg-gray-700 hover:bg-gray-600 text-gray-300"
                    aria-label="Edit breed"
                  >
                    Edit
                  </button>
                  <button
                    className="rounded-full px-3 py-1 text-sm font-semibold bg-gray-700 hover:bg-gray-600 text-gray-300"
                    aria-label="Delete breed"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Breeds;
