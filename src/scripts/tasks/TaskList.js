//J.Kaset - This module turns data into HTML (from TaskHTML.js), renders tasks saved in TaskForm.js to DOM


import { getTasks, useTasks, deleteTask, completeTask} from "./TaskDataProvider.js"
import { Task } from "./TaskHTML.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".tasksList")

//task list has been modified, update it
eventHub.addEventListener("taskStateChanged", () => { TaskListComponent() })

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
  contentTarget.innerHTML =
    `
  <div class="taskContainer">
  ${tasksHTML}
  </div>
  `
}

//EVENTHUB FOR DELETE
eventHub.addEventListener("click", e => {
  if (e.target.id.startsWith("deleteTask--")) {
    //console.log("I'm listnin")
    const [prefix, id] = e.target.id.split("--")

    deleteTask(id).then(
      () => {

        const updatedTasks = useTasks()
        TaskListComponent()
        render(updatedTasks)

      }
    )
  }
})

//EVENT FOR CLICKING COMPLETED IN RADIO BUTTON
eventHub.addEventListener("click", e => {
  if (e.target.id.startsWith("completeTask--")) {
    const [prefix, id] = e.target.id.split("--")
    completeTask(id).then(
      () => {
        const updatedTasks = useTasks()
        TaskListComponent()
        render(updatedTasks)
      })
  }
})

//when you click edit button - EDIT EVENT
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("editTask--")) {
    //console.log("hi")
    let [notUsed, taskId] = clickEvent.target.id.split("--")
    taskId = parseInt(taskId)
    
        const editButtonClicked = new CustomEvent("editButtonClicked",{
          detail: {
            taskId
          }
        })
        
        console.log(editButtonClicked, "edit button clicked")
        eventHub.dispatchEvent(editButtonClicked)
  }
})