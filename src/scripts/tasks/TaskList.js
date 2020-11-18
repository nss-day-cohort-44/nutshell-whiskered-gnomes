//J.Kaset - This module turns data into HTML (from TaskHTML.js), renders tasks saved in TaskForm.js to DOM


import {getTasks, useTasks} from "./TaskDataProvider.js"
import { renderTaskForm } from "./TaskForm.js"
import {Task} from "./TaskHTML.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".tasksList")

//task list has been modified, update it
eventHub.addEventListener("taskStateChanged", () => {TaskListComponent()})

//get, use and render submitted tasks to dom
let tasksArray = []
export const TaskListComponent = () => {  
  
  getTasks()
  .then(() => {
    const activeUser = parseInt(sessionStorage.getItem("activeUser"))
    tasksArray = useTasks().filter(user => parseInt(user.userId) === activeUser)
    render()
  }
  )
}

const render = () => {
  let tasksHTML = ""
  for (const task of tasksArray) {
    tasksHTML += Task(task)
  }
  contentTarget.innerHTML = `
  ${tasksHTML}
  `
}

// const parsedUserId = allTasks.filter(task => parseInt(task.userId))
// console.log(parsedUserId)
// const userSpecificTasks = allTasks.filter()
// render(userSpecificTasks)

// if (sessionStorage.getItem("activeUser") === parseInt(allTasks.userId)) {