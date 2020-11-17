
import {renderTaskButton} from "./tasks/DisplayTaskButton.js"
import {getTasks, useTasks} from "./tasks/TaskDataProvider.js"
import { friendsList } from "./friends/FriendsList.js"
import "./tasks/TaskForm.js"

// UserId is passed to all List Functions



export const Nutshell = () => {
    if (sessionStorage.activeUser) {
        // Render all your UI components here
        // const contentTarget = document.querySelector(".dashboard")
        // contentTarget.innerHTML = `<h1>Sometimes you feel like a nut</h1>`
        renderTaskButton()
        getTasks()
        useTasks()
        friendsList()
    } else {
        console.log("No User")
    } 
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("userAuthenticated", e => {   
    Nutshell()
})


