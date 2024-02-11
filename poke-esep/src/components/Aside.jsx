import PokemonDetail from "./PokemonDetail";

function Aside({ pokemon, isLoading }) {
  return (
    <section className="hidden lg:block sticky top-0 h-screen">
      <article
        className={`z-20 absolute w-full h-[85%] bottom-0 rounded-tl-3xl rounded-tr-3xl transition-all duration-500 bg-white ${
          pokemon && !isLoading ? "left-0" : "left-[50vw]"
        }`}
      >
        <PokemonDetail pokemon={pokemon} />
      </article>

      <article
        className={`z-20 grid place-content-center text-center absolute w-full h-[85%] bottom-0 rounded-tl-3xl rounded-tr-3xl bg-white ${
          pokemon ? "left-[50vw]" : "left-0"
        } transition-all duration-500`}
      >
        <header className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-[70%] scale-90">
          <img src="./no-pokemon-selected.png" />
        </header>
        <span className="text-lg text-slate-400 px-20">
          Select a Pokemon to display here.
        </span>
      </article>
      {/**Loader */}
      <div className="w-[60px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <img className="animate-spin-slow contrast-50" src="./pokeball-icon.png" />
      </div>
    </section>
  );
}

export default Aside;
