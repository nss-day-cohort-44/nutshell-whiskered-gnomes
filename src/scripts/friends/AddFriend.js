// Heath Lester
// Listens for "saveFriend"; parses through users; adds relationship; re-renders FriendsList.

import { useUsers } from "../UsersDataProvider.js"
import { addFriend } from "./FriendsDataProvider.js"
import { friendsList } from "./FriendsList.js"


const eventHub = document.querySelector(".container")
const userId = parseInt(sessionStorage.getItem("activeUser"))


// Takes the dispatched friend username and is used to find the corresponding user;
// THEN the current userId and the id of the recently found user is placed into an object and posted to the api.
// Then friendList() is re-rendered.
// IF the found user does not exist, alert is given "User not found".
eventHub.addEventListener("addSavedFriend", friendObj => {
    // debugger
    const allUsers = useUsers()
    const user = allUsers.find(user => user.username === friendObj.detail.friendUsername)

    if (user) {
        const newRelationship = {
            userId,
            followeeId: user.id
        }

        addFriend(newRelationship)
            .then(friendsList)
    } else {
        alert("User not found!")
    }

})