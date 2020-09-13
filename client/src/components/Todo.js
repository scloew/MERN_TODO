import React, { Component } from 'react';
import ListTodo from './ListTodo';
import { getTodos } from '../api/todo'
import WordCloud from './d3-word-cloud';

//Testing functional component
import Input from './input_functional';




export default class Todo extends Component {
  state = {
    todos: []
  }



  async componentDidMount() {
    await this.helper();
  }

  helper = async () => {
    const todos = await getTodos();
    this.setState({
      todos
    })
  }


  render() {
    let { todos } = this.state;

    return (
      <div>
        <h1>My Todo(s)</h1>
        <Input getTodos={this.helper} />
        <ListTodo getTodos={this.helper} />
        <WordCloud todos={todos} />
      </div>
    )
  }
}