//J.Kaset HTML representation of one article. 

export const Article = (articleObj) => {
  return `
    <div class="news--card" id="userId--${articleObj.user.id}">
    <p><a href="#" id="${articleObj.user.id}">${articleObj.user.username}</a>:
    <h4>${articleObj.title}</h4>

    <p>Synopsis: ${articleObj.synopsis}</p>
    <p></p> <a href="${articleObj.url}" target="blank">Click to read!</a>
    
    <button id="deleteArticle--${articleObj.id}">Delete</button>
    </div>
    `
  }