import React, { useState } from "react";

function AddBreedForm({ refresh }) {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !imageUrl) return;

    const newBreed = { name, notes, imageUrl, favorite: false };

    await fetch("https://dog-breeds-8c105-default-rtdb.europe-west1.firebasedatabase.app/breeds.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBreed),
    });

    setName("");
    setNotes("");
    setImageUrl("");
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-4">Add a New Breed</h2>
      <input
        type="text"
        placeholder="Breed Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        className="input input-bordered"
      />
      <textarea
        placeholder="Notes"
        value={notes}
        onChange={e => setNotes(e.target.value)}
        rows={3}
        className="textarea textarea-bordered"
      />
      <input
        type="url"
        placeholder="Image URL"
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)}
        required
        className="input input-bordered"
      />
      <button type="submit" className="btn bg-textPrimary text-beigeLight hover:bg-beigeDark transition-colors duration-200">Add Breed</button>


    </form>
  );
}

export default AddBreedForm;
