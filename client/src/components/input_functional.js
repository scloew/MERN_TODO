import React, { useState } from 'react';
import { addTodo } from '../api/todo';

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
export default Input