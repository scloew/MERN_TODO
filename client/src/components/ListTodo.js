import React from 'react';
import { selectTodos, completeTodo } from '../reducers/todo-slice'
import { connect, useDispatch } from 'react-redux';

const ListTodo = ({ todos }) => {

  const dispatch = useDispatch()

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

const mapStateToProps = (state) => ({
  todos: selectTodos(state)
})
export default connect(mapStateToProps)(ListTodo);