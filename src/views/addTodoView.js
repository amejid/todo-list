class AddTodoView {
  #parentEl = document.querySelector('.input-container');

  #inputEl = document.querySelector('.todo-input');

  #clearInput() {
    this.#inputEl.value = '';
  }

  addControllerAddTodo(handler) {
    this.#parentEl.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputVal = this.#inputEl.value.trim();
      this.#clearInput();
      handler(inputVal);
    });
  }
}

export default new AddTodoView();
