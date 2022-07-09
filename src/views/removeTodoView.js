class RemoveTodoView {
  #parentEl = document.querySelector('.lists');

  addControllerRemoveTodo(handler) {
    this.#parentEl.addEventListener('click', (e) => {
      const clicked = e.target.closest('.remove');
      if (!clicked) return;
      const ind = +clicked.dataset.remove;
      handler(ind);
    });
  }
}

export default new RemoveTodoView();
