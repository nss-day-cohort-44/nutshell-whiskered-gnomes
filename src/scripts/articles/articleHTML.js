//J.Kaset HTML representation of one article

export const Article = (articleObj) => {
  return `
    <div class="article--card" id="userId--${articleObj.userId}">
    <p><a href="#" id="${articleObj.user.id}">${articleObj.user.username}</a>:
    <h3>${articleObj.task}</h3>

    <p>Expected Completion: ${taskObj.completeDate}</p>
    <input type="checkbox" id="completeTask--${taskObj.id}" name="completed" value="completed" />
    <label for="completed">Select when completed</label>
    <button id="deleteTask--${taskObj.id}">Delete</button>
  </div>
  `
}