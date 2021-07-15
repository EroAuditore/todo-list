import listElement from './listElement';
import data from './data';

export default function createList() {
  const todoList = document.getElementById('todo-list');

  /** ********************** First element **************************************** */
  const firstElement = document.createElement('li');
  const text = document.createElement('p');
  text.innerHTML = "today's to dos";
  text.classList.add('title-text');
  firstElement.appendChild(text);

  /** ********************** Search element **************************************** */
  const searchElement = document.createElement('li');
  const txtSearch = document.createElement('input');
  txtSearch.classList.add('txt-input');
  searchElement.appendChild(txtSearch);

  /** ********************** End list element **************************************** */
  const cAllElement = document.createElement('li');
  const btn = document.createElement('button');
  btn.innerText = 'Clear all elements';
  btn.classList.add('btn-clear');
  cAllElement.appendChild(btn);

  todoList.appendChild(firstElement);
  todoList.appendChild(searchElement);

  data.forEach((task) => {
    const element = listElement(task);
    todoList.appendChild(element);
  });

  todoList.appendChild(cAllElement);
}