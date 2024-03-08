function CharactersList({ characters = [] }) {
  return (
    <div className="mt-4 mx-8 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4">
      {characters.map((c) => (
        <div key={c.id}>
          <div className="border h-[310px]">
            <img src={c.image} />
            <div>
              <p className="font-semibold">{c.name}</p>
              <hr />
              <p>specie: {c.species}</p>
              <p>location: {c.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CharactersList;
