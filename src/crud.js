const formEl = document.querySelector('.input-container');
const todoInputEl = document.querySelector('.todo-input');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const tasks = JSON.parse(localStorage.getItem('todos')) || [];
  const toDo = todoInputEl.value.trim();
  if (!toDo) return;

  const task = {
    description: toDo,
    completed: false,
    index: tasks.length,
  };

  const tasksMod = [...tasks, task];
  localStorage.setItem('todos', JSON.stringify(tasksMod));
});
