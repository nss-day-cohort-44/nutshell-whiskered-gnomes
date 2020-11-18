//J.Kaset - This module is responsible for rendering the form. Also creates click event for saving articles.

import {saveArticle} from "./ArticleDataProvider.js"

const eventHub = document.querySelector(".container")
const taskContainer = document.querySelector(".articleForm")

// listens for click event dispatched in AddArticle.js
eventHub.addEventListener("articleButtonClicked", () => {
  //console.log("heard")
  renderArticleForm()
})

export const renderArticleForm = () => {

  taskContainer.innerHTML = `
  <form class="taskForm">
  <input id="taskForm--title" type="text" placeholder="Task Name" required/>
  <label for="taskForm--date">Completion date:</label>
  <input id="taskForm--date" type="date" required/>
  <button id="saveTask" type="button">Save task</button>
  </form>
  `
}
