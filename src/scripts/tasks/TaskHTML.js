//J.Kaset HTML representation of one task 

export const Task = (taskObj) => {
  return `
    <div class="task--card" id="userId--${taskObj.userId}">
    <h3>${taskObj.task}</h3>
    <p>Expected Completion: ${taskObj.completeDate}</p>
    <input type="radio" id="task--complete" name="completed" value="completed" />
    <label for="completed">Select when completed</label>
    <button id="task--delete">Delete</button>
  </div>
  `
}