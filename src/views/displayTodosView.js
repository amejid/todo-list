class DisplayTodosView {
  #parentEl = document.querySelector('.lists');

  renderTodos = (tasks) => {
    if (!tasks) return;

    const tasksSorted = tasks.slice().sort((a, b) => a.index - b.index);
    this.#parentEl.innerHTML = '';
    tasksSorted.forEach((task) => {
      const { completed } = task;
      const flag = completed ? 'checked' : '';
      const cross = completed ? 'cross' : '';
      const markup = `
        <li class="list">
          <span class="list-left">
            <input type="checkbox" class="check" data-check="${task.index}" ${flag}>
            <input type="text" data-desc="${task.index}" class="todo todo-${task.index} ${cross}" value="${task.description}"/>
          </span>
          <button class="btn remove" data-remove="${task.index}">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </>
      `;

      this.#parentEl.insertAdjacentHTML('beforeend', markup);
    });
  };
}

export default new DisplayTodosView();
