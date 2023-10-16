import Card from "./components/card/Card.tsx";
import { usePokedex } from "./pokedex/usePokedex.tsx";
import { useState } from "react";
import { useTypes } from "./types/useTypes.tsx";

function App() {
  const pokedex = usePokedex();
  const types = useTypes();
  const [filteredPokedex, setFilteredPokedex] = useState<string>("");
  const [filteredTypes, setFilteredTypes] = useState<string[]>([]);

  const handleTypeClick = (type: string) => {
    if (filteredTypes.includes(type)) {
      setFilteredTypes(filteredTypes.filter((t) => t !== type));
    } else {
      setFilteredTypes([...filteredTypes, type]);
    }
  };

  return (
    <>
      <h1 className={"text-4xl font-bold text-center p-2"}>Pokedex</h1>

      {/* Filter by name */}
      <div className={"flex justify-center p-2"}>
        <input
          className={
            "border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          }
          placeholder={"Search"}
          onChange={(e) => setFilteredPokedex(e.target.value)}
        />
      </div>

      {/* Types */}
      <div className={"flex flex-wrap justify-center p-2"}>
        {types.map((type, index) => {
          return (
            <span
              className={
                `border rounded-md px-2 mx-1 my-0.5 cursor-pointer ` +
                (filteredTypes.includes(type.name)
                  ? `bg-${type.color}-100 border-${type.color}-600`
                  : `bg-gray-100 border-gray-600`)
              }
              onClick={() => handleTypeClick(type.name)}
              key={index}
            >
              {type.name}
            </span>
          );
        })}
      </div>

      {/* Pokedex */}
      <div className={"grid grid-cols-4 gap-2 justify-items-center p-2"}>
        {pokedex
          .filter((pokemon) => {
            if (filteredPokedex === "") {
              return pokemon;
            } else if (
              pokemon.name.toLowerCase().includes(filteredPokedex.toLowerCase())
            ) {
              return pokemon;
            }
          })
          .filter((pokemon) => {
            if (filteredTypes.length === 0) {
              return pokemon;
            } else if (
              filteredTypes.some((type) => pokemon.types.includes(type))
            ) {
              return pokemon;
            }
          })
          .map((pokemon, index) => {
            return (
              <Card
                key={index}
                name={pokemon.name}
                types={pokemon.types}
                evolves={pokemon.evolves}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
