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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Q7O0FBRS9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtREFBUztBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxXQUFXLElBQUksS0FBSztBQUMvRSx3Q0FBd0MsV0FBVyxxQkFBcUIsWUFBWSxFQUFFLE1BQU0sV0FBVyxpQkFBaUI7QUFDeEg7QUFDQSxnREFBZ0QsV0FBVztBQUMzRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLG1EQUFTO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxvREFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixtREFBUztBQUN6Qjs7QUFFQTtBQUNBOztBQUVBLEVBQUUsb0RBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLG1EQUFTO0FBQ3pCOztBQUVBO0FBQ0Esd0JBQXdCLHFEQUFXOztBQUVuQyxFQUFFLG9EQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGbkI7O0FBRUE7O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcnVkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWxwZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRUb2RvcywgdXBkYXRlSW5kZXgsIHVwbG9hZFRvZG8gfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5jb25zdCBmb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtY29udGFpbmVyJyk7XG5jb25zdCB0b2RvSW5wdXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWlucHV0Jyk7XG5jb25zdCBsaXN0c0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RzJyk7XG5cbmNvbnN0IHJlbmRlclRvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tzID0gbG9hZFRvZG9zKCk7XG4gIGlmICghdGFza3MpIHJldHVybjtcblxuICBjb25zdCB0YXNrc1NvcnRlZCA9IHRhc2tzLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xuICBsaXN0c0VsLmlubmVySFRNTCA9ICcnO1xuICB0YXNrc1NvcnRlZC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRhc2s7XG4gICAgY29uc3QgZmxhZyA9IGNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnO1xuICAgIGNvbnN0IGNyb3NzID0gY29tcGxldGVkID8gJ2Nyb3NzJyA6ICcnO1xuICAgIGNvbnN0IG1hcmt1cCA9IGBcbiAgICAgIDxsaSBjbGFzcz1cImxpc3RcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibGlzdC1sZWZ0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrXCIgZGF0YS1jaGVjaz1cIiR7dGFzay5pbmRleH1cIiAke2ZsYWd9Lz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGF0YS1kZXNjPVwiJHt0YXNrLmluZGV4fVwiIGNsYXNzPVwidG9kbyB0b2RvLSR7dGFzay5pbmRleH0gJHtjcm9zc31cIiB2YWx1ZT1cIiR7dGFzay5kZXNjcmlwdGlvbn1cIi8+XG4gICAgICA8L3NwYW4+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHJlbW92ZVwiIGRhdGEtcmVtb3ZlPVwiJHt0YXNrLmluZGV4fVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtdHJhc2gtY2FuXCI+PC9pPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8L2xpPlxuICAgIGA7XG5cbiAgICBsaXN0c0VsLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbWFya3VwKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRUb2RvID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0YXNrcyA9IGxvYWRUb2RvcygpO1xuICBjb25zdCB0b0RvID0gdG9kb0lucHV0RWwudmFsdWUudHJpbSgpO1xuICB0b2RvSW5wdXRFbC52YWx1ZSA9ICcnO1xuICBpZiAoIXRvRG8pIHJldHVybjtcblxuICBjb25zdCB0YXNrID0ge1xuICAgIGRlc2NyaXB0aW9uOiB0b0RvLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgaW5kZXg6IHRhc2tzLmxlbmd0aCxcbiAgfTtcblxuICBjb25zdCB0YXNrc01vZCA9IFsuLi50YXNrcywgdGFza107XG4gIHVwbG9hZFRvZG8odGFza3NNb2QpO1xuICByZW5kZXJUb2RvKCk7XG59O1xuXG5jb25zdCB1cGRhdGVUb2RvID0gKGUpID0+IHtcbiAgY29uc3QgY2xpY2tlZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50b2RvJyk7XG4gIGlmICghY2xpY2tlZCkgcmV0dXJuO1xuXG4gIGNvbnN0IHRhc2tzID0gbG9hZFRvZG9zKCk7XG4gIGNvbnN0IGxpc3ROdW0gPSArY2xpY2tlZC5kYXRhc2V0LmRlc2M7XG5cbiAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaW5kZXggPT09IGxpc3ROdW0pO1xuICB0YXNrLmRlc2NyaXB0aW9uID0gY2xpY2tlZC52YWx1ZS50cmltKCk7XG5cbiAgdXBsb2FkVG9kbyh0YXNrcyk7XG59O1xuXG5jb25zdCByZW1vdmVUb2RvID0gKGUpID0+IHtcbiAgY29uc3QgY2xpY2tlZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5yZW1vdmUnKTtcbiAgaWYgKCFjbGlja2VkKSByZXR1cm47XG5cbiAgY29uc3QgdGFza3MgPSBsb2FkVG9kb3MoKTtcbiAgY29uc3QgbGlzdE51bSA9ICtjbGlja2VkLmRhdGFzZXQucmVtb3ZlO1xuXG4gIGNvbnN0IHRhc2tzTW9kID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmluZGV4ICE9PSBsaXN0TnVtKTtcbiAgY29uc3QgdGFza3NNb2RJbmRleCA9IHVwZGF0ZUluZGV4KHRhc2tzTW9kKTtcblxuICB1cGxvYWRUb2RvKHRhc2tzTW9kSW5kZXgpO1xuICByZW5kZXJUb2RvKCk7XG59O1xuXG5mb3JtRWwuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkVG9kbyk7XG5saXN0c0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlVG9kbyk7XG5saXN0c0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBkYXRlVG9kbyk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRvZG87XG4iLCJleHBvcnQgY29uc3QgbG9hZFRvZG9zID0gKCkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSkgfHwgW107XG5cbmV4cG9ydCBjb25zdCB1cGxvYWRUb2RvID0gKHRhc2tzKSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlSW5kZXggPSAodGFza3NNb2QpID0+IHtcbiAgbGV0IHRhc2tzTW9kSW5kZXggPSBbXTtcbiAgdGFza3NNb2QuZm9yRWFjaCgodGFzaywgaW5kKSA9PiB7XG4gICAgdGFzay5pbmRleCA9IGluZDtcbiAgICB0YXNrc01vZEluZGV4ID0gWy4uLnRhc2tzTW9kSW5kZXgsIHRhc2tdO1xuICB9KTtcblxuICByZXR1cm4gdGFza3NNb2RJbmRleDtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=