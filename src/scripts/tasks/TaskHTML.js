//J.Kaset HTML representation of one task 

export const Task = (taskObj) => {
  return `
  <div class="">
    <h5>${taskObj.task}</h5>
    <p>${taskObj.completeDate}</p>
    
    <p></p>
    </div>
  `
}