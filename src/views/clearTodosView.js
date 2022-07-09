class ClearTodosView {
  #parentEl = document.querySelector('.btn-clear');

  addControllerClearTodos(handler) {
    this.#parentEl.addEventListener('click', handler);
  }
}

export default new ClearTodosView();
