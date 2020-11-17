//J.Kaset - This module is responsible for rendering the form. Also creates click event for saving tasks.

const eventHub = document.querySelector(".container")
const taskContainer = document.querySelector(".tasks")


// listens for click event dispatched in DisplayTaskButton.js
eventHub.addEventListener("taskButtonClicked", () => {
  console.log("heard")
  renderForm()
})

const renderForm = () => {
  taskContainer.innerHTML = `
  <form class="taskForm">
  <input id="taskForm--title" type="text" placeholder="Task Name" required/>
  <label for="taskForm--date">Completion date:</label>
  <input id="taskForm--date" type="date" required/>
  <button id="saveTask" type="button">Save task</button>
  </form>
  `
}

//create click event for Save button on form
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveTask") {

    const saveButtonClicked = new CustomEvent("saveButtonClicked")
    console.log(saveButtonClicked, "save button clicked")
    eventHub.dispatchEvent(saveButtonClicked)
  }
})
