import {renderTaskButton} from "./tasks/AddTask.js"
//import {renderTaskForm} from "./tasks/TaskForm.js"
import {getTasks, useTasks} from "./tasks/TaskDataProvider.js"
import "./tasks/TaskForm.js"
import { TaskListComponent } from "./tasks/TaskList.js"

export const Nutshell = () => {
    // Render all your UI components here
    // const contentTarget = document.querySelector(".dashboard")

    // contentTarget.innerHTML = `<h1>Sometimes you feel like a nut</h1>`
    
    renderTaskButton()
    //renderTaskForm()
    getTasks()
    useTasks()
    TaskListComponent()
    
}


//renders Nutshell immediately after login
const eventHub = document.querySelector(".container")
eventHub.addEventListener("userAuthenticated", e => {   
    Nutshell()
})

