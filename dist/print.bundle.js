/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/components/createList.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createList)
/* harmony export */ });
function createList() {
  const data =[{ description: 'study', completed: false, index: 2 },
 { description: 'work out', completed: false, index: 0 },
 { description: 'eat', completed: false, index: 1 },]

  const todoList = document.getElementById('todo-list');

  /************************ First element *****************************************/
  const firstElement = document.createElement('li');
  const text = document.createElement('p');
  text.innerHTML = "today's todos";
  firstElement.appendChild(text);


/************************ Search element *****************************************/
  const searchElement = document.createElement('li');
  const txtSearch = document.createElement('input');
  searchElement.appendChild(txtSearch);

/************************ End list element *****************************************/
  const cAllElement = document.createElement('li');
  const btn = document.createElement('button');
  btn.innerText = "Clear";
  cAllElement.appendChild(btn);
  
  todoList.appendChild(firstElement);
  todoList.appendChild(txtSearch);

  data.map((task)=>{
    let element = task(task);
    todoList.appendChild(element);
  })

  todoList.appendChild(cAllElement);
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9jcmVhdGVMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2YsZ0JBQWdCLG1EQUFtRDtBQUNuRSxFQUFFLHNEQUFzRDtBQUN4RCxFQUFFLGlEQUFpRDs7QUFFbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDIiwiZmlsZSI6InByaW50LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTGlzdCgpIHtcbiAgY29uc3QgZGF0YSA9W3sgZGVzY3JpcHRpb246ICdzdHVkeScsIGNvbXBsZXRlZDogZmFsc2UsIGluZGV4OiAyIH0sXG4geyBkZXNjcmlwdGlvbjogJ3dvcmsgb3V0JywgY29tcGxldGVkOiBmYWxzZSwgaW5kZXg6IDAgfSxcbiB7IGRlc2NyaXB0aW9uOiAnZWF0JywgY29tcGxldGVkOiBmYWxzZSwgaW5kZXg6IDEgfSxdXG5cbiAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0Jyk7XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKiBGaXJzdCBlbGVtZW50ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBjb25zdCBmaXJzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZXh0LmlubmVySFRNTCA9IFwidG9kYXkncyB0b2Rvc1wiO1xuICBmaXJzdEVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiBTZWFyY2ggZWxlbWVudCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgY29uc3Qgc2VhcmNoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHR4dFNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHNlYXJjaEVsZW1lbnQuYXBwZW5kQ2hpbGQodHh0U2VhcmNoKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiBFbmQgbGlzdCBlbGVtZW50ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBjb25zdCBjQWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4uaW5uZXJUZXh0ID0gXCJDbGVhclwiO1xuICBjQWxsRWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuICBcbiAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoZmlyc3RFbGVtZW50KTtcbiAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodHh0U2VhcmNoKTtcblxuICBkYXRhLm1hcCgodGFzayk9PntcbiAgICBsZXQgZWxlbWVudCA9IHRhc2sodGFzayk7XG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH0pXG5cbiAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoY0FsbEVsZW1lbnQpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=