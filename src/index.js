import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';

import './style.css';
import displayTodosView from './views/displayTodosView';
import * as model from './model';
import addTodoView from './views/addTodoView';
import removeTodoView from './views/removeTodoView';
import editTodoView from './views/editTodoView';
import updateStatusView from './views/updateStatusView';
import clearTodosView from './views/clearTodosView';

const controlDisplayTodos = () => {
  model.loadTodo();
  displayTodosView.renderTodos(model.state.toDos);
};

const controlAddTodo = (val) => {
  model.addTodo(val);
  displayTodosView.renderTodos(model.state.toDos);
};

const controlRemoveTodo = (ind) => {
  model.removeTodo(ind);
  displayTodosView.renderTodos(model.state.toDos);
};

const controlEditTodo = (ind, val) => {
  model.editTodo(ind, val);
};

const controlUpdateStatus = (ind) => {
  model.markCompleted(ind);
};

const controlClearTodos = () => {
  model.clearAll();
  displayTodosView.renderTodos(model.state.toDos);
};

const init = () => {
  window.addEventListener('load', controlDisplayTodos);
  addTodoView.addControllerAddTodo(controlAddTodo);
  removeTodoView.addControllerRemoveTodo(controlRemoveTodo);
  editTodoView.addControllerEditTodo(controlEditTodo);
  updateStatusView.addControllerUpdateStatus(controlUpdateStatus);
  clearTodosView.addControllerClearTodos(controlClearTodos);
};

init();
