
import { getTasks, useTasks } from "./tasks/TaskDataProvider.js"
import { renderTaskButton } from "./tasks/DisplayTaskButton.js"
import { renderEventsButton } from "./events/AddEvent.js"
import { friendsList } from "./friends/FriendsList.js"
import { TaskListComponent } from "./tasks/TaskList.js"
import { renderTaskButton } from "./tasks/AddTask.js"
import { EventList } from "./events/EventList.js"
import "./events/EventForm.js"
import "./tasks/TaskForm.js"


export const Nutshell = () => {
    if (sessionStorage.activeUser) {
        // Render all your UI components here

        renderEventsButton()
        TaskListComponent()
        renderTaskButton()
        friendsList()
        EventList()
        getTasks()
        useTasks()
    } else {
        console.log("No User")
    }
}


//renders Nutshell immediately after login
const eventHub = document.querySelector(".container")
eventHub.addEventListener("userAuthenticated", e => {
    Nutshell()
})


