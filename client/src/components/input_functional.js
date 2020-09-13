import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../api/todo';
import { fetchTodos } from '../reducers/todo-slice';

const Input = ({ getTodos }) => {
  const [action, setAction] = useState('')

  const helper = async () => {
    const success = await addTodo({ action })
    if (success) {
      setAction('');
      getTodos();
    }
  }

  return (
    <div>
      <input type='text' onChange={({ target }) => setAction(target.value)} value={action} />
      <button onClick={helper}>add Todo</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  getTodos: () => { fetchTodos()(dispatch) }
})

export default connect(null, mapDispatchToProps)(Input);