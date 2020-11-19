import { MessageList } from "./messages/MessageList.js"
import { MessageForm } from "./messages/MessageForm.js"
import { getFriends } from "./friends/FriendsDataProvider.js"
import { getTasks, useTasks } from "./tasks/TaskDataProvider.js"
import { renderEventsButton } from "./events/AddEvent.js"
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
    // Render all your UI components here
    if (sessionStorage.activeUser) {
        renderEventsButton()
        TaskListComponent()
        renderTaskButton()
        getTasks()
        useTasks()
        MessageList()
        MessageForm()
        getFriends()
            .then(friendsList)
            .then(EventList)

    } else {
        console.log("No User")
    }
}


//renders Nutshell immediately after login
const eventHub = document.querySelector(".container")
eventHub.addEventListener("userAuthenticated", e => {
    Nutshell()
})

