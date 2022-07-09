class EditTodoView {
  #parentEl = document.querySelector('.lists');

  addControllerEditTodo(handler) {
    this.#parentEl.addEventListener('keyup', (e) => {
      const targetEl = e.target.closest('.todo');
      if (!targetEl) return;

      const ind = +targetEl.dataset.desc;
      const val = targetEl.value.trim();

      handler(ind, val);
    });
  }
}

export default new EditTodoView();
