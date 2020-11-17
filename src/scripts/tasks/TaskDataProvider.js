//J.Kaset - This module is for keeping track of the state of Task data. Gets and Uses tasks. Creates and dispatches eventHub.

let tasks = []

export const getTasks = () => {
  return fetch("http://localhost:8088/tasks")
  .then(response => response.json())
    .then(apiData => {
      tasks = apiData
      
    })
}

export const useTasks = () => tasks.slice()