
import Pokemons from "./components/Pokemons";
import Aside from "./components/Aside";
import ModalPokemon from "./components/ModalPokemon";
import usePokemonContext from "./hooks/usePokemonContext";

function App() {
  const { showDetailPokemon, closePokemonDetail, pokemonDetail, isLoading } =
    usePokemonContext();

  return (
    <section className="overflow-x-hidden bg-[url(/pokeball-icon.png)] bg-no-repeat bg-[-10%_-20%] bg-[#f6f8fc] h-screen overflow-y-auto font-outfit">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
        <Pokemons />
        <Aside pokemon={pokemonDetail} isLoading={isLoading} />
        <ModalPokemon showModal={showDetailPokemon} onCloseModal={closePokemonDetail} pokemon={pokemonDetail} />
      </main>
    </section>
  );
}

export default App;
