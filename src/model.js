export const state = {
  toDos: [],
};

export const loadTodo = () => {
  state.toDos = JSON.parse(localStorage.getItem('todos')) || [];
};

const uploadTodo = (tasks) => {
  localStorage.setItem('todos', JSON.stringify(tasks));
  loadTodo();
};

const updateIndex = (tasksMod) => {
  let tasksModIndex = [];
  tasksMod.forEach((task, ind) => {
    task.index = ind;
    tasksModIndex = [...tasksModIndex, task];
  });

  return tasksModIndex;
};

export const addTodo = (toDo) => {
  if (!toDo) return;

  loadTodo();

  const task = {
    description: toDo,
    completed: false,
    index: state.toDos.length,
  };

  const tasksMod = [...state.toDos, task];

  uploadTodo(tasksMod);
};

export const editTodo = (ind, val) => {
  loadTodo();

  const task = state.toDos.find((task) => task.index === ind);
  task.description = val;

  uploadTodo(state.toDos);
};

export const removeTodo = (ind) => {
  loadTodo();

  const tasksMod = state.toDos.filter((task) => task.index !== ind);

  const tasksModIndex = updateIndex(tasksMod);

  uploadTodo(tasksModIndex);
};

export const markCompleted = (ind) => {
  loadTodo();

  const compTask = state.toDos.find((task) => task.index === ind);
  compTask.completed = !compTask.completed;
  uploadTodo(state.toDos);
};

export const clearAll = () => {
  loadTodo();
  const remTasks = state.toDos.filter((task) => task.completed === false);

  const tasksModIndex = updateIndex(remTasks);

  uploadTodo(tasksModIndex);
};
