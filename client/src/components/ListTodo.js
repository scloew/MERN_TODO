import React from 'react';
import { selectTodos, completeTodo } from '../reducers/todo-slice'
import { useDispatch, useSelector } from 'react-redux';

const ListTodo = () => {

  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)

  return (
    <ul>
      {
        todos &&
          todos.length > 0 ?
          (
            todos.map(todo => {
              return (
                <li key={todo._id} onClick={() => dispatch(completeTodo(todo))}>{todo.action}</li>
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