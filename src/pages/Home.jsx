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
    <div className="container">
      <div className="headline">
        <h1>Dog Breed Explorer</h1>
      </div>

      <AddBreedForm onBreedAdded={fetchBreeds} />
      <hr />

      <div className="grid">
        {breeds.map((breed) => (
          <div key={breed.id} className="card">
            <img
              src={breed.imageUrl}
              alt={breed.name}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/200x150?text=No+Image";
              }}
            />
            <h2>{breed.name}</h2>
            <p>{breed.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
