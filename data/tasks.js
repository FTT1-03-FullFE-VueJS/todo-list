// const TaskModel = require('../models/task.js');
import TaskModel from "../models/task.js";

const Tasks = [
  new TaskModel(uuidv4(), 'Task title 1', 1),
  new TaskModel(uuidv4(), 'Task title 2', 2),
  new TaskModel(uuidv4(), 'Task title 3', 3),
  new TaskModel(uuidv4(), 'Task title 4', 2),
  new TaskModel(uuidv4(), 'Task title 5', 1),
  new TaskModel(uuidv4(), 'Task title 6', 1),
  new TaskModel(uuidv4(), 'Task title 7', 2),
  new TaskModel(uuidv4(), 'Task title 8', 1),
  new TaskModel(uuidv4(), 'Task title 9', 1),
  new TaskModel(uuidv4(), 'Task title 10', 3),
];

export default Tasks;
