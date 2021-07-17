/* eslint-disable import/no-mutable-exports */
let data = [];

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

const removeCompleted = (newData) => {
  data = [...newData];
};

const addData = (obj) => {
  data.push(obj);
};

const loadData = () => {
  const localData = localStorage.getItem('data');
  data = localData == null ? data : JSON.parse(localData);
};
export {
  data, clearData, addData, saveData, updateStatus, loadData, removeCompleted,
};
/* eslint-enable import/no-mutable-exports */