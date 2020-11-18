//J.Kaset HTML representation of one task 

export const Task = (taskObj) => {
  return `
    <div class="task--card" id="userId--${taskObj.userId}">
    <h3>${taskObj.task}</h3>
    <p>Expected Completion: ${taskObj.completeDate}</p>
    <input type="radio" id="completeTask--${taskObj.id}" name="completed" value="completed" />
    <label for="completed">Select when completed</label>
    <button id="deleteTask--${taskObj.id}">Delete</button>
  </div>
  `
}