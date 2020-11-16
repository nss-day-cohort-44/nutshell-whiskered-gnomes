//J.Kaset - This module is responsible for rendering the form. Also creates click event for saving tasks.

const contentTarget = document.querySelector(".tasks")
const eventHub = document.querySelector(".container")


export const renderTaskButton = () => {

  contentTarget.innerHTML = `
    <button id="create-task-button">Create a Task</button>
    `
}

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "create-task-button") {

    const facilityButtonClicked = new CustomEvent("taskButtonClicked")

    eventHub.dispatchEvent(taskButtonClicked)

  }
})