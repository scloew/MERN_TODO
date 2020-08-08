import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todo-slice';


export default configureStore({
  reducer: {
    todos: todoReducer
  },
});