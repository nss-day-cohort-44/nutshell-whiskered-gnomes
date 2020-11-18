// Heath Lester
// Listens for "saveFriend"; parses through users; adds relationship; re-renders FriendsList.


import { useUsers } from "../UsersDataProvider.js"
import { addFriend } from "./FriendsDataProvider.js"
import { friendsList } from "./FriendsList.js"


const eventHub = document.querySelector(".container")


// Takes the dispatched friend username and is used to find the corresponding user;
// THEN the current userId and the id of the recently found user is placed into an object and posted to the api.
// Then friendList() is re-rendered.
// IF the found user does not exist, alert is given "User not found".
eventHub.addEventListener("addSavedFriend", friendObj => {
    // debugger
    const userId = parseInt(sessionStorage.getItem("activeUser"))
    const allUsers = useUsers()
    const followeeId = allUsers.find(friend => friend.username === friendObj.detail.friendUsername)

    if (followeeId) {
        const newRelationship = {
            userId,
            followeeId: followeeId.id
        }

        addFriend(newRelationship)
            .then(friendsList)
    } else {
        alert("User not found!")
    }

})