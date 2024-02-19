import axios from "axios";
import { useEffect, useState } from "react";
import { colorByType } from "../constants/pokemon";

function PokemonPreview({ pokemonURL, onClick }) { 
  const [pokemon, setPokemon] = useState(null);
 
  useEffect(() => {
    axios
      .get(pokemonURL)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <article onClick={() => onClick(pokemon)} className="cursor-pointer border-2 hover:border-slate-200 border-transparent shadow-slate-400/10 shadow-lg capitalize text-center bg-white rounded-[30px] relative font-semibold pb-4 group grid gap-2">
      <header className="h-9">
        <img
          className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 group-hover:scale-110 transition-transform pixelated"
          src={
            pokemon?.sprites.versions["generation-v"]["black-white"]
              .front_default
          }
        />
      </header>
      <span className="text-sm text-slate-400">N° {pokemon?.id}</span>
      <h4 className="text-lg">{pokemon?.name}</h4>
      <ul className="flex gap-2 justify-center">
        {pokemon?.types.map((type) => (
          <li className={`text-white text-sm p-1 rounded-md px-2 ${colorByType[type.type.name]}`} key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
    </article>
  );
}

export default PokemonPreview;
