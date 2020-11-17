import { EventForm } from "./events/EventForm.js"
import {renderTaskButton} from "./tasks/DisplayTaskButton.js"
import {getTasks, useTasks} from "./tasks/TaskDataProvider.js"
import "./tasks/TaskForm.js"

export const Nutshell = () => {
    // Render all your UI components here
    // const contentTarget = document.querySelector(".dashboard")

    // contentTarget.innerHTML = `<h1>Sometimes you feel like a nut</h1>`
    
    renderTaskButton()
    getTasks()
    useTasks()
    //TaskForm()
    EventForm()
}


