//"use client";
import { useState } from "react";
import pets from "../data/pets";
import PetItem from "./PetItem";

function PetsList() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  const choosePet = pets.filter((pet) => {
    pet.name.includes(query).toLowerCase;
    
  });

  const petList = pets.map((pet) => <PetItem pet={pet} key={pet.id} />);

  
  const filteredPet  = pets.filter((pet) =>{
    return pet.type.toLowerCase() == type.toLowerCase() || type == ""
  })

//onClick={choosePet} .. add this to the "select tag" ? 
// 
  return (
    <>
      <div className="mx-auto">
        <div className="flex justify-start space-x-2 w-full font-primary">
          <div className="flex flex-col items-start space-y-1 flex-grow">
            <input
              placeholder="Type Something..."
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              className="text-gray-900 form-input border border-gray-300 w-full rounded-sm focus:border-palette-light focus:ring-palette-light"
            />
          </div>
          <div className="flex flex-col items-start space-y-1 flex-grow-0">
            <select
              defaultValue={""}  
              onChange={(event) => setType(event.target.value)} 
              className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
            > 
              <option value="">All</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Rabbit">Rabbit</option>
            </select>
          </div>
        </div>
      </div>
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {petList}
      </div>
    </>
  );
}

export default PetsList;
