
import { getTasks, useTasks } from "./tasks/TaskDataProvider.js"
import { renderTaskButton } from "./tasks/DisplayTaskButton.js"
import { renderEventsButton } from "./events/AddEvent.js"
import { friendsList } from "./friends/FriendsList.js"
import { EventList } from "./events/EventList.js"
import "./events/EventForm.js"
import "./tasks/TaskForm.js"


export const Nutshell = () => {
    if (sessionStorage.activeUser) {
        // Render all your UI components here

        renderEventsButton()
        renderTaskButton()
        friendsList()
        EventList()
        getTasks()
        useTasks()
    } else {
        console.log("No User")
    }
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("userAuthenticated", e => {
    Nutshell()
})


