//J.Kaset HTML representation of one task 

export const Task = (taskObj) => {
  return `
  <div class="task--card">
    <h5>${taskObj.task}</h5>
    <p>Expected Completion: ${taskObj.completeDate}</p>
    <input type="radio" id="other" name="gender" value="other">
    <label for="other">Other</label>
    
  `
}