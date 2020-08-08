const mongoose = require('mongoose');
const Todo = require('./todo');
const Schema = mongoose.Schema;

//create schema for todo
const GoalSchema = new Schema({
  task: {
    type: [Todo],
    required: [true, 'The todo text field is required']
  }
})

//create model for todo
const Goal = mongoose.model('Goal', GoalSchema);

module.exports = Goal;