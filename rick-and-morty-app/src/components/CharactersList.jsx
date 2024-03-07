
function CharactersList({characters = []}) {

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] ">
      {characters.map((c) => (
        <div key={c.id}>
          <div>
            <img src={c.image} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CharactersList