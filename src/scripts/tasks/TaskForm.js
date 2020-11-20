//J.Kaset - This module is responsible for rendering the form. Also creates click event for saving tasks.

import {saveTask, useTasks} from "./TaskDataProvider.js"

const eventHub = document.querySelector(".container")
const taskContainer = document.querySelector(".taskForm")
const editContainer = document.querySelector(".taskUpdate")


// listens for click event dispatched in AddTask.js
eventHub.addEventListener("taskButtonClicked", () => {
  //console.log("heard")
  renderTaskForm()
})

export const renderTaskForm = () => {

  taskContainer.innerHTML = `
  <form class="taskForm">
  <input id="taskForm--title" type="text" placeholder="Task Name" required/>
  <label id="taskForm--label" for="taskForm--date">Completion date:</label>
  <input id="taskForm--date" type="date" required/>
  <button id="saveTask" type="button">Save task</button>
  </form>
  `
}

export const renderEditTaskForm = (taskObj) => {

  editContainer.innerHTML = `
  <h4>Edit your Task</h4>
  <form class="taskForm">
  <input id="taskForm--title" type="text" placeholder="${taskObj.task}" required/>
  <label for="taskForm--${taskObj.completeDate}.value">Completion date:</label>
  <input id="taskForm--${taskObj.completeDate}" type="date" required/>
  <button id="editTask" type="button">Save task</button>
  </form>
  `
}

//renderEditTaskForm above  value=${taskObj.something}, give button editId task

//create click event for Save button on form
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveTask") {
    //grab input values
    const userId = parseInt(sessionStorage.getItem("activeUser"))
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

//listen for edit event created in TaskList.js
eventHub.addEventListener("editButtonClicked", editEvent => {
  //console.log("heard")
  const allTasks = useTasks()
  const taskToEdit = allTasks.find(task => task.id === editEvent.detail.taskId)
  console.log(taskToEdit)
  
  renderEditTaskForm(taskToEdit)
  //editTask()
  
})