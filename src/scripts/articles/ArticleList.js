
import { getArticles, useArticles } from "./ArticleDataProvider.js"
import { Article } from "./ArticleHTML.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".articlesList")

//task list has been modified, update it
eventHub.addEventListener("articleStateChanged", () => { ArticleListComponent() })

//get, use and render submitted tasks to dom
let articlesArray = []
export const ArticleListComponent = () => {

  getArticles()
    .then(() => {
      // const activeUser = parseInt(sessionStorage.getItem("activeUser"))
      // tasksArray = useTasks().filter(user => parseInt(user.userId) === activeUser)
      render()
    }
    )
}

const render = () => {
  let articlesHTML = ""
  for (const article of articlesArray) {
    articlesHTML += Article(article)
  }
  contentTarget.innerHTML = 
  `
  <div>
  <h3>Article List</h3>
  ${articlesHTML}
  </div>
  `
}