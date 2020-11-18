//J.Kaset provides, fetches, saves, deletes all data about articles
import {allFriendsURL} from "../friends/FriendsDataProvider.js"

let articles = []

const dispatchStateChangeEvent = () => {
    const articleStateChangedEvent = new CustomEvent("articleStateChanged");
    eventHub.dispatchEvent(articleStateChangedEvent)
}

export const useArticles = () => {
    return articles.slice();
};

export const getArticles = () => {
    return fetch(`http://localhost:8088/articles?${allFriendsURL()}&_expand=user`)
    .then((response) => response.json())
    .then((parsedArticles) => {
        console.log(`http://localhost:8088/articles?_expand=user`)
        console.log(parsedArticles)
        articles = parsedArticles;
    })
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