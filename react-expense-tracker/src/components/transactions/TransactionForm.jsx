import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {
  const {addTransaction} = useGlobalState()
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Enter a description" />
        <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" step="0.01" placeholder="00.00" />
        <button>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm