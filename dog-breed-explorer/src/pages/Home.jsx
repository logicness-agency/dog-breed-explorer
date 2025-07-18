import { useEffect, useState } from "react";
import AddBreedForm from "../components/AddBreedForm";

function Home() {
  const [breeds, setBreeds] = useState([]);

  const fetchBreeds = () => {
    fetch("https://dog-breeds-8c105-default-rtdb.europe-west1.firebasedatabase.app/breeds.json")
      .then((res) => res.json())
      .then((data) => {
        if (!data) return setBreeds([]);
        const loaded = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
        }));
        setBreeds(loaded);
      });
  };

  useEffect(() => {
    fetchBreeds();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dog Breed Explorer</h1>




      <AddBreedForm onBreedAdded={fetchBreeds} />

      <hr className="my-6" />

      {breeds.map((breed) => (
        <div key={breed.id} className="mb-6">
          <img
            src={breed.imageUrl}
            alt={breed.name}
            width="200"
            height="150"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/200x150?text=No+Image";
            }}
          />
          <h2 className="text-lg font-semibold">{breed.name}</h2>
          <p>{breed.notes}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
