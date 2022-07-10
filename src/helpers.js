export const loadTodos = () => JSON.parse(localStorage.getItem('todos')) || [];

export const uploadTodo = (tasks) => localStorage.setItem('todos', JSON.stringify(tasks));

export const updateIndex = (tasksMod) => {
  let tasksModIndex = [];
  tasksMod.forEach((task, ind) => {
    task.index = ind;
    tasksModIndex = [...tasksModIndex, task];
  });

  return tasksModIndex;
};
