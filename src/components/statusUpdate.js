/* eslint-disable import/no-mutable-exports */
let data = [{ description: 'study', completed: false, index: 2 },
  { description: 'work out', completed: false, index: 0 },
  { description: 'eat', completed: false, index: 1 }];

const saveData = () => {
  const jsonData = JSON.stringify(data);
  localStorage.setItem('data', jsonData);
};

const updateStatus = (index, elm) => {
  const findObj = data.find((obj) => obj.index === index);
  findObj.completed = elm.checked;
  saveData();
};

const clearData = () => {
  data = [];
};

const addData = (obj) => {
  data.push(obj);
};

const loadData = () => {
  const localData = localStorage.getItem('data');
  data = localData == null ? data : JSON.parse(localData);
};
export {
  data, clearData, addData, saveData, updateStatus, loadData,
};
/* eslint-enable import/no-mutable-exports */