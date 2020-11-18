//J.Kaset - This module is for keeping track of the state of Task data. Gets and Uses tasks. Creates and dispatches eventHub.
const eventHub = document.querySelector(".container")

//initialize empty array
let tasks = []

//get tasks
export const getTasks = () => {
  return fetch("http://localhost:8088/tasks")
  .then(response => response.json())
    .then(apiData => {
      tasks = apiData
      
    })
}

//use tasks function
export const useTasks = () => tasks.slice()

//save task
//first, listen for click event that saves form input in TaskForm.js
const dispatchStateChangeEvent = () => {
  eventHub.dispatchEvent(new CustomEvent("taskStateChanged"))
}

export const saveTask = (newTask) => {
  return fetch("http://localhost:8088/tasks", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newTask)
  })
    .then(getTasks)  // <-- Get all tasks
    .then(dispatchStateChangeEvent)  // <-- Broadcast the state change event
}

//to delete task
export const deleteTask = id => {
  return fetch(`http://localhost:8088/tasks/${id}`,{
    method: "DELETE"
  })
  .then(getTasks)
}