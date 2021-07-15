import data from './data';

export default updateStatus(task) {
    data = data.map(obj =>
        obj.index === task.index ? { ...obj, completed: task.completed } : obj
    );
}