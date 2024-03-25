import { useState } from 'react'

function Todo({ id, title, completed, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState('') 

  const handleSubmit = (e) => {
    e.preventDefault()
    onUpdate(id, newTitle)
    setIsEditing(false)
  }

  return (
    <div>
      {isEditing ? (
        <form className='update-form' onSubmit={handleSubmit}>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            type="text"
            placeholder={title}
            autoFocus
          />
          <button className='update-button' type="submit">update</button>
        </form>
      ) : (
        <div className='todo-list-container'>
          <span>
            {title} {completed ? <strong>completed</strong> : ""}
          </span>
          <span>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              edit
            </button>
            <button className="delete-button" onClick={() => onDelete(id)}>
              delete
            </button>
          </span>
        </div>
      )}
    </div>
  );
}

export default Todo