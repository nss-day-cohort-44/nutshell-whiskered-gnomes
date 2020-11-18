// Heath Lester
// Renders the Users friends to the DOM and dispatches click event for adding a friend.

import { getFriends, useFriends } from "./FriendsDataProvider.js"
import { getUsers, useUsers } from "../UsersDataProvider.js"
import { friendHTML } from "./FriendHTML.js"

const eventHub = document.querySelector(".container")
const friendsElement = document.querySelector(".friends")


// Gets all relevant information, parses, then renders to the DOM.
export const friendsList = () => {
    // debugger
    // Retrieves current user's ID
    const userId = parseInt(sessionStorage.getItem("activeUser"))
    if (sessionStorage.activeUser) {
        // debugger
        getFriends()
            .then(getUsers)
            .then(() => {
                const allRelationships = useFriends()
                const allUsers = useUsers()

                parsedFriends(userId, allRelationships, allUsers)
            })
    }
}


// Filters all relationships for ones with a 'userId' that matches the current user; then Fills a new array with users that match the 'followeeId' from the filtered array; then renders it.
const parsedFriends = (currentUser, allRelationships, allUsers) => {
    // debugger
    const matchingRelationships = allRelationships.filter(relationshipTaco => relationshipTaco.userId === currentUser)
    let friendsArray = []
    matchingRelationships.map(relationshipTaco => {
        const matchingFriend = allUsers.find(userTaco => userTaco.id === relationshipTaco.followeeId)
        return friendsArray.push(matchingFriend)
    })
    return render(friendsArray)
}


// Creates a friend list box with an 'Add Friend' button and .maps the array of friends through an HTML function.
// IF no friends are present, will print "Wow, such empty... " to the friends list.
const render = (parsedFriendsArray) => {
    if (parsedFriendsArray.length > 0) {
        friendsElement.innerHTML = `
        <article class="friends__list">
            ${parsedFriendsArray.map(friend => friendHTML(friend)).join("")}
            <button id="addFriend">Add Friend</button>
        </article>
    `
    } else {
        friendsElement.innerHTML = `
        <article class="friends__list">
            <p>"Wow, such empty... "</p>
            <button id="addFriend">Add Friend</button>
        </article>
    `
    }
}


// Dispatches an event for adding a new friend.
eventHub.addEventListener("click", addButton => {
    if (addButton.target.id === "addFriend") {

        const addFriendEvent = new CustomEvent("add_Friend")

        eventHub.dispatchEvent(addFriendEvent)
    }
})