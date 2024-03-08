import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CharactersList from "./components/CharactersList";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacter = (url) => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setCharacters(data.results);
          setInfo(data.info)
        })
        .catch(error => console.log(error))
  };

  const onPrevius = () => {
    fetchCharacter(info.prev);
  };

  const onNext = () => {
    fetchCharacter(info.next);
  };

  useEffect(() => {
    fetchCharacter(url)
  }, [])

  return (
    <div>
      <Navbar />
      <CharactersList characters={characters} />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevius={onPrevius}
        onNext={onNext}
      />
    </div>
  );
}

export default App;
