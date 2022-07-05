const formEl = document.querySelector('.input-container');
const todoInputEl = document.querySelector('.todo-input');
const listsEl = document.querySelector('.lists');

const renderTodo = () => {
  const tasks = JSON.parse(localStorage.getItem('todos')) || [];
  if (!tasks) return;

  const tasksSorted = tasks.slice().sort((a, b) => a.index - b.index);
  listsEl.innerHTML = '';
  tasksSorted.forEach((task) => {
    const { completed } = task;
    const flag = !completed ? '' : 'active';
    const notComp = !completed ? 'active' : '';
    const markup = `
      <li class="list list-${task.index}">
        <span class="list-left">
          <button class="btn check" data-btn="${task.index}">
            <span class="empty-check ${notComp}"><i class="fa-regular fa-square active"></i></span>
            <span class="checked ${flag}"><i class="fa-solid fa-check"></i></span>
          </button>
          <input type="text" data-desc="${task.index}" class="todo" value="${task.description}"/>
        </span>
        <button class="btn remove" data-remove="${task.index}">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </>
    `;

    listsEl.insertAdjacentHTML('beforeend', markup);
  });
};

const addTodo = (e) => {
  e.preventDefault();
  const tasks = JSON.parse(localStorage.getItem('todos')) || [];
  const toDo = todoInputEl.value.trim();
  todoInputEl.value = '';
  if (!toDo) return;

  const task = {
    description: toDo,
    completed: false,
    index: tasks.length,
  };

  const tasksMod = [...tasks, task];
  localStorage.setItem('todos', JSON.stringify(tasksMod));
  renderTodo();
};

const removeTodo = (e) => {
  const clicked = e.target.closest('.todo');
  if (!clicked) return;

  clicked.addEventListener('keyup', () => {
    const tasks = JSON.parse(localStorage.getItem('todos')) || [];
    const listNum = +clicked.dataset.desc;

    const task = tasks.find((task) => task.index === listNum);
    task.description = clicked.value.trim();

    localStorage.setItem('todos', JSON.stringify(tasks));
  });
};

const updateTodo = (e) => {
  const clicked = e.target.closest('.remove');
  if (!clicked) return;

  const tasks = JSON.parse(localStorage.getItem('todos')) || [];
  const listNum = +clicked.dataset.remove;

  const tasksMod = tasks.filter((task) => task.index !== listNum);
  let tasksModIndex = [];
  tasksMod.forEach((task, ind) => {
    task.index = ind;
    tasksModIndex = [...tasksModIndex, task];
  });

  localStorage.setItem('todos', JSON.stringify(tasksModIndex));
  renderTodo();
};

formEl.addEventListener('submit', addTodo);
listsEl.addEventListener('click', removeTodo);
listsEl.addEventListener('click', updateTodo);

export default renderTodo;
