import { allFriendsURL, getFriends } from "./friends/FriendsDataProvider.js"
import { getTasks, useTasks } from "./tasks/TaskDataProvider.js"
import { renderEventsButton } from "./events/AddEvent.js"
import { getEvents } from "./events/EventDataProvider.js"
import { MessageList } from "./messages/MessageList.js"
import { TaskListComponent } from "./tasks/TaskList.js"
import { friendsList } from "./friends/FriendsList.js"
import { renderTaskButton } from "./tasks/AddTask.js"
import { EventList } from "./events/EventList.js"
import "./friends/DeleteFriend.js"
import "./events/EventForm.js"
import "./tasks/TaskForm.js"
import "./friends/FriendForm.js"
import "./friends/AddFriend.js"


export const Nutshell = () => {
    if (sessionStorage.activeUser) {
        getTasks()
        renderEventsButton()
        TaskListComponent()
        renderTaskButton()
        friendsList()
        EventList()
        getTasks()
        useTasks()
        MessageList()
        // Render all your UI components here
        getFriends()
            .then(allFriendsURL)
            .then(getEvents)
    } else {
        console.log("No User")
    }
}


//renders Nutshell immediately after login
const eventHub = document.querySelector(".container")
eventHub.addEventListener("userAuthenticated", e => {
    Nutshell()
})

