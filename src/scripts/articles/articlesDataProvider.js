//J.Kaset provides, fetches, saves, deletes all data about articles

let articles = [];

export const useArticles = () => {
    return articles.slice();
};

export const getArticles = () => {
    return fetch("http://localhost:8088/articles")
    .then((response) => response.json())
    .then((parsedArticles) => {
        //console.log(parsedArticles)
        articles = parsedArticles;
    });
};

