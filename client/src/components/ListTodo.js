import React from 'react';
import { deleteTodo } from '../api/todo'

const ListTodo = ({ todos, getTodos }) => {

  const helper = async (id) => {
    const success = await deleteTodo(id)
    if (success) {
      getTodos();
    }
  }

  return (
    <ul>
      {
        todos &&
          todos.length > 0 ?
          (
            todos.map(todo => {
              return (
                <li key={todo._id} onClick={() => helper(todo._id)}>{todo.action}</li>
              )
            })
          )
          :
          (
            <li>No todo(s) left</li>
          )
      }
    </ul>
  )
}

export default ListTodo;