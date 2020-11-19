// Author: JK- create a component reponsible for saving/adding an event to upcoming events 
const contentTarget = document.querySelector(".articles")
const eventHub = document.querySelector(".container")


export const renderArticleButton = () => {

    contentTarget.innerHTML = `
    <button id="add-article-button">Add Article</button>
    `
}

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "add-article-button") {
    const articleButtonClicked = new CustomEvent("articleButtonClicked")
    console.log(articleButtonClicked, "article button clicked")
    eventHub.dispatchEvent(articleButtonClicked)
    }
})