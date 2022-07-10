import { loadTodos, updateIndex, uploadTodo } from './helpers';

const formEl = document.querySelector('.input-container');
const todoInputEl = document.querySelector('.todo-input');
const listsEl = document.querySelector('.lists');

const renderTodo = () => {
  const tasks = loadTodos();
  if (!tasks) return;

  const tasksSorted = tasks.slice().sort((a, b) => a.index - b.index);
  listsEl.innerHTML = '';
  tasksSorted.forEach((task) => {
    const { completed } = task;
    const flag = completed ? 'checked' : '';
    const cross = completed ? 'cross' : '';
    const markup = `
      <li class="list">
      <span class="list-left">
        <input type="checkbox" class="check" data-check="${task.index}" ${flag}/>
        <input type="text" data-desc="${task.index}" class="todo todo-${task.index} ${cross}" value="${task.description}"/>
      </span>
      <button class="btn remove" data-remove="${task.index}">
        <i class="fa-regular fa-trash-can"></i>
      </button>
      </li>
    `;

    listsEl.insertAdjacentHTML('beforeend', markup);
  });
};

const addTodo = (e) => {
  e.preventDefault();
  const tasks = loadTodos();
  const toDo = todoInputEl.value.trim();
  todoInputEl.value = '';
  if (!toDo) return;

  const task = {
    description: toDo,
    completed: false,
    index: tasks.length,
  };

  const tasksMod = [...tasks, task];
  uploadTodo(tasksMod);
  renderTodo();
};

const updateTodo = (e) => {
  const clicked = e.target.closest('.todo');
  if (!clicked) return;

  const tasks = loadTodos();
  const listNum = +clicked.dataset.desc;

  const task = tasks.find((task) => task.index === listNum);
  task.description = clicked.value.trim();

  uploadTodo(tasks);
};

const removeTodo = (e) => {
  const clicked = e.target.closest('.remove');
  if (!clicked) return;

  const tasks = loadTodos();
  const listNum = +clicked.dataset.remove;

  const tasksMod = tasks.filter((task) => task.index !== listNum);
  const tasksModIndex = updateIndex(tasksMod);

  uploadTodo(tasksModIndex);
  renderTodo();
};

formEl.addEventListener('submit', addTodo);
listsEl.addEventListener('click', removeTodo);
listsEl.addEventListener('keyup', updateTodo);

export default renderTodo;
