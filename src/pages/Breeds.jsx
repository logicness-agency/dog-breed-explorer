import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddBreedForm from "../components/AddBreedForm";
import Footer from "../components/Footer";

export default function Breeds() {
  const [breeds, setBreeds] = useState([]);
  const navigate = useNavigate();

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

  const toggleFavorite = async (id) => {
    const breed = breeds.find((b) => b.id === id);
    if (!breed) return;
    const updated = { ...breed, favorite: !breed.favorite };

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

  const deleteBreed = async (id) => {
    await fetch(
      `https://dog-breeds-8c105-default-rtdb.europe-west1.firebasedatabase.app/breeds/${id}.json`,
      { method: "DELETE" }
    );
    setBreeds((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <main>
 <div className="px-6 py-8 min-h-screen bg-beigeLight text-primary">
      <h1 className="text-3xl font-bold mb-6 text-center">All Dog Breeds</h1>

        <div className="flex gap-8">
           <div className="w-80 bg-[#cfc8ba] rounded-lg p-6 shadow-lg max-h-[350px] overflow-auto">
            <AddBreedForm refresh={fetchBreeds} />
          </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {breeds.map((b) => (
            <div
              key={b.id}
              className="rounded-lg overflow-hidden shadow-lg bg-white flex flex-col"
            >
              <img
                src={b.imageUrl}
                alt={b.name}
                className="w-full h-60 object-cover"
              />
                <div className="p-4 bg-[#cfc8ba] flex-1">
                  <h2 className="text-lg font-semibold">{b.name}</h2>
                  <p className="text-black text-sm">{b.notes}</p>
                </div>
                <div className="flex bg-[#cfc8ba]  justify-end gap-2 p-4 border-t border-secondary">
                  <button
                    onClick={() => toggleFavorite(b.id)}
                    className={`rounded-full px-3 py-1 text-sm font-semibold transition-colors duration-200 ${
                      b.favorite
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-primary hover:bg-beigeDark text-beigeLight"
                    }`}
                  >
                    {b.favorite ? "Favorited" : "Favorite"}
                  </button>

                  <button
                    onClick={() => navigate(`/edit/${b.id}`)}
                    className="rounded-full px-5 py-1 text-sm font-semibold bg-primary hover:bg-beigeDark text-beigeLight transition-colors duration-200"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteBreed(b.id)}
                    className="rounded-full px-3 py-1 text-sm font-semibold bg-primary hover:bg-beigeDark text-beigeLight transition-colors duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
