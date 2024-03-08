function Pagination({ prev, next, onPrevius, onNext }) {
  const handlePrevius = () => {
    onPrevius();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="flex justify-center my-16">
        {prev ? (
          <li>
            <button onClick={handlePrevius} className="border p-2 rounded-md bg-sky-500 text-gray-200">
              Previus
            </button>
          </li>
        ) : null}
        {next ? (
          <li>
            <button onClick={handleNext} className="border p-2 rounded-md">
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default Pagination;
