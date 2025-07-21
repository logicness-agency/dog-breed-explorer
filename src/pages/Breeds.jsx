import React, { useEffect, useState } from "react";
import AddBreedForm from "../components/AddBreedForm";
import { useNavigate } from "react-router-dom";

function Breeds() {
  const [breeds, setBreeds] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://dog-breeds-8c105-default-rtdb.europe-west1.firebasedatabase.app/breeds.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const loadedBreeds = Object.entries(data).map(([id, breed]) => ({
          id,
          ...breed,
        }));
        setBreeds(loadedBreeds);
      });
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  // Optional: Weiterleitung zur Favoriten-Seite mit Favoriten-IDs (kann per Context, Redux oder URL Params gemacht werden)
  const goToFavorites = () => {
    navigate("/favorites", { state: { favorites } });
  };

  return (
    <div className="px-4 py-8 bg-cream min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">All Dog Breeds</h1>

      <div className="flex gap-8">
        {/* Formular links */}
        <div className="w-80">
          <AddBreedForm />
        </div>

        {/* Grid rechts */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {breeds.map((breed) => {
            const isFavorite = favorites.includes(breed.id);
            return (
              <div
                key={breed.id}
                className="max-w-sm rounded overflow-hidden shadow bg-sand relative"
              >
                <img
                  src={breed.imageUrl}
                  alt={breed.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{breed.name}</h2>
                  <p className="text-gray-600 text-sm">{breed.notes}</p>
                </div>

                {/* Favoriten-Button an der Kreuz-Stelle */}
                <button
                  onClick={() => toggleFavorite(breed.id)}
                  className="absolute top-2 right-2 text-3xl cursor-pointer select-none"
                  aria-label={
                    isFavorite
                      ? "Remove from favorites"
                      : "Add to favorites"
                  }
                >
                  {isFavorite ? "❤️" : "♡"}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      
      
    </div>
  );
}

export default Breeds;
