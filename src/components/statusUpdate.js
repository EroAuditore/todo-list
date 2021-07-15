let data = [{ description: 'study', completed: false, index: 2 },
  { description: 'work out', completed: false, index: 0 },
  { description: 'eat', completed: false, index: 1 }];


const updateStatus = (task)=> {
    data = data.map(obj =>
        obj.index === task.index ? { ...obj, completed: task.completed } : obj
    );
}

const clearData = ()=> {
  data = []
}

const addData =(obj)=>{
  data.push(obj);
}

const saveData = () =>{
  const jsonData = JSON.stringify(data);
  localStorage.setItem('data', jsonData);
}

export {data, clearData, addData, saveData};