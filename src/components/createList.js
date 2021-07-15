import listElement from './listElement';
import { data } from './statusUpdate';

export default function createList() {
  const todoList = document.getElementById('todo-list');

  /** ********************** First element **************************************** */
  const firstElement = document.createElement('li');
  const text = document.createElement('p');
  text.innerHTML = "today's To dos";
  text.classList.add('title-text');
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-sync-alt');

  firstElement.appendChild(text);
  firstElement.appendChild(icon);

  /** ********************** Search element **************************************** */
  const searchElement = document.createElement('li');
  const txtSearch = document.createElement('input');
  txtSearch.placeholder = 'Add to your list...';
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