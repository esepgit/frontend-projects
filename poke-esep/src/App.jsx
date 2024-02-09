import { useState } from "react";
import Pokemons from "./components/Pokemons";
import Aside from "./components/Aside";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="bg-[#f6f8fc] h-screen overflow-y-auto font-outfit">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
        <Pokemons />
        <Aside />
      </main>
    </section>
  );
}

export default App;
