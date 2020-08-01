import axios from 'axios';

export const getTodos = () => {
  return axios.get('/api/todos')
    .then(res => {
      if (res.data) {
        return res.data
      }
    })
    .catch(err => console.log(err))
}

export const deleteTodo = (id) => {

  return axios.delete(`/api/todos/${id}`)
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err))
}

export const addTodo = (task) => {
  if (task.action) {
    return axios.post('/api/todos', task)
      .then(res => {
        return res.data
      })
      .catch(err => console.log(err))
  } else {
    console.log('task required')
  }
}

