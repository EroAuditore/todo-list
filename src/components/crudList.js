import { data, addData, saveData } from "./statusUpdate";
import listElement from './listElement';

const createTask =(e)=>{
    
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
   
}

const updateTask = (index, elm) => {
    const findObj = data.find((obj) => obj.index === index);
    findObj.description = elm.value;
    console.log("elm", findObj);
    saveData();
  };


const runList =()=>{
    const todoList = document.getElementById('todo-list');
    data.forEach((task) => {
        const element = listElement(task);
        todoList.appendChild(element);
      });
      const clearBtn = document.getElementById('clear-btn');
      todoList.appendChild(clearBtn);
  
}

const clearDOMList =() =>{
    const todoListElement = document.querySelectorAll('.list-element');
    todoListElement.forEach(elm =>{ elm.remove()})
   
  
}

export {createTask, runList, updateTask}