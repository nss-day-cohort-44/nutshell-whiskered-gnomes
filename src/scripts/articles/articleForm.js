//J.Kaset - This module is responsible for rendering the form. Also creates click event for saving articles. 

import {getArticles, saveArticles} from "./ArticleDataProvider.js"
//import {ArticleListComponent} from "./ArticleList.js"

const eventHub = document.querySelector(".container")
const articleContainer = document.querySelector(".articleForm")

// listens for click event dispatched in AddArticle.js
eventHub.addEventListener("articleButtonClicked", () => {
  //console.log("heard")
  renderArticleForm()
})

export const renderArticleForm = () => {

  articleContainer.innerHTML = `
  <h3 class="article_instruction">Post a New Article</h3>
  <form id="articleForm">
  <input type="text" id="article--articleName" placeholder="Article Title">
  <input type="text" id="article--synopsis" placeholder="This article is about..."> 
  <input type="text" id="article--url" placeholder="paste URL here">
  <button id="saveArticle">Save Article</button>
        </form>
  `
}

// create click event for Save Event button on form
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveArticle") {
  const userId= parseInt(sessionStorage.getItem("activeUser"));
  const title = document.querySelector("#article--articleName").value;
  const synopsis = document.querySelector("#article--synopsis").value;
  const url = document.querySelector("#article--url").value;
  const timestamp = Date.now()
    // Make a new object representation of an event
  const newArticle = {
      // Key/value pairs here
      userId,
      url,
      title,
      synopsis,
      timestamp
  };
  // Change API state and application state
    saveArticles(newArticle)
  }
})