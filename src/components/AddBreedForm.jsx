import { useState } from "react";

function AddBreedForm({ onBreedAdded }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBreed = { name, imageUrl, notes };

    const response = await fetch(
      "https://dog-breeds-8c105-default-rtdb.europe-west1.firebasedatabase.app/breeds.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBreed),
      }
    );

    if (response.ok) {
      setName("");
      setImageUrl("");
      setNotes("");
      if (onBreedAdded) onBreedAdded();
    } else {
      alert("Failed to add breed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card bg-sand shadow p-6 w-full max-w-md mb-8">
      <h2 className="text-lg font-bold text-primary mb-4">Add a New Breed</h2>

      <input
        type="text"
        placeholder="Breed name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="input input-bordered w-full mb-3"
      />
      <input
        type="url"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
        className="input input-bordered w-full mb-3"
      />
      <textarea
        placeholder="Notes about the breed"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        required
        className="textarea textarea-bordered w-full mb-4"
      />
      <button type="submit" className="btn bg-primary text-cream hover:opacity-90">
        Add Breed
      </button>
    </form>
  );
}

export default AddBreedForm;
