const listElement = (task) => {
    const element = document.createElement('li');

    const divElmt = document.createElement('div');
    divElmt.classList.add('div-content');
    
    const p = document.createElement('p');
    p.textContent = task.description;

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.check = task.completed;

    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-ellipsis-v');

    divElmt.appendChild(check);
    divElmt.appendChild(p);
    element.appendChild(divElmt);
    element.appendChild(icon);
    
    element.classList.add('list-element');
    return element;
}
 
export default listElement;