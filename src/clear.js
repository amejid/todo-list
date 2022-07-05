export const markCompleted = (e) => {
  const clicked = e.target.closest('.check');
  if (!clicked) return;

  const listNum = +clicked.dataset.btn;

  const listEl = document.querySelector(`.list-${listNum}`);

  listEl.querySelector('.empty-check').classList.toggle('active');
  listEl.querySelector('.checked').classList.toggle('active');
  listEl.querySelector('.todo').classList.toggle('cross');

  const tasks = JSON.parse(localStorage.getItem('todos')) || [];

  const compTask = tasks.find((task) => task.index === listNum);
  compTask.completed = !compTask.completed;
  localStorage.setItem('todos', JSON.stringify(tasks));
};

export const clearAll = () => {
  const tasks = JSON.parse(localStorage.getItem('todos')) || [];
  const remTasks = tasks.filter((task) => task.completed === false);

  let tasksModIndex = [];
  remTasks.forEach((task, ind) => {
    task.index = ind;
    tasksModIndex = [...tasksModIndex, task];
  });

  localStorage.setItem('todos', JSON.stringify(tasksModIndex));
};
