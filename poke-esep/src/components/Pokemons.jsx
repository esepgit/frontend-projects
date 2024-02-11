import { useEffect, useRef, useState } from "react"
import axios from "axios"
import PokemonList from "./PokemonList"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

const INITIAL_LIMIT = 40
const INCREASE_LIMIT = 20

function Pokemons() {
  const [allPokemons, setAllPokemons] = useState([])
  const [pokemonName, setPokemonName] = useState("")
  const [limit, setLimit] = useState(INITIAL_LIMIT)

  const targetObserver = useRef(null)
  const entry = useIntersectionObserver(targetObserver, {})
  const isVisible = !!entry?.isIntersecting

  const pokemonsByName = allPokemons.filter(pokemon => pokemon.name.includes(pokemonName))
  
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=898")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    const maxPokemons = pokemonsByName.length
    if (isVisible && maxPokemons !== 0) {
      const newLimit = limit + INCREASE_LIMIT
      newLimit > maxPokemons ? setLimit(maxPokemons) : setLimit(newLimit)
    } 
  }, [isVisible])

  useEffect(() => {
    setLimit(INITIAL_LIMIT)
  }, [pokemonName])

  return (
    <section className="p-4 py-5 ">
      <form>
        <div className="bg-white p-2 rounded-2xl text-lg">
          <input
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value.toLowerCase())}
            className="outline-none"
            type="text"
            placeholder="Search your Pokemon"
          />
        </div>
      </form>
      <PokemonList pokemons={pokemonsByName.slice(0, limit)} />
      {/*target observer*/}
      <span ref={targetObserver}></span>
    </section>
  );
}

export default Pokemons