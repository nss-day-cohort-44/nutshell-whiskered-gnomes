
import { friendsList } from "./friends/FriendsList.js"

// UserId is passed to all List Functions
const userId = parseInt(sessionStorage.getItem("activeUser"))



export const Nutshell = () => {
    if (sessionStorage.activeUser) {
        // Render all your UI components here
        // const contentTarget = document.querySelector(".dashboard")
        // contentTarget.innerHTML = `<h1>Sometimes you feel like a nut</h1>`


        friendsList(userId)
    } else {
        console.log("No User")
    } 
}