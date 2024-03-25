import React from 'react'
import { useState } from 'react'
import Todo from './Todo'

function TodoApp() {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo])
    setTitle('')
  }

  const onUpdate = (id, newTitle) => {
    let todoToUpdate = todos.find(todo => todo.id === id)
    todoToUpdate = {
      ...todoToUpdate, title: newTitle
    }
    setTodos(todos.map(todo => todo.id === id ? todoToUpdate : todo))
  }

  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className='todoApp-container'>
      <form className='form-create' onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='any task...'/>
        <button className='create-button'>create</button>
      </form>
      {todos.map(todo => (
        <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default TodoApp