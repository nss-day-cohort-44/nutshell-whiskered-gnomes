//J.Kaset renders articles button and creates click event for it

const contentTarget = document.querySelector(".articles")
const eventHub = document.querySelector(".container")


export const renderArticleButton = () => {

  contentTarget.innerHTML = `
    <button class="button" id="create-article-button">Add Article</button>
    `
}

//when you click Add Task button
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "create-article-button") {

    const articleButtonClicked = new CustomEvent("articleButtonClicked")
    console.log(articleButtonClicked, "article button clicked")
    eventHub.dispatchEvent(articleButtonClicked)
  }
})