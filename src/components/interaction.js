
const dragStart = (elm)=>{
    elm.classList.add('draggin');
} 

const dragEnd = (elm)=>{
    elm.classList.remove('draggin');
} 

const dragOver = (elm, event)=>{
    elm.classList.add('over-elemt');
} 




export {dragStart, dragEnd, dragOver}