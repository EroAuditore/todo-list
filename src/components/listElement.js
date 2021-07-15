import {
  dragStart, dragEnd, dragOver, dragLeave, drop,
} from './interaction';

const listElement = (task) => {
  const element = document.createElement('li');
  element.draggable = true;
  element.classList.add('draggable');
  element.setAttribute('index', task.index);
  element.addEventListener('dragstart', () => { dragStart(element); });
  element.addEventListener('dragover', (event) => { dragOver(element, event); });
  element.addEventListener('dragleave', () => { dragLeave(element); });
  element.addEventListener('drop', () => { drop(element); });
  element.addEventListener('dragend', () => { dragEnd(element); });

  const divElmt = document.createElement('div');
  divElmt.classList.add('div-content');

  const p = document.createElement('p');
  p.textContent = task.description;
  p.classList.add('description');

  const check = document.createElement('input');
  check.classList.add('completed');
  check.type = 'checkbox';
  check.check = task.completed;
  //   check.addEventListener('change', check){
  //     updateStatus(task);
  //   }

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-ellipsis-v');

  divElmt.appendChild(check);
  divElmt.appendChild(p);
  element.appendChild(divElmt);
  element.appendChild(icon);

  element.classList.add('list-element');
  return element;
};

export default listElement;