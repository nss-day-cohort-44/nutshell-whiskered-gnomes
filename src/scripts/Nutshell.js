import { MessageList } from "./messages/MessageList.js"
import { renderEventsButton } from "./events/AddEvent.js"
import { friendsList } from "./friends/FriendsList.js"
import { TaskListComponent } from "./tasks/TaskList.js"
import { renderTaskButton } from "./tasks/AddTask.js"
import { EventList } from "./events/EventList.js"
import { renderArticleButton } from "./articles/AddArticle.js"
import "./friends/DeleteFriend.js"
import "./events/EventForm.js"
import "./tasks/TaskForm.js"
import "./friends/FriendForm.js"
import "./friends/AddFriend.js"
import { getArticles, useArticles } from "./articles/ArticlesDataProvider.js"
import "./articles/ArticleForm.js"



export const Nutshell = () => {
    if (sessionStorage.activeUser) {
        // Render all your UI components here

        renderEventsButton()
        TaskListComponent()
        renderTaskButton()
        friendsList()
        EventList()
        MessageList()
        renderArticleButton()
        getArticles()
        useArticles()
    } else {
        console.log("No User")
    }
}


//renders Nutshell immediately after login
const eventHub = document.querySelector(".container")
eventHub.addEventListener("userAuthenticated", e => {
    Nutshell()
})


