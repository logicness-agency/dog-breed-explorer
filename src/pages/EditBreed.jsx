import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditBreed() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [breed, setBreed] = useState(null);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchBreed = async () => {
      const res = await fetch(`https://dog-breeds-8c105-default-rtdb.europe-west1.firebasedatabase.app/breeds/${id}.json`);
      const data = await res.json();
      setBreed(data);
      setName(data.name);
      setNotes(data.notes);
      setImageUrl(data.imageUrl);
    };
    fetchBreed();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBreed = { ...breed, name, notes, imageUrl };
    await fetch(`https://dog-breeds-8c105-default-rtdb.europe-west1.firebasedatabase.app/breeds/${id}.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBreed),
    });
    navigate("/breeds");
  };

  if (!breed) return <p>Loading...</p>;

  return (
    <div className="p-8 min-h-screen bg-beigeLight text-textPrimary flex justify-center">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit Breed</h2>
        <label className="block mb-2 font-semibold">Name</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="input input-bordered w-full mb-4"
        />
        <label className="block mb-2 font-semibold">Notes</label>
        <textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          className="textarea textarea-bordered w-full mb-4"
          rows={3}
        />
        <label className="block mb-2 font-semibold">Image URL</label>
        <input
          type="url"
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
          required
          className="input input-bordered w-full mb-4"
        />
        <button type="submit" className="btn bg-textPrimary text-beigeLight ">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditBreed;
