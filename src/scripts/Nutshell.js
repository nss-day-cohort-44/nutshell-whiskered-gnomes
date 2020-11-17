import { renderEventsButton } from "./events/AddEvent.js"
import {renderTaskButton} from "./tasks/AddTask.js"
import {getTasks, useTasks} from "./tasks/TaskDataProvider.js"
import "./tasks/TaskForm.js"
import "./events/EventForm.js"
import { EventList } from "./events/EventList.js"
import {TaskListComponent} from "./tasks/TaskList.js"

export const Nutshell = () => {
    // Render all your UI components here
    // const contentTarget = document.querySelector(".dashboard")

    // contentTarget.innerHTML = `<h1>Sometimes you feel like a nut</h1>`
    
    renderTaskButton()
    //renderTaskForm()
    getTasks()
    useTasks()
    TaskListComponent()
    
    //TaskForm()
    
    renderEventsButton()
    EventList()
    // EventForm()
}


//renders Nutshell immediately after login
const eventHub = document.querySelector(".container")
eventHub.addEventListener("userAuthenticated", e => {   
    Nutshell()
})