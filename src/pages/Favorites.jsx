import React, { useEffect, useState } from "react";

function Favorites() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const res = await fetch("https://dog-breeds-8c105-default-rtdb.europe-west1.firebasedatabase.app/breeds.json");
      const data = await res.json();
      const loadedBreeds = Object.entries(data).map(([id, breed]) => ({ id, ...breed }));
      setBreeds(loadedBreeds);
    };
    fetchBreeds();
  }, []);

  const favoriteBreeds = breeds.filter(breed => breed.favorite);

  if (favoriteBreeds.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-beigeLight text-textPrimary">
        <p className="text-xl">No favorite breeds yet.</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-8 min-h-screen bg-beigeLight text-textPrimary">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Favorite Breeds</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favoriteBreeds.map(breed => (
          <div key={breed.id} className="max-w-sm rounded-lg overflow-hidden shadow-lg relative bg-white flex flex-col">
            <img src={breed.imageUrl} alt={breed.name} className="w-full h-60 object-cover" />
            <div className="p-4 flex-1">
              <h2 className="text-lg font-semibold">{breed.name}</h2>
              <p className="text-secondary text-sm">{breed.notes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
