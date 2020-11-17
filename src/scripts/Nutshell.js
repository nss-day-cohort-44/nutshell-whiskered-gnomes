import { renderEventsButton } from "./events/AddEvent.js"
import {renderTaskButton} from "./tasks/DisplayTaskButton.js"
import {getTasks, useTasks} from "./tasks/TaskDataProvider.js"
import "./tasks/TaskForm.js"
import "./events/EventForm.js"
import { EventList } from "./events/EventList.js"

export const Nutshell = () => {
    // Render all your UI components here
    // const contentTarget = document.querySelector(".dashboard")

    // contentTarget.innerHTML = `<h1>Sometimes you feel like a nut</h1>`
    
    renderTaskButton()
    getTasks()
    useTasks()
    //TaskForm()
    
    renderEventsButton()
    EventList()
    // EventForm()
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("userAuthenticated", e => {   
    Nutshell()
})