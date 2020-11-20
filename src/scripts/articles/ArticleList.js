//J.Kaset create a component reponsible for envoking all the other components in this module and rendering
// a list of events to the DOM 
import { getArticles, useArticles, deleteArticle } from "./ArticleDataProvider.js"
import { Article } from "./articleHTML.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".articlesList")
const headerElement = document.querySelector(".news_header")

 //article list has been modified, update it, this event was created in provider, along with the save function
eventHub.addEventListener("articleStateChanged", () => { ArticleListComponent() })

//get, use and render submitted tasks to dom
export const ArticleListComponent = () => {
  
  getArticles()
  .then(() => {
    const articles = useArticles()
    //console.log(articles)
    render(articles)
  })
}

//let articlesArray = []

const render = (articlesArray) => {
  let articlesHTML = ""
  for (const article of articlesArray) {
    articlesHTML += Article(article)
  }
  //console.log(articlesArray) 
  contentTarget.innerHTML = 
  `
  <div class="articleContainer">
  ${articlesHTML}
  </div>
  `
  headerElement.innerHTML = `News`
 
}

//EVENTHUB FOR DELETE
eventHub.addEventListener("click", e => {
  if (e.target.id.startsWith("deleteArticle--")) {
    //console.log("I'm listnin")
    const [prefix, id] = e.target.id.split("--")

    deleteArticle(id).then(
      () => {
        
        const updatedArticles = useArticles()
        console.log(updatedArticles)
        ArticleListComponent()
        render(updatedArticles)
    
      }
    )
  }
})