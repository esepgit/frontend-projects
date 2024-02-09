import axios from "axios"
import { useEffect, useState } from "react"

function PokemonPreview({ pokemonURL }) {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    axios.get(pokemonURL)
      .then(({ data }) => setPokemon(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <article className="capitalize text-center bg-white rounded-[30px] relative font-semibold">
      <header className="h-8">
        <img
          className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2"
          src={pokemon?.sprites.versions["generation-v"]["black-white"].front_default}
        />
      </header>
      <span className="text-sm text-slate-400">N° {pokemon?.id}</span>
      <h4 className="text-lg">{pokemon?.name}</h4>
      <ul className="flex gap-2 justify-center">
        {pokemon?.types.map(type => <li key={type.type.name}>{type.type.name}</li>)}
      </ul>
    </article>
  );
}

export default PokemonPreview