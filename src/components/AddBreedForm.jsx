import { useState } from "react";

export default function AddBreedForm({ onAdd }) {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newBreed = { name, notes, imageUrl };
    onAdd(newBreed);

    setName("");
    setNotes("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-textPrimary">
      <h2 className="text-xl font-semibold mb-2">Add a New Breed</h2>
      <input
        type="text"
        placeholder="Breed name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 rounded border border-beigeMedium bg-beigeLight text-textPrimary focus:outline-primary"
        required
      />
      <input
        type="text"
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="p-2 rounded border border-beigeMedium bg-beigeLight text-textPrimary focus:outline-primary"
      />
      <input
        type="url"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="p-2 rounded border border-beigeMedium bg-beigeLight text-textPrimary focus:outline-primary"
      />
      <button
        type="submit"
        className="bg-primary text-beigeLight font-semibold py-2 rounded hover:bg-secondary transition-colors"
      >
        Add Breed
      </button>
    </form>
  );
}
