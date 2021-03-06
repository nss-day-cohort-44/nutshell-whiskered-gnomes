//J.Kaset provides, fetches, saves, deletes all data about articles
import {allFriendsURL} from "../friends/FriendsDataProvider.js"

const eventHub = document.querySelector(".container")
let articles = []


export const useArticles = () => {
    return articles.slice();
};

export const getArticles = () => {
    return fetch(`http://localhost:8088/articles?${allFriendsURL()}&_expand=user`)
    //(`http://localhost:8088/articles?${allFriendsURL()}&_expand=user`)(`http://localhost:8088/articles?_expand=user`)
    .then((response) => response.json())
    .then((parsedArticles) => {
        //console.log(`http://localhost:8088/articles?${allFriendsURL()}&_expand=user`)
        //console.log(parsedArticles)
        articles = parsedArticles;
    })
}
//save article
//first, listen for click event that saves form input in ArticleForm.js
const dispatchStateChangeEvent = () => {
    const articleStateChangedEvent = new CustomEvent("articleStateChanged");
    eventHub.dispatchEvent(articleStateChangedEvent)
}

export const saveArticles = (articles) => {
    return fetch("http://localhost:8088/articles", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(articles),
    })
    .then(getArticles)
    .then(dispatchStateChangeEvent);
};

//to delete article
export const deleteArticle = id => {
    return fetch(`http://localhost:8088/articles/${id}`,{
      method: "DELETE"
    })
    .then(getArticles)
  }