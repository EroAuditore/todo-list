/* eslint-disable import/no-cycle */
import {
  data, addData, saveData, removeCompleted,
} from './statusUpdate';
import listElement from './listElement';
import { orderData, clearData } from './interaction';

const clearDOMList = () => {
  const todoListElement = document.querySelectorAll('.list-element');
  todoListElement.forEach((elm) => { elm.remove(); });
};

const runList = () => {
  const todoList = document.getElementById('todo-list');
  data.forEach((task) => {
    const element = listElement(task);
    todoList.appendChild(element);
  });
  const clearBtn = document.getElementById('clear-btn');
  todoList.appendChild(clearBtn);
};

const createTask = (e) => {
  if (e.keyCode === 13) {
    const newTask = {
      description: e.target.value,
      completed: false,
      index: data.length + 1,
    };
    addData(newTask);
    clearDOMList();
    runList();
    saveData();
  }
};

const updateTask = (index, elm) => {
  const findObj = data.find((obj) => obj.index === index);
  findObj.description = elm.value;
  saveData();
};

const clearAllCompleted = () => {
  const completed = data.filter((obj) => !obj.completed);
  clearData();
  removeCompleted(completed);
  orderData();
  saveData();
  clearDOMList();
  runList();
};

const deleteTask = (index) => {
  const removed = data.filter((obj) => obj.index !== index);
  clearData();
  removeCompleted(removed);
  orderData();
  saveData();
  clearDOMList();
  runList();
};

export {
  createTask, runList, updateTask, clearAllCompleted, deleteTask,
};
/* eslint-enable import/no-cycle */