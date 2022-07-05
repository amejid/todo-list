import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';

import './style.css';

const listsEl = document.querySelector('.lists');

window.addEventListener('load', () => {
  const tasks = JSON.parse(localStorage.getItem('todos')) || [];
  if (!tasks) return;

  const tasksSorted = tasks.slice().sort((a, b) => a.index - b.index);
  tasksSorted.forEach((task) => {
    const markup = `
      <li class="list list-${task.index}">
        <span class="list-left">
          <button class="btn check" data-btn="${task.index}">
            <span class="empty-check active"><i class="fa-regular fa-square active"></i></span>
            <span class="checked"><i class="fa-solid fa-check"></i></span>
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
});
