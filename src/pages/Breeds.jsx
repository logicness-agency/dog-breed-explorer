import React, { useEffect, useState } from "react";
import AddBreedForm from "../components/AddBreedForm";
import { useNavigate } from "react-router-dom";

function Breeds() {
  const [breeds, setBreeds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = async () => {
    const res = await fetch("https://dog-breeds-8c105-default-rtdb.europe-west1.firebasedatabase.app/breeds.json");
    const data = await res.json();
    const loadedBreeds = Object.entries(data).map(([id, breed]) => ({ id, ...breed }));
    setBreeds(loadedBreeds);
  };

  const toggleFavorite = async (id) => {
    const breed = breeds.find(b => b.id === id);
    if (!breed) return;

    const updatedBreed = { ...breed, favorite: !breed.favorite };

    await fetch(`https://dog-breeds-8c105-default-rtdb.europe-west1.firebasedatabase.app/breeds/${id}.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBreed),
    });

    setBreeds(breeds.map(b => (b.id === id ? updatedBreed : b)));
  };

  return (
    <div className="px-6 py-8 min-h-screen bg-beigeLight text-textPrimary">
      <h1 className="text-3xl font-bold mb-6 text-center">All Dog Breeds</h1>

      <div className="flex gap-8">
        <div className="w-80 bg-white rounded-lg p-6 shadow-lg max-h-[350px] overflow-auto">
          <AddBreedForm refresh={fetchBreeds} />
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {breeds.map(breed => {
            const isFavorite = breed.favorite;
            return (
              <div key={breed.id} className="max-w-sm rounded-lg overflow-hidden shadow-lg relative bg-white flex flex-col">
                <img src={breed.imageUrl} alt={breed.name} className="w-full h-60 object-cover" />
                <div className="p-4 flex-1">
                  <h2 className="text-lg font-semibold">{breed.name}</h2>
                  <p className="text-secondary text-sm">{breed.notes}</p>
                </div>

                <div className="flex items-center justify-end space-x-2 p-4 border-t border-gray-300">
                  <button
                    onClick={() => toggleFavorite(breed.id)}
                    className="btn btn-sm"
                    aria-label="Toggle favorite"
                  >
                    Favorite
                  </button>
                  <button
                    onClick={() => navigate(`/edit/${breed.id}`)}
                    className="btn btn-sm btn-outline"
                  >
                    Edit
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
