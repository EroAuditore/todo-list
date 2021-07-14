export default function createList() {
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
    let element = document.createElement('li');
    element.innerHTML = task.description;
    element.classList.add('hello');
    todoList.appendChild(element);
  })

  todoList.appendChild(cAllElement);
}