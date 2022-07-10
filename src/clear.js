import { loadTodos, updateIndex, uploadTodo } from './helpers';

export const markCompleted = (e) => {
  const clicked = e.target.closest('.check');
  if (!clicked) return;

  const listNum = +clicked.dataset.check;

  const tasks = loadTodos();
  document.querySelector(`.todo-${listNum}`).classList.toggle('cross');

  const compTask = tasks.find((task) => task.index === listNum);
  compTask.completed = !compTask.completed;
  uploadTodo(tasks);
};

export const clearAll = () => {
  const tasks = loadTodos();
  const remTasks = tasks.filter((task) => task.completed === false);

  const tasksModIndex = updateIndex(remTasks);

  uploadTodo(tasksModIndex);
};
