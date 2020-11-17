// Heath Lester
// Listens for "saveFriend"; parses through users; adds relationship; re-renders FriendsList.

import { useUsers } from "../UsersDataProvider.js"
import { addFriend } from "./FriendsDataProvider.js"
import { friendsList } from "./FriendsList.js"

const eventHub = document.querySelector(".container")
const userId = parseInt(sessionStorage.getItem("activeUser"))

eventHub.addEventListener("addSavedFriend", friendObj => {
    debugger
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