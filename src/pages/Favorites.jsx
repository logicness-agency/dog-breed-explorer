import React, { useEffect, useState } from "react";

export default function Favorites() {
  const [breeds, setBreeds] = useState([]);

  
  const fetchBreeds = async () => {
    const res = await fetch(
      "https://dog-breeds-8c105-default-rtdb.europe-west1.firebasedatabase.app/breeds.json"
    );
    const data = await res.json();
    setBreeds(Object.entries(data).map(([id, b]) => ({ id, ...b })));
  };

  useEffect(() => {
    fetchBreeds();
  }, []);


  const unmarkFavorite = async (id) => {
    const breed = breeds.find((b) => b.id === id);
    if (!breed) return;
    const updated = { ...breed, favorite: false };

    await fetch(
      `https://dog-breeds-8c105-default-rtdb.europe-west1.firebasedatabase.app/breeds/${id}.json`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      }
    );

    setBreeds((prev) =>
      prev.map((b) => (b.id === id ? updated : b))
    );
  };

  const favoriteBreeds = breeds.filter((b) => b.favorite);

  if (!favoriteBreeds.length) {
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
        {favoriteBreeds.map((b) => (
          <div
            key={b.id}
            className="rounded-lg overflow-hidden shadow-lg bg-white flex flex-col"
          >
            <img
              src={b.imageUrl}
              alt={b.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 flex-1">
              <h2 className="text-lg font-semibold">{b.name}</h2>
              <p className="text-secondary text-sm">{b.notes}</p>
            </div>
            <div className="flex justify-end p-4 border-t border-secondary">
              <button
                onClick={() => unmarkFavorite(b.id)}
                className="rounded-full px-3 py-1 text-sm font-semibold bg-primary hover:bg-beigeDark text-beigeLight transition-colors duration-200"
              >
                Unfavorite
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
