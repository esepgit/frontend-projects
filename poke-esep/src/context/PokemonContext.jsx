import { createContext, useState } from "react";
import { formatStats, formatTypes, formatAbilities, getPokemonDescription, getEvolutions, getImageByPokemon } from "../helpers/pokemon";
import axios from "axios";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [showDetailPokemon, setShowDetailPokemon] = useState(false);
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [isLoading, setIsloading] = useState(false)

  const showPokemon = async (pokemonInfo) => {
    setIsloading(true)
    const {data: dataSpecies} = await axios.get(pokemonInfo.species.url)
    const { id, name, height, weight, stats, types, abilities } = pokemonInfo;
    const {data: dataEvolution} = await axios.get(dataSpecies.evolution_chain.url)
    const evolutions = await getEvolutions(dataEvolution)

    setPokemonDetail({
      id,
      name,
      height,
      weight,
      stats: formatStats(stats),
      types: formatTypes(types),
      abilities: formatAbilities(abilities),
      description: getPokemonDescription(dataSpecies),
      evolutions,
      image: getImageByPokemon(pokemonInfo.sprites)
    });

    setShowDetailPokemon(true);
    setTimeout(() => {
      setIsloading(false);
    }, 500);
  };

  const closePokemonDetail = () => {
    setShowDetailPokemon(false);
  };

  return (
    <PokemonContext.Provider
      value={{
        showDetailPokemon,
        showPokemon,
        closePokemonDetail,
        pokemonDetail,
        isLoading
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
