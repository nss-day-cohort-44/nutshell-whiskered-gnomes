//J.Kaset HTML representation of one article. 
const eventHub = document.querySelector(".container");

export const Article = (articleObj) => {
  if(articleObj.userId === parseInt(sessionStorage.getItem("activeUser"))) {
  return `
    <div class="news--card" id="userId--${articleObj.user.id}">
      <p class="username"><a href="#" id="${articleObj.user.id}">${articleObj.user.username}</a>:
      <h4>${articleObj.title}</h4>

      <p>${articleObj.synopsis}</p>
      <p><a href="${articleObj.url}" target="blank">Click to read!</a></p>
    
      <button class="deleteButton" id="deleteArticle--${articleObj.id}">Delete</button>
    </div>
    `
  }
  else {
    return`
    <div class="news--card" id="userId--${articleObj.user.id}">
      <p class="username"><a href="#" id="${articleObj.user.id}">${articleObj.user.username}</a>:
      <h4>${articleObj.title}</h4>

      <p>${articleObj.synopsis}</p>
      <p><a href="${articleObj.url}" target="blank">Click to read!</a></p>
    </div>
    `
    }
}