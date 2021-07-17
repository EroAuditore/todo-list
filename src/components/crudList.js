import {
  data, addData, saveData, removeCompleted,
} from './statusUpdate';
import { clearData } from './interaction';

const createTask = (e) => {
  const lastItem = data[data.length - 1];
  const newTask = {
    description: e.target.value,
    completed: false,
    index: lastItem ? lastItem.index + 1 : 0,
  };
  addData(newTask);
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
  saveData();
};

const deleteTask = (index) => {
  const removed = data.filter((obj) => obj.index !== index);
  clearData();
  removeCompleted(removed);
  saveData();
};

export {
  createTask, updateTask, clearAllCompleted, deleteTask,
};
