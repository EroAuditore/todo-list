import {clearData, addData, saveData} from './statusUpdate'

const dragStart = (elm) => {
  elm.classList.add('draggin');
};

const dragEnd = (elm) => {
  elm.classList.remove('draggin');
};

const dragOver = (elm, event) => {
  event.preventDefault();
  elm.classList.add('over-element');
};

const dragLeave = (elm) => {
  elm.classList.remove('over-element');
};

const drop = (elm) => {
  elm.classList.remove('over-element');
  const elmDragged = document.querySelector('.draggin');
  elm.before(elmDragged);
  orderData();
  clearData();
  updateData();
  saveData();
};
const orderData = ()=>{
  const draggableElements = document.querySelectorAll('.draggable');
  let i = 0;
  draggableElements.forEach((element)=>{
    element.setAttribute('index', i);
    i++;
  })
}
const updateData =()=>{
  const draggableElements = document.querySelectorAll('.draggable');
  draggableElements.forEach((element)=>{
    const descriptionTxt = element.getElementsByClassName('description')[0].textContent;
    const completedChk = element.getElementsByClassName('completed')[0].checked;
    const indexT = element.getAttribute('index');
    const newTask ={
      description: descriptionTxt,
      completed: completedChk,
      index: indexT
    }
    addData(newTask);
  })
}


export {
  dragStart, dragEnd, dragOver, dragLeave, drop,
};