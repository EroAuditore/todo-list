import {
  dragStart, dragEnd, dragOver, dragLeave, drop,
} from './interaction';

import { updateStatus } from './statusUpdate';
import { updateTask } from './crudList';

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

  const txtInput = document.createElement('input');
  txtInput.value = task.description;
  txtInput.classList.add('txt-input');
  txtInput.addEventListener('change', () => {
    updateTask(parseInt(element.getAttribute('index'), 10), txtInput);
  });
  
  const check = document.createElement('input');
  check.classList.add('completed');
  check.type = 'checkbox';
  check.check = task.completed;
  check.addEventListener('change', () => {
    updateStatus(parseInt(element.getAttribute('index'), 10), check);
  });

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-ellipsis-v');

  divElmt.appendChild(check);
  divElmt.appendChild(txtInput);
  element.appendChild(divElmt);
  element.appendChild(icon);

  element.classList.add('list-element');
  return element;
};

export default listElement;