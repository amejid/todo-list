class UpdateStatusView {
  #parentEl = document.querySelector('.lists');

  addControllerUpdateStatus(handler) {
    this.#parentEl.addEventListener('change', (e) => {
      const clicked = e.target.closest('.check');
      if (!clicked) return;

      const ind = +clicked.dataset.check;

      document.querySelector(`.todo-${ind}`).classList.toggle('cross');
      handler(ind);
    });
  }
}

export default new UpdateStatusView();
