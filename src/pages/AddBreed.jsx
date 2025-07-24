import React from "react";
import { useNavigate } from "react-router-dom";
import AddBreedForm from "../components/AddBreedForm";
import Footer from "../components/Footer";

export default function AddBreed() {
  const navigate = useNavigate();

  return (
    <main>
      <div className="px-6 py-8 min-h-screen bg-beigeLight text-primary">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Add New Breed</h1>
          
          <div className="bg-[#cfc8ba] rounded-lg p-6 shadow-lg">
            <AddBreedForm />
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/breeds")}
              className="px-6 py-2 bg-primary hover:bg-beigeDark text-beigeLight rounded-md font-semibold transition-colors duration-200"
            >
              Back to Breeds
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}