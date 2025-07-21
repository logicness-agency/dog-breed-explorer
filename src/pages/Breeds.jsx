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

  const goToFavorites = () => {
    navigate("/favorites", { state: { favorites } });
  };

  return (
    <div className="px-6 py-8 min-h-screen bg-black text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center text-silver-300">
        All Dog Breeds
      </h1>

      <div className="flex gap-8">
        {/* Formular links */}
       <div className="w-80 bg-black rounded-lg p-6 shadow-lg text-metallicGray max-h-[350px]">
  <AddBreedForm />
</div>


        {/* Grid rechts */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {breeds.map((breed) => {
            const isFavorite = favorites.includes(breed.id);
            return (
              <div
                key={breed.id}
                className="max-w-sm rounded-lg overflow-hidden shadow-lg relative bg-metallicGray"
              >
                <img
                  src={breed.imageUrl}
                  alt={breed.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 text-gray-100">
                  <h2 className="text-lg font-semibold">{breed.name}</h2>
                  <p className="text-gray-300 text-sm">{breed.notes}</p>
                </div>

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
