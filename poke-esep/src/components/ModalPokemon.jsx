import { IconX } from "@tabler/icons-react";
import { colorByType } from "../constants/pokemon";
import Evolutions from "./Evolutions";

const colorByStat = {
  HP: "[&>div]:bg-red-500 bg-slate-100",
  ATK: "[&>div]:bg-orange-500 bg-slate-100",
  DEF: "[&>div]:bg-yellow-500 bg-slate-100",
  SpA: "[&>div]:bg-blue-300 bg-slate-100",
  SpD: "[&>div]:bg-green-500 bg-slate-100",
  SPD: "[&>div]:bg-pink-500 bg-slate-100",
  TOT: "[&>div]:bg-blue-500 bg-slate-100",
};

function ModalPokemon({ showModal, onCloseModal, pokemon }) {
  return (
    <section
      className={`fixed top-0 left-0 right-0 h-screen transition-all duration-500 ${
        showModal ? "visible opacity-100" : "invisible opacity-0"
      } ${colorByType[pokemon?.types[0]]}`}
    >
      <button
        onClick={onCloseModal}
        className="bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity"
      >
        <IconX size={32} stroke={4} />
      </button>
      <article
        className={` bg-white h-[85%] transition-all duration-500  absolute w-full rounded-tl-3xl rounded-tr-3xl text-center ${
          showModal ? "bottom-0" : "-bottom-full"
        }`}
      >
        <header className="absolute left-1/2 -translate-x-1/2 -translate-y-[92%] scale-[180%]">
          <img className="pixelated" src={pokemon?.image} />
        </header>
        <div className="overflow-y-auto px-4 pt-12 grid gap-2 content-start h-full hidden-scroll">
          <span className="text-slate-400 text-sm font-semibold">
            N° {pokemon?.id}
          </span>
          <h2 className="font-bold text-2xl capitalize">{pokemon?.name}</h2>
          <ul className="flex gap-2 justify-center">
            {pokemon?.types.map((type) => (
              <li
                className={`text-white text-sm p-1 rounded-md px-2 ${colorByType[type]}`}
                key={type}
              >
                {type}
              </li>
            ))}
          </ul>
          <div>
            <h4 className="font-bold capitalize">Pokedex Entry</h4>
            <p className="text-slate-400">{pokemon?.description}</p>
          </div>
          {/**altura y peso */}
          <section className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <h4 className="font-bold capitalize">Height</h4>
              <span className="bg-slate-100 block rounded-full p-1">0.7m</span>
            </div>
            <div className="grid gap-2">
              <h4 className="font-bold capitalize">Weight</h4>
              <span className="bg-slate-100 block rounded-full p-1">
                6.9 kg
              </span>
            </div>
          </section>

          <section className="grid gap-2">
            <h4 className="font-bold capitalize">Abilities</h4>
            <ul className="grid grid-cols-2 gap-4">
              {pokemon?.abilities.map((ability) => (
                <li
                  key={ability}
                  className="capitalize bg-slate-100 block rounded-full p-1"
                >
                  <span>{ability}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="grid gap-2">
            <h4 className="font-bold capitalize">Stats</h4>
            <ul className="flex justify-center gap-3 flex-wrap">
              {pokemon?.stats.map((stat) => (
                <li
                  key={stat.name}
                  className={` ${colorByStat[stat.name]}  p-1 rounded-full`}
                >
                  <div className="bg-green-500 rounded-full w-[28px] aspect-square grid place-content-center">
                    <span className="text-white text-xs font-semibold">
                      {stat.name}
                    </span>
                  </div>
                  <span className="font-semibold text-sm">
                    {stat.base_stat}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="grid gap-2">
            <h4 className="font-bold capitalize">Evolutions</h4>
            <Evolutions evolutions={pokemon?.evolutions ?? []} />
          </section>
        </div>
      </article>
    </section>
  );
}

export default ModalPokemon;
