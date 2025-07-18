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
        headers: {
          "Content-Type": "application/json",
        },
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
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="text"
        placeholder="Breed name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full border px-2 py-1"
      />
      <input
        type="url"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
        className="w-full border px-2 py-1"
      />
      <textarea
        placeholder="Notes about the breed"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        required
        className="w-full border px-2 py-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Add Breed
      </button>
    </form>
  );
}

export default AddBreedForm;
