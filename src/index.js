import './style.css';

const listsEl = document.querySelector('.lists');

const tasks = [
  {
    description: 'Visit friends',
    completed: false,
    index: 0,
  },
  {
    description: 'Visit family',
    completed: false,
    index: 1,
  },
  {
    description: 'Doctor appointment',
    completed: false,
    index: 2,
  },
  {
    description: 'Finish project',
    completed: false,
    index: 3,
  },
];

tasks.forEach((task) => {
  const markup = `
    <li class="list">${task.description}</>
  `;

  listsEl.insertAdjacentHTML('beforeend', markup);
});
