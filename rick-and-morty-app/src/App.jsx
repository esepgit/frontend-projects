import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import initialData from '../db.json'
import CharactersList from "./components/CharactersList";

function App() {
  const [characters, setCharacters] = useState(initialData.results)
  console.log(characters);

  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then(response => response.json())
  //     .then(data => {
  //       setCharacters(data.results);
  //       console.log(data)
  //     })
  //     .catch(error => console.log(error))
  // }, [])

  return (
    <div>
      <Navbar />
      <CharactersList characters={characters} />
    </div>
  )
}

export default App