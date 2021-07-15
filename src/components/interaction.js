
const dragStart = (elm)=>{
    elm.classList.add('draggin');
} 

const dragEnd = (elm)=>{
    elm.classList.remove('draggin');
} 

const dragOver = (elm, event)=>{
    event.preventDefault();
    elm.classList.add('over-element');
} 

const dragLeave = (elm)=>{
    elm.classList.remove('over-element');
} 

const drop = (elm)=>{
    elm.classList.remove('over-element');
    const elmDragged = document.querySelector('.draggin');
    console.log("dragged",elmDragged);
    elm.before(elmDragged);

}





export {dragStart, dragEnd, dragOver, dragLeave, drop}