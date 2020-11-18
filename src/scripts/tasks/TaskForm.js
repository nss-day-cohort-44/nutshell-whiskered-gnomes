//J.Kaset - This module is responsible for rendering the form. Also creates click event for saving tasks.

import {saveTask} from "./TaskDataProvider.js"

const eventHub = document.querySelector(".container")
const taskContainer = document.querySelector(".tasksList")


// listens for click event dispatched in DisplayTaskButton.js
eventHub.addEventListener("taskButtonClicked", () => {
  //console.log("heard")
  renderTaskForm()
})

export const renderTaskForm = () => {

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
    //grab input values
    const userId = sessionStorage.getItem("activeUser")
    const task = document.querySelector("#taskForm--title").value
    const completed = false
    const completeDate = document.querySelector("#taskForm--date").value
    
  
    //console.log("heard")

    //make task object that renders to .taskList
    const newTask = {
      userId,
      task,
      completed,
      completeDate
    }
    //POST to API
    saveTask(newTask)
  }
})
