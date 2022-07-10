"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["crud"],{

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");


const formEl = document.querySelector('.input-container');
const todoInputEl = document.querySelector('.todo-input');
const listsEl = document.querySelector('.lists');

const renderTodo = () => {
  const tasks = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.loadTodos)();
  if (!tasks) return;

  const tasksSorted = tasks.slice().sort((a, b) => a.index - b.index);
  listsEl.innerHTML = '';
  tasksSorted.forEach((task) => {
    const { completed } = task;
    const flag = completed ? 'checked' : '';
    const cross = completed ? 'cross' : '';
    const markup = `
      <li class="list">
      <span class="list-left">
        <input type="checkbox" class="check" data-check="${task.index}" ${flag}/>
        <input type="text" data-desc="${task.index}" class="todo todo-${task.index} ${cross}" value="${task.description}"/>
      </span>
      <button class="btn remove" data-remove="${task.index}">
        <i class="fa-regular fa-trash-can"></i>
      </button>
      </li>
    `;

    listsEl.insertAdjacentHTML('beforeend', markup);
  });
};

const addTodo = (e) => {
  e.preventDefault();
  const tasks = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.loadTodos)();
  const toDo = todoInputEl.value.trim();
  todoInputEl.value = '';
  if (!toDo) return;

  const task = {
    description: toDo,
    completed: false,
    index: tasks.length,
  };

  const tasksMod = [...tasks, task];
  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.uploadTodo)(tasksMod);
  renderTodo();
};

const updateTodo = (e) => {
  const clicked = e.target.closest('.todo');
  if (!clicked) return;

  const tasks = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.loadTodos)();
  const listNum = +clicked.dataset.desc;

  const task = tasks.find((task) => task.index === listNum);
  task.description = clicked.value.trim();

  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.uploadTodo)(tasks);
};

const removeTodo = (e) => {
  const clicked = e.target.closest('.remove');
  if (!clicked) return;

  const tasks = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.loadTodos)();
  const listNum = +clicked.dataset.remove;

  const tasksMod = tasks.filter((task) => task.index !== listNum);
  const tasksModIndex = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.updateIndex)(tasksMod);

  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.uploadTodo)(tasksModIndex);
  renderTodo();
};

formEl.addEventListener('submit', addTodo);
listsEl.addEventListener('click', removeTodo);
listsEl.addEventListener('keyup', updateTodo);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTodo);


/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadTodos": () => (/* binding */ loadTodos),
/* harmony export */   "updateIndex": () => (/* binding */ updateIndex),
/* harmony export */   "uploadTodo": () => (/* binding */ uploadTodo)
/* harmony export */ });
const loadTodos = () => JSON.parse(localStorage.getItem('todos')) || [];

const uploadTodo = (tasks) => localStorage.setItem('todos', JSON.stringify(tasks));

const updateIndex = (tasksMod) => {
  let tasksModIndex = [];
  tasksMod.forEach((task, ind) => {
    task.index = ind;
    tasksModIndex = [...tasksModIndex, task];
  });

  return tasksModIndex;
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/crud.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1EQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxXQUFXLElBQUksS0FBSztBQUMvRSx3Q0FBd0MsV0FBVyxxQkFBcUIsWUFBWSxFQUFFLE1BQU0sV0FBVyxpQkFBaUI7QUFDeEg7QUFDQSxnREFBZ0QsV0FBVztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbURBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtREFBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtREFBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscURBQVc7QUFDbkM7QUFDQSxFQUFFLG9EQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZuQjtBQUNQO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NydWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hlbHBlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZFRvZG9zLCB1cGRhdGVJbmRleCwgdXBsb2FkVG9kbyB9IGZyb20gJy4vaGVscGVycyc7XHJcblxyXG5jb25zdCBmb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtY29udGFpbmVyJyk7XHJcbmNvbnN0IHRvZG9JbnB1dEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8taW5wdXQnKTtcclxuY29uc3QgbGlzdHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0cycpO1xyXG5cclxuY29uc3QgcmVuZGVyVG9kbyA9ICgpID0+IHtcclxuICBjb25zdCB0YXNrcyA9IGxvYWRUb2RvcygpO1xyXG4gIGlmICghdGFza3MpIHJldHVybjtcclxuXHJcbiAgY29uc3QgdGFza3NTb3J0ZWQgPSB0YXNrcy5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcclxuICBsaXN0c0VsLmlubmVySFRNTCA9ICcnO1xyXG4gIHRhc2tzU29ydGVkLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0YXNrO1xyXG4gICAgY29uc3QgZmxhZyA9IGNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnO1xyXG4gICAgY29uc3QgY3Jvc3MgPSBjb21wbGV0ZWQgPyAnY3Jvc3MnIDogJyc7XHJcbiAgICBjb25zdCBtYXJrdXAgPSBgXHJcbiAgICAgIDxsaSBjbGFzcz1cImxpc3RcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0LWxlZnRcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja1wiIGRhdGEtY2hlY2s9XCIke3Rhc2suaW5kZXh9XCIgJHtmbGFnfS8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGF0YS1kZXNjPVwiJHt0YXNrLmluZGV4fVwiIGNsYXNzPVwidG9kbyB0b2RvLSR7dGFzay5pbmRleH0gJHtjcm9zc31cIiB2YWx1ZT1cIiR7dGFzay5kZXNjcmlwdGlvbn1cIi8+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biByZW1vdmVcIiBkYXRhLXJlbW92ZT1cIiR7dGFzay5pbmRleH1cIj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtdHJhc2gtY2FuXCI+PC9pPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9saT5cclxuICAgIGA7XHJcblxyXG4gICAgbGlzdHNFbC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1hcmt1cCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBhZGRUb2RvID0gKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgdGFza3MgPSBsb2FkVG9kb3MoKTtcclxuICBjb25zdCB0b0RvID0gdG9kb0lucHV0RWwudmFsdWUudHJpbSgpO1xyXG4gIHRvZG9JbnB1dEVsLnZhbHVlID0gJyc7XHJcbiAgaWYgKCF0b0RvKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHRhc2sgPSB7XHJcbiAgICBkZXNjcmlwdGlvbjogdG9EbyxcclxuICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICBpbmRleDogdGFza3MubGVuZ3RoLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRhc2tzTW9kID0gWy4uLnRhc2tzLCB0YXNrXTtcclxuICB1cGxvYWRUb2RvKHRhc2tzTW9kKTtcclxuICByZW5kZXJUb2RvKCk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVUb2RvID0gKGUpID0+IHtcclxuICBjb25zdCBjbGlja2VkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRvZG8nKTtcclxuICBpZiAoIWNsaWNrZWQpIHJldHVybjtcclxuXHJcbiAgY29uc3QgdGFza3MgPSBsb2FkVG9kb3MoKTtcclxuICBjb25zdCBsaXN0TnVtID0gK2NsaWNrZWQuZGF0YXNldC5kZXNjO1xyXG5cclxuICBjb25zdCB0YXNrID0gdGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pbmRleCA9PT0gbGlzdE51bSk7XHJcbiAgdGFzay5kZXNjcmlwdGlvbiA9IGNsaWNrZWQudmFsdWUudHJpbSgpO1xyXG5cclxuICB1cGxvYWRUb2RvKHRhc2tzKTtcclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZVRvZG8gPSAoZSkgPT4ge1xyXG4gIGNvbnN0IGNsaWNrZWQgPSBlLnRhcmdldC5jbG9zZXN0KCcucmVtb3ZlJyk7XHJcbiAgaWYgKCFjbGlja2VkKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHRhc2tzID0gbG9hZFRvZG9zKCk7XHJcbiAgY29uc3QgbGlzdE51bSA9ICtjbGlja2VkLmRhdGFzZXQucmVtb3ZlO1xyXG5cclxuICBjb25zdCB0YXNrc01vZCA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pbmRleCAhPT0gbGlzdE51bSk7XHJcbiAgY29uc3QgdGFza3NNb2RJbmRleCA9IHVwZGF0ZUluZGV4KHRhc2tzTW9kKTtcclxuXHJcbiAgdXBsb2FkVG9kbyh0YXNrc01vZEluZGV4KTtcclxuICByZW5kZXJUb2RvKCk7XHJcbn07XHJcblxyXG5mb3JtRWwuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkVG9kbyk7XHJcbmxpc3RzRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVUb2RvKTtcclxubGlzdHNFbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwZGF0ZVRvZG8pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyVG9kbztcclxuIiwiZXhwb3J0IGNvbnN0IGxvYWRUb2RvcyA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtdO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwbG9hZFRvZG8gPSAodGFza3MpID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlSW5kZXggPSAodGFza3NNb2QpID0+IHtcclxuICBsZXQgdGFza3NNb2RJbmRleCA9IFtdO1xyXG4gIHRhc2tzTW9kLmZvckVhY2goKHRhc2ssIGluZCkgPT4ge1xyXG4gICAgdGFzay5pbmRleCA9IGluZDtcclxuICAgIHRhc2tzTW9kSW5kZXggPSBbLi4udGFza3NNb2RJbmRleCwgdGFza107XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB0YXNrc01vZEluZGV4O1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=