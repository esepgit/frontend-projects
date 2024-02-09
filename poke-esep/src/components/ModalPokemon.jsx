import { IconX } from "@tabler/icons-react"

function ModalPokemon({ showModal, onCloseModal }) {
  
  return (
    <section
      className={`fixed top-0 left-0 right-0 h-screen transition-all duration-500 bg-green-400 ${
        showModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <button
        onClick={onCloseModal}
        className="bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity"
      >
        <IconX size={32} stroke={4} />
      </button>
      <article
        className={`bg-white h-[85%] transition-all duration-500 absolute w-full rounded-tl-3xl rounded-tr-3xl text-center ${
          showModal ? "bottom-0" : "-bottom-full"
        }`}
      ></article>
    </section>
  );
}

export default ModalPokemon