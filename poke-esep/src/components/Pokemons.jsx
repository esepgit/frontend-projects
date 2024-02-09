import { useEffect, useState } from "react"
import axios from "axios"
import PokemonList from "./PokemonList"

function Pokemons() {
  const [allPokemons, setAllPokemons] = useState([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err))
  }, [])
  return (
    <section className="p-4 py-5 ">
      <form>
        <div className="bg-white p-2 rounded-2xl text-lg text-center">
          <input
            className="outline-none"
            type="text"
            placeholder="Search your Pokemon"
          />
        </div>
      </form>
      <PokemonList pokemons={allPokemons} />
    </section>
  );
}

export default Pokemons