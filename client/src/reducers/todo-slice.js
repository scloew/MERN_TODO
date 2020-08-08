import { createSlice } from '@reduxjs/toolkit';
import { addTodo, getTodos, deleteTodo } from '../api/todo';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [],
  },
  reducers: {
    updateToDos: (state, action) => { state.value = action.payload },
  },
});

export const { updateToDos } = todoSlice.actions

export const serverAddTodo = task => dispatch => {
  pushTodo(task, dispatch)
}

export const pushTodo = task => dispatch => {
  addTodo(task).then(dispatch(fetchTodos())); //chain promises together
}

export const fetchTodos = task => dispatch => {
  getTodos().then(res => {
    dispatch(updateToDos(res))
  });
}

export const completeTodo = task => dispatch => {
  dispatch(serverDeleteTodo(task._id))
}

export const serverDeleteTodo = id => dispatch => {
  deleteTodo(id).then(
    dispatch(fetchTodos())
  )
}

export const selectTodos = state => state.todos.value;
export default todoSlice.reducer
